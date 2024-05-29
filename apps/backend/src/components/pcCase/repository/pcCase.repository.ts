import { prisma } from "apps/backend/src/client"
import { Result } from "@badrap/result"
import { DbResult } from "apps/backend/types"
import handleError from "apps/backend/src/utils"
import ComponentQuery from "../../universal_types/query.type"
import { PCCaseWithComponent, PCCaseCreate, PCCaseEdit } from "../validation/pcCase.types"

async function create(createObj: PCCaseCreate): DbResult<PCCaseWithComponent> {
    try {
        const pcCase = await prisma.$transaction(async () => {
            const component = await prisma.component.create({
                data: createObj.component,
            })
            const pcCase = await prisma.pCCase.create({
                data: {
                    formFactor: createObj.formFactor,
                    componentId: component.id,
                },
                include: {
                    component: true,
                },
            })
            return pcCase
        })
        return Result.ok(pcCase)
    } catch (e) {
        return handleError(e, "In create PCCase")
    }
}

async function getMany(query: ComponentQuery): DbResult<PCCaseWithComponent[]> {
    try {
        const pcCases = await prisma.pCCase.findMany({
            where: {
                formFactor: query.formFactor,
            },
            include: {
                component: true,
            },
        })
        return Result.ok(pcCases)
    } catch (e) {
        return handleError(e, "in getMany pcCases")
    }
}

async function getSingle(id: number): DbResult<PCCaseWithComponent> {
    try {
        const pcCase = await prisma.pCCase.findUniqueOrThrow({
            where: { id },
            include: { component: true },
        })
        return Result.ok(pcCase)
    } catch (e) {
        return handleError(e, "in getsingle pcccase")
    }
}

async function update(id: number, updateObj: PCCaseEdit): DbResult<PCCaseWithComponent> {
    try {
        const pcCase = await prisma.pCCase.update({
            where: { id },
            data: updateObj,
            include: {
                component: true,
            },
        })
        return Result.ok(pcCase)
    } catch (e) {
        return handleError(e, "In pcCase update")
    }
}

async function remove(id: number): DbResult<void> {
    try {
        await prisma.$transaction(async () => {
            const pcCase = await prisma.pCCase.findUniqueOrThrow({
                where: { id },
            })
            await prisma.component.delete({
                where: { id: pcCase.componentId },
            })
            await prisma.pCCase.delete({
                where: { id },
            })
        })
        return Result.ok(undefined)
    } catch (e) {
        return handleError(e, "In remove PCCase")
    }
}

const PCCaseRepo = {
    create,
    getMany,
    getSingle,
    update,
    remove,
}

export default PCCaseRepo
