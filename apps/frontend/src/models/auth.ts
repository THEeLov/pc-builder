export type User = {
    id: string | null
    username: string | null
    email: string | null
    role: string | null
}

export type RegisterUser = {
    username: string
    email: string
    password: string
}

export type LoginUser = {
    email: string
    password: string
}
