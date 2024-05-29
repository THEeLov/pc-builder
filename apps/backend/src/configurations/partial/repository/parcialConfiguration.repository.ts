import { Result } from "@badrap/result"
import { prisma } from "../../../client"
import { ConfigurationType, ParcialPCConfiguration } from "@prisma/client"
import handleError from "../../../utils"
import { DbResult } from "../../../../types"
import includeQuery, { ParcialConfigEdit } from "../../configurationQuery"

async function create(userId: number, type: ConfigurationType): DbResult<ParcialPCConfiguration> {
    try {
        const newConfig = await prisma.parcialPCConfiguration.create({
            data: {
                userId,
                configurationType: type,
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
                processorId: data.processorId,
                gpuId: data.gpuId,
                pcCaseId: data.PCCaseId,
                powerSupplyId: data.powerSupplyId,
                storages: {
                    set: data.storages,
                },
                rams: {
                    set: data.rams,
                },
            },
            include: includeQuery,
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
            include: includeQuery,
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
