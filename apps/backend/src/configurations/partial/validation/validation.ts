import z from "zod"
import { configType } from "../../baseValidation"

const userIdRequestParams = z.object({
    userId: z.number(),
})

const createObject = z.object( {
    configurationType: configType
} )

const updateObject = z.object( {
    configurationType: configType.optional(),
    motherboardId: z.number().optional(),
    peocessorId: z.number().optional(),
    gpuId: z.number().optional(),
    powerSupplyId: z.number().optional(),
    PCCaseId: z.number().optional(),
    rams: z.optional((z.array(z.object( { id: z.number() } )))),
    storages: z.optional((z.array(z.object({ id: z.number() }))))
} )

export const parcialConfigSchema = {
    userIdRequestParams,
    updateObject,
    createObject,
}
