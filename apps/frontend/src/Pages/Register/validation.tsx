import { z } from "zod"

export const schema = z.object({
    username: z.string().min(4),
    email: z.string().email(),
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
})
