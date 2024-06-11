import { z } from "zod"

const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

const imageUrlSchema = z
    .any()
    .refine((files) => {
        return files?.[0]?.size <= MAX_FILE_SIZE
    }, `Max image size is 5MB.`)
    .refine(
        (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
        "Only .jpg, .jpeg, .png and .webp formats are supported.",
    )

const ComponentSchema = z.object({
    name: z.string().min(1),
    price: z.coerce.number().min(1),
    manufacturer: z.string().min(1),
})

export const BaseSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema
})

export const MotherboardSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    socket: z.string().min(1),
    formFactor: z.string().min(1),
    ramSlots: z.coerce.number().min(1),
    ramType: z.string().min(1),
    gpuInterface: z.string().min(1),
    storageBusType: z.string().min(1),
})

export const ProcessorSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    architecture: z.string().min(1),
    cores: z.coerce.number().min(1),
    threads: z.coerce.number().min(1),
    bits: z.coerce.number().min(1),
    socket: z.string().min(1),
})

export const RamSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    computerType: z.string().min(1),
    memoryType: z.string().min(1),
    capacity: z.coerce.number().min(1),
})

export const PowerSupplySchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    powerOutput: z.coerce.number().min(1),
    efficiency: z.string().min(1),
    formFactor: z.string().min(1),
})

export const PcCaseSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    formFactor: z.string().min(1),
})

export const StorageSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    storageType: z.string().min(1),
    capacity: z.coerce.number().min(1),
    busType: z.string().min(1),
})

export const GpuSchema = z.object({
    component: ComponentSchema,
    image: imageUrlSchema,
    memory: z.coerce.number().min(1),
    powerConnector: z.string().min(1),
    interface: z.string().min(1),
    power: z.coerce.number().min(1),
})
