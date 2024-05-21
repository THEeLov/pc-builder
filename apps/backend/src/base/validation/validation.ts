import z from "zod"
const userIdRequestParams = z.object({
    userId: z.number(),
})

const cookieSchema = z.object({
    sessionId: z.string().uuid(),
})

export const baseValidation = {
    userIdRequestParams,
    cookieSchema,
}
