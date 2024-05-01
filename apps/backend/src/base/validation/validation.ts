import z from "zod"
const userIdRequestParams = z.object({
    userId: z.number(),
})

export const baseValidation = {
    userIdRequestParams,
}
