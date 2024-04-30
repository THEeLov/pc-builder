import { ConfigurationType } from "@prisma/client"
import z from "zod"
import { configType } from "../../../configurations/baseValidation"

export const component = z.object({
    id: z.number(),
    name: z.string(),
    configurationType: z.array(configType),
    price: z.number(),
    manufacturer: z.string(),
    imageUrl: z.string(),
})
