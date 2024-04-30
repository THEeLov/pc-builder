import { UsersRepository } from "../repository/users.repository"
import { SessionsRepository } from "../../sessions/repository/sessions.repository"
import { Request, Response } from "express"
import { UserSchema } from "../validation/validation"
import { authorize } from "../../utils"
import bcrypt from "bcryptjs"
import { UserDTO } from "../userTypes"

async function register(req: Request, res: Response): Promise<Response<UserDTO | Error>> {
    const register = UserSchema.Register.safeParse(req.body)
    if (!register.success) {
        return res.status(400).json(new Error(register.error.message))
    }
    const result = await UsersRepository.create({
        username: register.data.username,
        email: register.data.email,
        password: register.data.password,
    })
    if (result.isErr) {
        return res.status(400).json(result.error)
    }
    if (result.isOk) {
        const session = await SessionsRepository.create(result.value.id)
        if (!session.isOk) {
            return res.status(400).json(session.isErr ? session.error : new Error("internal error"))
        }
        const formattedExpirationDate = session.value.expiresAt.toUTCString()
        res.set("Access-Control-Allow-Credentials", "true")
        res.set("Set-Cookie", `sessionId=${session.value.id}; SameSite=Strict; Expires=${formattedExpirationDate}`)
        return res.status(200).json({
            id: result.value.id,
            username: result.value.username,
            email: result.value.email,
        })
    }
}

async function login(req: Request, res: Response): Promise<Response<UserDTO | Error>> {
    const login = UserSchema.Login.safeParse(req.body)
    if (!login.success) {
        return res.status(400).json(new Error(login.error.message))
    }
    const user = await UsersRepository.get(login.data.email)
    if (user.isErr) {
        return res.status(400).json(user.error)
    }
    if (user.isOk) {
        const result = bcrypt.compare(login.data.password, user.value.password)
        if (result) {
            const session = await SessionsRepository.create(user.value.id)
            if (!session.isOk) {
                return res.status(400).json(session.isErr ? session.error : new Error("internal error"))
            }
            const formattedExpirationDate = session.value.expiresAt.toUTCString()
            res.set("Access-Control-Allow-Credentials", "true")
            res.set("Set-Cookie", `sessionId=${session.value.id}; SameSite=Strict; Expires=${formattedExpirationDate}`)
            return res.status(200).json({
                id: user.value.id,
                username: user.value.username,
                email: user.value.email,
            })
        } else {
            return res.status(400).json(new Error("Invalid credentials"))
        }
    }
}

async function getSingle(req: Request, res: Response): Promise<Response<UserDTO | Error>> {
    const userId = UserSchema.getParams.safeParse(req.params)
    if (!userId.success) {
        return res.status(400).json(new Error(userId.error.message))
    }
    if (!authorize(userId.data.id, req.cookies.sessionId)) {
        return res.status(401).json(new Error("Unauthorized"))
    }
    const user = await UsersRepository.get(userId.data.id)
    if (user.isErr) {
        return res.status(400).json(user.error)
    }
    if (user.isOk) {
        return res.status(200).json({
            id: user.value.id,
            username: user.value.username,
            email: user.value.email,
        })
    }
}

async function deleteSingle(req: Request, res: Response): Promise<Response<string | Error>> {
    const userId = UserSchema.getParams.safeParse(req.params)
    if (!userId.success) {
        return res.status(400).json(new Error(userId.error.message))
    }
    if (!authorize(userId.data.id, req.cookies.sessionId)) {
        return res.status(401).json(new Error("Unauthorized"))
    }
    const user = await UsersRepository.remove(userId.data.id)
    if (user.isErr) {
        return res.status(400).json(user.error)
    }
    if (user.isOk) {
        return res.status(200).json("Success!")
    }
}

async function updateSingle(req: Request, res: Response): Promise<Response<UserDTO | Error>> {
    const updateParams = UserSchema.Edit.safeParse(req.body)
    if (!updateParams.success) {
        return res.status(400).json(new Error(updateParams.error.message))
    }
    const userId = UserSchema.getParams.safeParse(req.params)
    if (!userId.success) {
        return res.status(400).json(new Error(userId.error.message))
    }
    if (!authorize(userId.data.id, req.cookies.sessionId)) {
        return res.status(401).json(new Error("Unauthorized"))
    }
    const user = await UsersRepository.update(userId.data.id, updateParams.data)
    if (user.isErr) {
        return res.status(400).json(user.error)
    }
    if (user.isOk) {
        return res.status(200).json(user)
    }
}

export const UsersController = {
    register,
    login,
    getSingle,
    deleteSingle,
    updateSingle,
}
