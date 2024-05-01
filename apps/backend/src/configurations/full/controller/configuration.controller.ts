import { PCConfiguration } from "@prisma/client";
import { Response, Request } from "express";
import { baseValidation } from "../../../base/validation/validation";
import configurationRepository from "../repository/configuration.repository";
import { parcialConfigSchema } from "../../partial/validation/validation";
import { authorize, authorizeWithConfigId } from "../../../utils";
import configValidation from "../validation/validation";


async function getMany(req: Request, res: Response): Promise<Response<PCConfiguration[]>> {
    const validatedParams = baseValidation.userIdRequestParams.safeParse(req.params)
    if (!validatedParams.success
        || !await authorize(validatedParams.data.userId, req.cookies.sessionId)) {
            return res.status(400).json(new Error("Bad request"))
    }
    const result = await configurationRepository.getMany(validatedParams.data.userId)
    if (!result.isOk) {
        return res.status(500).json(result.error)
    }
    return res.status(200).json(result.value)
}

async function update(req: Request, res: Response): Promise<Response<PCConfiguration>> {
    const validatedParams = configValidation.configIdSchema.safeParse(req.params)
    const validatedBody = parcialConfigSchema.updateObject.safeParse(req.body)

    if (!validatedParams.success 
        || !await authorizeWithConfigId(validatedParams.data.configId, req.cookies.sessionId)
        || !validatedBody.success) {
        return res.status(400).json(new Error("Bad request"))
    }
    const config = await configurationRepository.update(validatedParams.data.configId, validatedBody.data)
    if (!config.isOk) {
        return res.status(500).json(config.error)
    }
    return res.status(200).json(config.value)
}

async function create(req: Request, res: Response): Promise<Response<PCConfiguration>> {
    const validatedParams = baseValidation.userIdRequestParams.safeParse(req.params)
    const validatedBody = configValidation.createObject.safeParse(req.body)
    if (!validatedParams.success ||
        !await authorize(validatedParams.data.userId, req.cookies.sessionId) ||
        !validatedBody.success
    ) {
        return res.status(400).json(new Error("Bad request"))
    }
    const newConfig = await configurationRepository.create(validatedParams.data.userId, validatedBody.data)
    if (!newConfig.isOk) {
        return res.status(500).json(newConfig.error)
    }
    return res.status(200).json(newConfig.value)
}

async function remove(req: Request, res: Response): Promise<Response<void>> {
    const validatedParams = configValidation.configIdSchema.safeParse(req.params)
    if (!validatedParams.success ||
        !await authorizeWithConfigId(validatedParams.data.configId, req.cookies.sessionId)
    ) {
        return res.status(400).json(new Error("Bad request"))
    }
    const result = await configurationRepository.remove(validatedParams.data.configId)
    if (!result.isOk) {
        return res.status(500).json(result.error)
    }
    return res.status(200).json(result.value)
}