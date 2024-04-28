import { DbResult, InternalError, NotFoundError } from "apps/backend/types"
import { prisma } from "../../../client"
import { Session, User, UserType } from "@prisma/client"
import { Result } from "@badrap/result"
import { internalError, notFoundError } from "../../utils"

const ONE_DAY_MILLIS = 1000 * 60 * 60 * 24

async function create(userId: number): DbResult<Session> {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: userId,
            },
        })
        if (!user) {
            return Result.err(new NotFoundError("User not found"))
        }
        const tomorrow = new Date(new Date().getTime() + ONE_DAY_MILLIS)
        const newSession = await prisma.session.create({
            data: {
                expiresAt: tomorrow,
                userId,
                userType: user.userType,
            },
        })
        return Result.ok(newSession)
    } catch {
        return internalError()
    }
}

async function get(sessionId: string): DbResult<Session> {
    try {
        const session = await prisma.session.findUnique({
            where: {
                id: sessionId,
            },
        })
        if (!session) {
            return notFoundError("Session not found")
        }
        return Result.ok(session)
    } catch {
        return internalError()
    }
}

export const SessionsRepository = {
    create,
    get,
}
