import { UserType } from "@prisma/client"

export type User = {
  id: number
  username: string
  email: string
  password: string
  role: UserType
}

export type UserCreate = {
    username: string
    email: string
    password: string
}

export type UserEdit = {
    username?: string
    email?: string
    password?: string
}

// DTOS

export type UserDTO = {
    id: string
    username: string
    email: string
    role: UserType
}
