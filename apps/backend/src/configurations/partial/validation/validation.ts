import z from "zod"
import { configType } from "../../baseValidation"

const createObject = z.object({
    configurationType: configType,
})

const updateObject = z.object({
    configurationType: configType.optional(),
    motherboardId: z.string().uuid().optional(),
    processorId: z.string().uuid().optional(),
    gpuId: z.string().uuid().optional(),
    powerSupplyId: z.string().uuid().optional(),
    PCCaseId: z.string().uuid().optional(),
    rams: z.optional(z.array(z.object({ id: z.string().uuid() }))),
    storages: z.optional(z.array(z.object({ id: z.string().uuid() }))),
})

export const parcialConfigSchema = {
    updateObject,
    createObject,
}
