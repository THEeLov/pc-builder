import InternalError from "./errors/InternalError"
import ConflictError from "./errors/ConflictError"
import NotFoundError from "./errors/NotFoundError"
import { Result } from "@badrap/result"
import { Session } from "@prisma/client"
import { SessionsRepository } from "./sessions/repository/sessions.repository"

const PRISMA_CONFLICT_ERROR = "P2002"
const PRISMA_NOT_FOUND_ERROR = "P2001"

const handleError = (error: any, message: string) => {
    if (error.code === PRISMA_CONFLICT_ERROR) {
        return Result.err(new ConflictError(message))
    }
    if (error.code === PRISMA_NOT_FOUND_ERROR) {
        return Result.err(new NotFoundError(message))
    }
    return Result.err(new InternalError())
}

export function sessionNotExpired(session: Session): boolean {
    return session.expiresAt > new Date()
}

export async function authorize(userId: number, sessionId?: string): Promise<boolean> {
    if (!sessionId) {
        return false
    }
    const session = await SessionsRepository.get(sessionId)
    if (session.isErr) {
        return false
    }
    if (session.isOk) {
        return session.value.expiresAt > new Date() && session.value.userId === userId
    }
    return false
}

export default handleError
