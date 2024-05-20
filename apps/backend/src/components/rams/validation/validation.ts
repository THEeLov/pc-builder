import z from "zod"
import { componentCreate } from "../../base/validation/validation"

const computerType = z.enum(["DESKTOP", "LAPTOP"])

export const RamCreate = z.object({
    component: componentCreate,
    memoryType: z.string(),
    capacity: z.number(),
    computerType: computerType,
})
