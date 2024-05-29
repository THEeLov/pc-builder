import { DbResult } from "apps/backend/types"
import { Result } from "@badrap/result"
import { prisma } from "apps/backend/src/client"
import { ProcessorWithComponent, ProcessorCreate, ProcessorEdit } from "../validation/processor.types"
import handleError from "apps/backend/src/utils"
import ComponentQuery from "../../universal_types/query.type"

async function create(createObj: ProcessorCreate): DbResult<ProcessorWithComponent> {
    try {
        const processor = await prisma.$transaction(async () => {
            const component = await prisma.component.create({
                data: createObj.component,
            })
            const processor = await prisma.processor.create({
                data: {
                    architecture: createObj.architecture,
                    cores: createObj.cores,
                    threads: createObj.threads,
                    bits: createObj.bits,
                    socket: createObj.socket,
                    componentId: component.id,
                },
                include: {
                    component: true,
                },
            })
            return processor
        })
        return Result.ok(processor)
    } catch (e) {
        return handleError(e, "In processor create")
    }
}

async function getMany(query: ComponentQuery): DbResult<ProcessorWithComponent[]> {
    try {
        const processors = await prisma.processor.findMany({
            where: {
                socket: query.socket,
            },
            include: {
                component: true,
            },
        })
        return Result.ok(processors)
    } catch (e) {
        return handleError(e, "In processor getmany")
    }
}

async function getSingle(id: number): DbResult<ProcessorWithComponent> {
    try {
        const processor = await prisma.processor.findUniqueOrThrow({
            where: { id },
            include: { component: true },
        })
        return Result.ok(processor)
    } catch (e) {
        return handleError(e, "In processor getSingle")
    }
}

async function update(id: number, updateObj: ProcessorEdit): DbResult<ProcessorWithComponent> {
    try {
        const processor = await prisma.processor.update({
            where: { id },
            data: updateObj,
            include: { component: true },
        })
        return Result.ok(processor)
    } catch (e) {
        return handleError(e, "in processor update")
    }
}

async function remove(id: number): DbResult<void> {
    try {
        await prisma.$transaction(async () => {
            const processor = await prisma.processor.findUniqueOrThrow({
                where: { id },
            })
            await prisma.component.delete({
                where: { id: processor.componentId },
            })
            await prisma.processor.delete({
                where: { id },
            })
        })
        return Result.ok(undefined)
    } catch (e) {
        return handleError(e, "in processor remove")
    }
}

const ProcessorRepo = {
    getMany,
    getSingle,
    create,
    update,
    remove,
}

export default ProcessorRepo
