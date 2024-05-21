import z from "zod"
import { componentCreate } from "../../base/validation/validation"
import { ComponentType, ComputerType, ConfigurationType, Prisma } from "@prisma/client"

const computerType = z.enum(["DESKTOP", "LAPTOP"])

export const RamCreate = z.object({
    component: componentCreate,
    memoryType: z.string(),
    capacity: z.number(),
    computerType: computerType,
})

export type CreateRAM = {
    component: {
        name: string
        configurationType: ConfigurationType[]
        componentType: ComponentType
        price: number
        manufacturer: string
        imageUrl: string
    }
    memoryType: string
    capacity: number
    computerType: ComputerType
}
export type UpdateRAM = {
    memoryType?: string
    capacity?: number
    computerType?: ComputerType
}

export type RAMWithComponent = Prisma.RAMGetPayload<{
    include: { component: true }
}>
