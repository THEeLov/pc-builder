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
    id: number
    username: string
    email: string
}
