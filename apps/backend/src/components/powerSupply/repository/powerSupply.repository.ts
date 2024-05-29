import { prisma } from "apps/backend/src/client"
import { DbResult } from "apps/backend/types"
import { Result } from "@badrap/result"
import handleError from "apps/backend/src/utils"
import ComponentQuery from "../../universal_types/query.type"
import { PowerSupplyCreate, PowerSupplyEdit, PowerSupplyWithComponent } from "../validation/powerSupply.types"

async function create(createObj: PowerSupplyCreate): DbResult<PowerSupplyWithComponent> {
    try {
        const powerSupply = await prisma.$transaction(async () => {
            const component = await prisma.component.create({
                data: createObj.component,
            })
            const powerSupply = await prisma.powerSupply.create({
                data: {
                    powerOutput: createObj.powerOutput,
                    efficiency: createObj.efficiency,
                    formFactor: createObj.formFactor,
                    componentId: component.id,
                },
                include: {
                    component: true,
                },
            })
            return powerSupply
        })
        return Result.ok(powerSupply)
    } catch (e) {
        return handleError(e, "In powerSupply craeate")
    }
}

async function getMany(query: ComponentQuery): DbResult<PowerSupplyWithComponent[]> {
    try {
        const powerSupplies = await prisma.powerSupply.findMany({
            where: {
                powerOutput: query.powerIO,
                formFactor: query.formFactor,
            },
            include: {
                component: true,
            },
        })
        return Result.ok(powerSupplies)
    } catch (e) {
        return handleError(e, "In powerSupply getmany")
    }
}

async function getSingle(id: number): DbResult<PowerSupplyWithComponent> {
    try {
        const powerSupply = await prisma.powerSupply.findUniqueOrThrow({
            where: { id },
            include: { component: true },
        })
        return Result.ok(powerSupply)
    } catch (e) {
        return handleError(e, "In powersupply find single")
    }
}

async function update(id: number, updateObj: PowerSupplyEdit): DbResult<PowerSupplyWithComponent> {
    try {
        const powerSupply = await prisma.powerSupply.update({
            where: { id },
            data: updateObj,
            include: { component: true },
        })
        return Result.ok(powerSupply)
    } catch (e) {
        return handleError(e, "in powerSupply update")
    }
}

async function remove(id: number): DbResult<void> {
    try {
        await prisma.$transaction(async () => {
            const powerSupply = await prisma.powerSupply.findUniqueOrThrow({
                where: { id },
            })
            await prisma.component.delete({
                where: {
                    id: powerSupply.componentId,
                },
            })
            await prisma.powerSupply.delete({
                where: { id },
            })
        })
        return Result.ok(undefined)
    } catch (e) {
        return handleError(e, "In delete powerSupply")
    }
}

const PowerSupplyRepo = {
    getMany,
    getSingle,
    create,
    update,
    remove,
}

export default PowerSupplyRepo
