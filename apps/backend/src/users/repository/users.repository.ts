import { prisma } from "../../../client"
import { User, UserType } from "@prisma/client"
import { DbResult } from "../../../types"
import { UserCreate, UserEdit } from "../userTypes"
import { internalError, notFoundError, conflictError } from "../../utils"
import bcrypt from "bcryptjs"
import { Result } from "@badrap/result"

const saltRounds = 10

async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, saltRounds)
}

async function create(data: UserCreate): DbResult<User> {
    try {
        const newUser = await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: await hashPassword(data.password),
            },
        })
        return Result.ok(newUser)
    } catch (error) {
        if (error.code === "P2002") {
            return conflictError("User already exists");
        } else {
            return internalError();
        }
    }
}

async function update(id: number, data: UserEdit): DbResult<User> {
    try {
        const user = await prisma.user.update({
            where: {
                id: id,
            },
            data: data,
        })
        if (!user) {
            return notFoundError("User not found");
        }
        return Result.ok(user)
    } catch (error) {
        return internalError();
    }
}

async function remove(id: number): DbResult<void> {
    try {
        await prisma.user.delete({
            where: {
                id: id,
            },
        })
        return Result.ok(undefined)
    } catch (error) {
        return internalError();
    }
}

async function get(identifier: number | string): DbResult<User> {
    try {
        let user
        if (typeof identifier === "number") {
            user = await prisma.user.findUnique({
                where: {
                    id: identifier,
                },
            })
        } else {
            user = await prisma.user.findUnique({
                where: {
                    email: identifier,
                },
            })
        }

        if (!user) {
            return notFoundError("User not found")
        }

        return Result.ok(user)
    } catch (error) {
        return internalError();
    }
}

export const UsersRepository = {
    create,
    update,
    remove,
    get,
}
