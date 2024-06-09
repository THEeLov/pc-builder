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
    ramId: z.string().ulid().optional(),
    storageId: z.string().ulid().optional(),
})

export const parcialConfigSchema = {
    updateObject,
    createObject,
}
