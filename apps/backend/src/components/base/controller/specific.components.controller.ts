import { baseValidation } from "apps/backend/src/base/validation/validation"
import Unauthorized from "apps/backend/src/errors/Unauthorized"
import { Request, Response } from "express"
import ComponentQuery from "../../universal_types/query.type"
import { DbResult } from "apps/backend/types"
import { SessionsRepository } from "apps/backend/src/sessions/repository/sessions.repository"
import BadRequest from "apps/backend/src/errors/BadRequest"
import { convertConfig, convertConfigurationToQueryType } from "../../universal_types/query.convert"
import { FullPartialConfig } from "apps/backend/src/configurations/partial/parcialConfigTypes"
import InternalError from "apps/backend/src/errors/InternalError"

type Repository<T> = {
    getMany: (query: ComponentQuery) => DbResult<T[]>
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

const baseComponentController = {
    getMany,
}

export default baseComponentController
