import z from 'zod'

const getRequestParams = z.object( {
    userId: z.number()
} )

export const parcialConfigSchema = {
    getRequestParams
}