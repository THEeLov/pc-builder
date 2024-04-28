import { DbResult, InternalError, NotFoundError } from "apps/backend/types"
import { prisma } from "../../../client"
import { Session, User, UserType } from "@prisma/client"
import { Result } from "@badrap/result"

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
        const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
        const newSession = await prisma.session.create({
            data: {
                expiresAt: tomorrow,
                userId,
                userType: user.userType,
            },
        })
        return Result.ok(newSession)
    } catch {
        return Result.err(new InternalError("internal error"))
    } finally {
        await prisma.$disconnect()
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
            return Result.err(new NotFoundError("Session not found"))
        }
        return Result.ok(session)
    } catch {
        return Result.err(new InternalError("internal error"))
    } finally {
        await prisma.$disconnect()
    }
}

export const SessionsRepository = {
    create,
    get,
}
