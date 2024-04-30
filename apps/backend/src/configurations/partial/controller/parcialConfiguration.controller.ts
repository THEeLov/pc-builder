import { ConfigurationType, ParcialPCConfiguration } from "@prisma/client"
import { SessionsRepository } from "../../../sessions/repository/sessions.repository"
import { Request, Response } from "express"
import { sessionNotExpired } from "apps/backend/src/utils"
import { parcialConfigSchema } from "../validation/validation"
import { authorize } from "../../../utils"
import { ParcialConfigurationRepository } from "../repository/parcialConfiguration.repository"

async function get(req: Request, res: Response): Promise<Response<ParcialPCConfiguration>> {
    if (!req.cookies.sessionId) {
        res.status(401).json(new Error("Unauthorized"))
    }
    const session = await SessionsRepository.get(req.cookies.sessionId)
    if (!session.isOk || !sessionNotExpired(session.value)) {
        return res.status(401).json(new Error("Unauthorized"))
    }
    const configuration = await ParcialConfigurationRepository.get(session.value.userId)
    if (configuration.isErr) {
        return res.status(401).json(configuration.error)
    }
    if (configuration.isOk) {
        return res.status(200).json(configuration.value)
    }
    return res.status(500).json(new Error("error on our side"))
}

async function update(req: Request, res: Response): Promise<Response<ParcialPCConfiguration>> {
    const validatedParams = parcialConfigSchema.userIdRequestParams.safeParse(req.params)
    if (!validatedParams.success 
        || !authorize(validatedParams.data.userId, req.cookies.sessionId)) {
        return res.status(401).json(new Error("Unauthorized"))
    }
    const validatedBody = parcialConfigSchema.updateObject.safeParse(req.body)
    if (!validatedBody.success) {
        return res.status(400).json(new Error("Bad request"))
    }

    const updatedConfig = await ParcialConfigurationRepository
                                .update(validatedParams.data.userId, validatedBody.data)
    if (!updatedConfig.isOk) {
        return res.status(500).json((updatedConfig.isErr) ? updatedConfig.error : new Error("Internal error"));
    }
    return res.status(200).json(updatedConfig.value);
}

async function create(req: Request, res: Response): Promise<Response<ParcialPCConfiguration>> {
    const validatedParams = parcialConfigSchema.userIdRequestParams.safeParse(req.params)
    const validatedBody = parcialConfigSchema.createObject.safeParse(req.body)
    if (!validatedParams.success 
        || !validatedBody.success 
        || !authorize(validatedParams.data.userId, req.cookies.sessionId)) {
        return res.status(400).json(new Error("Bad request"))
    }
    const createdPartialConfig = await ParcialConfigurationRepository
                                        .create(validatedParams.data.userId, validatedBody.data.configurationType)
    if (!createdPartialConfig.isOk) {
        return res.status(500).json((createdPartialConfig.isErr) ? createdPartialConfig.error 
                                                                : new Error("Internal error"));
    }
    return res.status(200).json(createdPartialConfig.value)
}

async function remove(req: Request, res: Response): Promise<Response<void>> {
    const validatedParams = parcialConfigSchema.userIdRequestParams.safeParse(req.params)
    if (!validatedParams.success || !authorize(validatedParams.data.userId, req.cookies.sessionId)) {
        return res.status(400).json(new Error("Bad Request"))
    }
    const result = await ParcialConfigurationRepository.remove(validatedParams.data.userId)
    if (result.isErr) {
        return res.status(500).json(result.error)
    }
    return res.status(200).json(undefined)
}

export const ParcialConfigurationController = {
    get,
    update,
    create,
    remove
}
