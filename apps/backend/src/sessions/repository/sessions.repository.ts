import { DbResult } from "../../../types"
import { prisma } from "../../../client"
import { Session } from "@prisma/client"
import { Result } from "@badrap/result"
import handleError from "../../utils"

const ONE_DAY_MILLIS = 1000 * 60 * 60 * 24

async function create(userId: number): DbResult<Session> {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        })
        const tomorrow = new Date(new Date().getTime() + ONE_DAY_MILLIS)
        const newSession = await prisma.session.create({
            data: {
                expiresAt: tomorrow,
                userId,
                userType: user.userType,
            },
        })
        return Result.ok(newSession)
    } catch (e) {
        return handleError(e, "in session create");
    }
}

async function get(sessionId: string): DbResult<Session> {
    try {
        const session = await prisma.session.findUnique({
            where: {
                id: sessionId,
            },
        })
        return Result.ok(session)
    } catch (e) {
        return handleError(e, "in session get")
    }
}

export const SessionsRepository = {
    create,
    get,
}
