import { Result } from "@badrap/result"

export type DbResult<T> = Promise<Result<T>>
export class NotFoundError extends Error {}
export class ConflictError extends Error {}
export class InternalError extends Error {}
