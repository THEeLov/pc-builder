import { ParcialPCConfiguration } from "@prisma/client"
import { SessionsRepository } from "../../../sessions/repository/sessions.repository"
import { Request, Response } from "express"
import { sessionNotExpired } from "apps/backend/src/utils"
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
}

async function update(req: Request, res: Response) {}
