import z from "zod"
import { configType } from "../../../configurations/baseValidation"
import { ComponentType } from "@prisma/client"

const componentType = z.enum(Object.values(ComponentType) as [ComponentType, ...ComponentType[]])

export const component = z.object({
    id: z.string().uuid(),
    name: z.string(),
    configurationType: z.array(configType),
    componentType: componentType,
    price: z.number(),
    manufacturer: z.string(),
    imageUrl: z.string(),
})

export const componentCreate = z.object({
    name: z.string(),
    configurationType: z.array(configType),
    componentType: componentType,
    price: z.number(),
    manufacturer: z.string(),
    imageUrl: z.string(),
})
