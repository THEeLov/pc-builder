import { Result } from "@badrap/result"
import { prisma } from "../../../client"
import { ConfigurationType, ParcialPCConfiguration } from "@prisma/client"
import handleError from "apps/backend/src/utils"
import { DbResult } from "apps/backend/types"
import { ParcialConfigEdit, PartialConfigCreate } from "../parcialConfigTypes"

async function create(userId: number, type: ConfigurationType): DbResult<ParcialPCConfiguration> {
    try {
        const newConfig = await prisma.parcialPCConfiguration.create({
            data: {
                userId,
                configurationType: type,
                totalPrice: 0,
            },
        })
        return Result.ok(newConfig)
    } catch (e) {
        return handleError(e, "at create partial config")
    }
}

async function update(userId: number, data: ParcialConfigEdit): DbResult<ParcialPCConfiguration> {
    try {
        const config = await prisma.parcialPCConfiguration.update({
            where: {
                userId,
            },
            data: {
                configurationType: data.configurationType,
                motherboardId: data.motherboardId,
                processorId: data.peocessorId,
                gpuId: data.gpuId,
                pcCaseId: data.PCCaseId,
                powerSupplyId: data.powerSupplyId,
                storages: {
                    connect: data.storages,
                },
                rams: {
                    connect: data.rams,
                },
            },
        })
        return Result.ok(config)
    } catch (e) {
        return handleError(e, "at update partial config")
    }
}

async function remove(userId: number): DbResult<void> {
    try {
        await prisma.parcialPCConfiguration.delete({
            where: {
                userId,
            },
        })
        return Result.ok(undefined)
    } catch (e) {
        return handleError(e, "at partial config delete")
    }
}

async function get(userId: number): DbResult<ParcialPCConfiguration> {
    try {
        const config = await prisma.parcialPCConfiguration.findFirstOrThrow({
            where: {
                userId,
            },
        })
        return Result.ok(config)
    } catch (e) {
        return handleError(e, "at parcial config get")
    }
}

export const ParcialConfigurationRepository = {
    create,
    update,
    remove,
    get,
}
