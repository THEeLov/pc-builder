import { GPUCreate, GPUEdit, GPUWithComponent } from "../validation/gpu.types";
import { prisma } from "apps/backend/src/client";
import { Result } from "@badrap/result";
import { DbResult } from "apps/backend/types";
import handleError from "apps/backend/src/utils";
import ComponentQuery from "../../universal_types/query.type";

async function create(createObj: GPUCreate): DbResult<GPUWithComponent> {
    try {
        const gpu = await prisma.$transaction(async () => {
            const component = await prisma.component.create({
                data: createObj.component,
            })
            const gpu = await prisma.gPU.create({
                data: {
                    memory: createObj.memory,
                    powerConnector: createObj.powerConnector,
                    interface: createObj.interface,
                    power: createObj.power,
                    componentId: component.id
                },
                include: {
                    component: true
                }
            })
            return gpu
        })
        return Result.ok(gpu)
    }
    catch (e) {
        return handleError(e, "In gpu create")
    }
}

async function getMany(query: ComponentQuery): DbResult<GPUWithComponent[]> {
    try {
        const gpus = await prisma.gPU.findMany({
            where: {
                interface: query.gpuInterface,
                power: query.powerIO
            },
            include: {
                component: true
            }
        })
        return Result.ok(gpus)
    }
    catch (e) {
        return handleError(e, "in gpu getMany")
    }
}

async function getSingle(id: number): DbResult<GPUWithComponent> {
    try {
        const gpu = await prisma.gPU.findUniqueOrThrow({
            where: {id},
            include: {component:true}
        })
        return Result.ok(gpu)
    }
    catch (e) {
        return handleError(e, "in gpu getSingle")
    }
}

async function update(id: number, updateObj: GPUEdit): DbResult<GPUWithComponent> {
    try {
        const gpu = await prisma.gPU.update( {
            where: {id},
            data: updateObj,
            include: {
                component: true
            }
        })
        return Result.ok(gpu)
    }
    catch (e) {
        return handleError(e, "In gpu update")
    }
}

async function remove(id: number) {
    try {
        await prisma.$transaction(async () => {
            const gpu = await prisma.gPU.findUniqueOrThrow({
                where: {id}
            })
            await prisma.component.delete({
                where: {id: gpu.componentId}
            })
            await prisma.gPU.delete({
                where: {id}
            })
        })
        return Result.ok(undefined)
    }
    catch (e) {
        return handleError(e, "in gpu remove")
    }
}

const GPURepo = {
    getMany,
    getSingle,
    create,
    update,
    remove,
}

export default GPURepo
