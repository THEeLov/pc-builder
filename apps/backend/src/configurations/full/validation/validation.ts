import z from "zod"
import { configType } from "../../baseValidation"

const configIdSchema = z.object({
    configId: z.number(),
})

const createObject = z.object({
    configurationType: configType,
    motherboardId: z.number(),
    processorId: z.number(),
    gpuId: z.number(),
    powerSupplyId: z.number(),
    PCCaseId: z.number(),
    rams: z.array(z.object({ id: z.number() })).min(1),
    storages: z.array(z.object({ id: z.number() })).min(1),
})

const configValidation = {
    configIdSchema,
    createObject,
}

export default configValidation
