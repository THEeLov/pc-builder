import { UserType } from "@prisma/client"
import { Result } from '@badrap/result';

export type DbResult<T> = Promise<Result<T>>;
export class NotFoundError extends Error {}
export class ConflictError extends Error {}
export class InternalError extends Error {}


export type UserCreate = {
    username: string,
    email: string,
    password: string,
}

export type UserEdit = {
    username?: string,
    email?: string,
    password?: string,
}


// DTOS

export type UserDTO = {
    id: number,
    username: string,
    email: string
}
