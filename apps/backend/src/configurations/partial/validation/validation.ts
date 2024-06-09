import z from "zod"
import { configType } from "../../baseValidation"

const createObject = z.object({
    configurationType: configType,
})

const updateObject = z.object({
    delete: z.boolean(),
    configurationType: configType.optional(),
    motherboardId: z.string().uuid().optional().nullable(),
    processorId: z.string().uuid().optional().nullable(),
    gpuId: z.string().uuid().optional().nullable(),
    powerSupplyId: z.string().uuid().optional().nullable(),
    PCCaseId: z.string().uuid().optional().nullable(),
    ramId: z.string().ulid().optional(),
    storageId: z.string().ulid().optional(),
})

export type inputPConfigData = z.infer<typeof updateObject>

export const parcialConfigSchema = {
    updateObject,
    createObject,
}
