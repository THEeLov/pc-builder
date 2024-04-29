import { prisma } from "../../../client"
import { User } from "@prisma/client"
import { DbResult } from "../../../types"
import { UserCreate, UserEdit } from "../userTypes"
import handleError from "../../utils"
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
        return handleError(error, "in user create")
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
        return Result.ok(user)
    } catch (error) {
        return handleError(error, "in update user")
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
        return handleError(error, "in user remove")
    }
}

async function get(identifier: number | string): DbResult<User> {
    try {
        let user
        if (typeof identifier === "number") {
            user = await prisma.user.findUniqueOrThrow({
                where: {
                    id: identifier,
                },
            })
        } else {
            user = await prisma.user.findUniqueOrThrow({
                where: {
                    email: identifier,
                },
            })
        }
        return Result.ok(user)
    } catch (error) {
        return handleError(error, "in user get")
    }
}

export const UsersRepository = {
    create,
    update,
    remove,
    get,
}
