import z from "zod"
import { componentCreate } from "../../base/validation/validation"

const PCCaseCreate = z.object({
    formFactor: z.string(),
    component: componentCreate,
})

const PCCaseEdit = z.object({
    formFactor: z.string().optional(),
})

const PCCaseSchema = {
    PCCaseCreate,
    PCCaseEdit,
}

export default PCCaseSchema
