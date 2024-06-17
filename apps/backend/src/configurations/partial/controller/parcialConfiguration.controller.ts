import { Request, Response } from "express"
import { parcialConfigSchema } from "../validation/validation"
import { baseValidation } from "../../../base/validation/validation"
import { authorize } from "../../../utils"
import { ParcialConfigurationRepository } from "../repository/parcialConfiguration.repository"
import { ParcialConfigWithComponent } from "../parcialConfigTypes"
import { ConfigEdit, ParcialConfigEdit } from "../../configurationQuery"
import { ConfigurationType } from "@prisma/client"

const GamingConfig = {
    processorId: "9463465c-a8a7-4aa9-8424-94e22b617f96",
    motherboardId: "b8dbb237-f40d-416f-87f3-6a704063e9bd",
    gpuId: "078d2ad4-2c53-4a15-b76c-07e11c7d3491",
    powerSupplyId: "86f01c83-5a92-4610-a39b-46cdf0a2ad56",
    pcCaseId: "7e4aeb5d-df20-47e2-b5f2-89222e1d8885",
    storages: [{ id: "f8d61bd0-98a7-419f-bbe9-0c7458a1b2cb" }],
    rams: [{ id: "b7d8392b-2470-45e1-9fe2-e52ed52137a8" }, { id: "e82bbf74-442e-432c-8579-23cc4a183515" }],
}

const HighEndConfig = {
    processorId: "2b685d87-1b26-4958-9e55-4824a66b5f2e",
    motherboardId: "0b6a5a47-e1c6-4d2e-8b9c-3d7e4e6c5f5b",
    gpuId: "a1e6b2c5-8a4f-4b1e-8d3e-5e1a6a7c8f4b",
    powerSupplyId: "f1e4c3d5-6b8a-4a1e-b9d6-4c7a5e8f6a9b",
    pcCaseId: "e7a6b3c5-8d4e-4f1a-9c2e-5a6b7c8d4e5f",
    storages: [{ id: "f8d61bd0-98a7-419f-bbe9-0c7458a1b2cb" }],
    rams: [{ id: "6a9a1a47-8a6d-4f2e-b1da-1e1b9cdbbfc0" }, { id: "d4a6b6a2-9f87-4e2c-9c35-50e4ab127c67" }],
}

const OfficeConfig = {
    processorId: "c3d4e5f6-3456-7891-0112-cdef34567890",
    motherboardId: "d4e5f6g7-4567-8910-1121-def456789012",
    gpuId: "e5f6g7h8-5678-9101-1222-ef5678901234",
    powerSupplyId: "g7h8i9j0-7891-0112-3444-678901234567",
    pcCaseId: "h8i9j0k1-8910-1121-4555-789012345678",
    storages: [{ id: "f6g7h8i9-6789-1011-2333-f67890123456" }],
    rams: [{ id: "a1b2c3d4-1234-5678-9101-abcdef123456" }, { id: "b2c3d4e5-2345-6789-1011-bcdef2345678" }],
}

function getConfigAttributes(config: ConfigurationType) {
    switch (config) {
        case ConfigurationType.GAMING:
            return GamingConfig
        case ConfigurationType.OFFICE:
            return OfficeConfig
        case ConfigurationType.HIGH_END:
            return HighEndConfig
        default:
            return {}
    }
}

async function get(req: Request, res: Response): Promise<Response<ParcialConfigWithComponent>> {
    const validatedParams = baseValidation.IdRequestParams.safeParse(req.params)
    if (!validatedParams.success || !(await authorize(validatedParams.data.id, req.cookies.sessionId))) {
        return res.status(400).json(new Error("Bad request"))
    }
    const configuration = await ParcialConfigurationRepository.get(validatedParams.data.id)
    if (configuration.isErr) {
        return res.status(401).json(configuration.error)
    }
    if (configuration.isOk) {
        return res.status(200).json(configuration.value)
    }
    return res.status(500).json(new Error("error on our side"))
}

async function update(req: Request, res: Response): Promise<Response<ParcialConfigWithComponent>> {
    const validatedParams = baseValidation.IdRequestParams.safeParse(req.params)
    if (!validatedParams.success || !(await authorize(validatedParams.data.id, req.cookies.sessionId))) {
        return res.status(401).json(new Error("Unauthorized"))
    }
    const validatedBody = parcialConfigSchema.updateObject.safeParse(req.body)
    if (!validatedBody.success) {
        return res.status(400).json(new Error("Bad request"))
    }
    if (validatedBody.data.delete) {
        return removeComponentFromConfig(res, validatedParams.data.id, validatedBody.data)
    }
    const updatedConfig = await ParcialConfigurationRepository.update(validatedParams.data.id, validatedBody.data)
    if (!updatedConfig.isOk) {
        return res.status(500).json(updatedConfig.isErr ? updatedConfig.error : new Error("Internal error"))
    }
    return res.status(200).json(updatedConfig.value)
}

async function removeComponentFromConfig(res: Response, userId: string, body: ParcialConfigEdit) {
    body.motherboardId = body.motherboardId ? null : undefined
    body.processorId = body.processorId ? null : undefined
    body.gpuId = body.gpuId ? null : undefined
    body.PCCaseId = body.PCCaseId ? null : undefined
    body.powerSupplyId = body.powerSupplyId ? null : undefined
    const updatedConfig = await ParcialConfigurationRepository.removeComponent(userId, body)
    if (!updatedConfig.isOk) {
        return res.status(500).json(updatedConfig.isErr ? updatedConfig.error : new Error("Internal error"))
    }
    return res.status(200).json(updatedConfig.value)
}

async function create(req: Request, res: Response): Promise<Response<ParcialConfigWithComponent>> {
    const validatedParams = baseValidation.IdRequestParams.safeParse(req.params)
    const validatedBody = parcialConfigSchema.createObject.safeParse(req.body)
    if (
        !validatedParams.success ||
        !validatedBody.success ||
        !(await authorize(validatedParams.data.id, req.cookies.sessionId))
    ) {
        return res.status(400).json(new Error("Bad request"))
    }
    const configAttributes: ConfigEdit = getConfigAttributes(validatedBody.data.configurationType)
    const createdPartialConfig = await ParcialConfigurationRepository.create(validatedParams.data.id, {
        ...validatedBody.data,
        ...configAttributes,
    })
    if (!createdPartialConfig.isOk) {
        return res
            .status(500)
            .json(createdPartialConfig.isErr ? createdPartialConfig.error : new Error("Internal error"))
    }
    return res.status(200).json(createdPartialConfig.value)
}

async function remove(req: Request, res: Response): Promise<Response<void>> {
    const validatedParams = baseValidation.IdRequestParams.safeParse(req.params)
    if (!validatedParams.success || !(await authorize(validatedParams.data.id, req.cookies.sessionId))) {
        return res.status(400).json(new Error("Bad Request"))
    }
    const result = await ParcialConfigurationRepository.remove(validatedParams.data.id)
    if (result.isErr) {
        return res.status(500).json(result.error)
    }
    return res.status(200).json(undefined)
}

export const ParcialConfigurationController = {
    get,
    update,
    create,
    remove,
    removeComponentFromConfig,
}
