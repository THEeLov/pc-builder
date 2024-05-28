import z from "zod"
const IdRequestParams = z.object({
    id: z.number(),
})

const cookieSchema = z.object({
    sessionId: z.string().uuid(),
})

export const baseValidation = {
    IdRequestParams,
    cookieSchema,
}
