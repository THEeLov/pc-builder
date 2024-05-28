import Unauthorized from "apps/backend/src/errors/Unauthorized"
import { Request, Response } from "express"
import { baseValidation } from "../../../base/validation/validation"
import ComponentQuery from "../../universal_types/query.type"
import { DbResult } from "apps/backend/types"
import { SessionsRepository } from "apps/backend/src/sessions/repository/sessions.repository"
import BadRequest from "apps/backend/src/errors/BadRequest"
import { convertConfig, convertConfigurationToQueryType } from "../../universal_types/query.convert"
import { FullPartialConfig } from "apps/backend/src/configurations/partial/parcialConfigTypes"
import InternalError from "apps/backend/src/errors/InternalError"
import z from "zod"
import { authorizeAdmin } from "apps/backend/src/utils"

type Repository<T> = {
    getMany: (query: ComponentQuery) => DbResult<T[]>
    getSingle: (id: number) => DbResult<T>
    create: (createObj: any) => DbResult<T>
    remove: (id: number) => DbResult<void>
    update: (id: number, updateObj: any) => DbResult<T>
}

async function getMany<T>(repo: Repository<T>, req: Request, res: Response): Promise<Response<T[]>> {
    const validSessionCookie = baseValidation.cookieSchema.safeParse(req.cookies)
    if (!validSessionCookie.success) {
        return res.status(401).json(Unauthorized)
    }
    const sessionResult = await SessionsRepository.getFull(validSessionCookie.data.sessionId)
    if (!sessionResult.isOk) {
        return res.status(401).json(Unauthorized)
    }
    if (!sessionResult.value.user.partialUserConfiguration) {
        return res.status(400).json(BadRequest)
    }
    const configuration: FullPartialConfig = convertConfig(sessionResult.value.user.partialUserConfiguration)
    const query = convertConfigurationToQueryType(configuration)
    const ramsResult = await repo.getMany(query)
    if (!ramsResult.isOk) {
        return res.status(500).json(InternalError)
    }
    return res.status(200).json(ramsResult.value)
}

async function getSingle<T>(repo: Repository<T>, req: Request, res: Response): Promise<Response<T>> {
    const validatedParams = baseValidation.IdRequestParams.safeParse(req.params)
    if (!validatedParams.success) {
        return res.status(400).json(BadRequest)
    }
    const object = await repo.getSingle(validatedParams.data.id)
    if (!object.isOk) {
        return res.status(500).json(InternalError)
    }
    return res.status(200).json(object.value)
}

async function create<T>(
    Create: z.ZodObject<any>,
    repo: Repository<T>,
    req: Request,
    res: Response,
): Promise<Response<T>> {
    const validatedBody = Create.safeParse(req.body)
    if (!validatedBody.success) {
        return res.status(400).json(BadRequest)
    }
    if (!(await authorizeAdmin(req.cookies.sessionId))) {
        return res.status(401).json(Unauthorized)
    }
    const component = await repo.create(validatedBody.data)
    if (!component.isOk) {
        return res.status(500).json(InternalError)
    }
    return res.status(200).json(component.value)
}

async function remove<T>(repo: Repository<T>, req: Request, res: Response): Promise<Response<void>> {
    const validatedParams = baseValidation.IdRequestParams.safeParse(req.params)
    if (!validatedParams.success) {
        return res.status(400).json(BadRequest)
    }
    if (!(await authorizeAdmin(req.cookies.sessionId))) {
        return res.status(401).json(Unauthorized)
    }
    const deletion = await repo.remove(validatedParams.data.id)
    if (!deletion.isOk) {
        return res.status(500).json(InternalError)
    }
    return res.status(200).json()
}

async function update<T>(
    Update: z.ZodObject<any>,
    repo: Repository<T>,
    req: Request,
    res: Response,
): Promise<Response<T>> {
    const validatedParams = baseValidation.IdRequestParams.safeParse(req.params)
    const validatedBody = Update.safeParse(req.body)
    if (!validatedBody.success || !validatedParams.success) {
        return res.status(400).json(BadRequest)
    }
    if (!(await authorizeAdmin(req.cookies.sessionId))) {
        return res.status(401).json(Unauthorized)
    }
    const updatedComponent = await repo.update(validatedParams.data.id, validatedBody.data)
    if (!updatedComponent.isOk) {
        return res.status(500).json(InternalError)
    }
    return res.status(200).json(updatedComponent.value)
}

const baseComponentController = {
    getMany,
    getSingle,
    create,
    remove,
    update,
}

export default baseComponentController
