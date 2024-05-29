import { prisma } from "../../../client"
import { ConfigurationCreate } from "../configurationTypes"
import { DbResult } from "../../../../types"
import handleError from "../../../utils"
import { PCConfiguration } from "@prisma/client"
import { Result } from "@badrap/result"
import includeQuery, { ParcialConfigEdit } from "../../configurationQuery"

async function create(userId: number, data: ConfigurationCreate): DbResult<PCConfiguration> {
    try {
        const config = await prisma.$transaction(async (prisma) => {
            const config = await prisma.pCConfiguration.create({
                data: {
                    configurationType: data.configurationType,
                    motherboardId: data.motherboardId,
                    processorId: data.processorId,
                    gpuId: data.gpuId,
                    powerSupplyId: data.powerSupplyId,
                    pcCaseId: data.PCCaseId,
                    userId: userId,
                    totalPrice: 0,
                    storages: {
                        connect: data.storages,
                    },
                    rams: {
                        connect: data.rams,
                    },
                },
                include: includeQuery,
            })
            const price =
                config.motherboard.component.price +
                config.processor.component.price +
                config.gpu.component.price +
                config.powerSupply.component.price +
                config.pcCase.component.price +
                config.rams.reduce((total, ram) => total + ram.component.price, 0) +
                config.storages.reduce((total, storage) => total + storage.component.price, 0)
            const cfg = await prisma.pCConfiguration.update({
                where: {
                    id: config.id,
                },
                data: {
                    totalPrice: price,
                },
                include: includeQuery,
            })
            return cfg
        })
        return Result.ok(config)
    } catch (e) {
        return handleError(e, "in config create")
    }
}

async function update(configId: number, data: ParcialConfigEdit): DbResult<PCConfiguration> {
    try {
        const config = await prisma.$transaction(async (prisma) => {
            const config = await prisma.pCConfiguration.update({
                where: {
                    id: configId,
                },
                data: {
                    configurationType: data.configurationType,
                    motherboardId: data.motherboardId,
                    processorId: data.processorId,
                    gpuId: data.gpuId,
                    powerSupplyId: data.powerSupplyId,
                    pcCaseId: data.PCCaseId,
                    rams: {
                        set: data.rams,
                    },
                    storages: {
                        set: data.storages,
                    },
                },
                include: includeQuery,
            })
            const price =
                config.motherboard.component.price +
                config.processor.component.price +
                config.gpu.component.price +
                config.powerSupply.component.price +
                config.pcCase.component.price +
                config.rams.reduce((total, ram) => total + ram.component.price, 0) +
                config.storages.reduce((total, storage) => total + storage.component.price, 0)
            const configWithPrice = await prisma.pCConfiguration.update({
                where: {
                    id: configId,
                },
                data: {
                    totalPrice: price,
                },
                include: includeQuery,
            })
            return configWithPrice
        })
        return Result.ok(config)
    } catch (e) {
        return handleError(e, "at config update")
    }
}

async function get(configId: number) {
    try {
        const config = await prisma.pCConfiguration.findFirstOrThrow({
            where: {
                id: configId,
            },
            include: includeQuery,
        })
        return Result.ok(config)
    } catch (e) {
        return handleError(e, "at config get")
    }
}

async function getMany(userId: number): DbResult<PCConfiguration[]> {
    try {
        const configs = await prisma.pCConfiguration.findMany({
            where: {
                userId,
            },
            include: includeQuery,
        })
        return Result.ok(configs)
    } catch (e) {
        return handleError(e, "at getmany configs")
    }
}

async function remove(configId: number): DbResult<void> {
    try {
        await prisma.pCConfiguration.delete({
            where: {
                id: configId,
            },
        })
        return Result.ok(undefined)
    } catch (e) {
        return handleError(e, "at config delete")
    }
}

const configurationRepository = {
    create,
    update,
    get,
    getMany,
    remove,
}

export default configurationRepository
