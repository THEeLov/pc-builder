import { z } from "zod"

// export const ComponentSchema = z.object({
//   name: z.string().min(1),
//   price: z.coerce.number().min(1),
//   manufacturer: z.string().min(1),
//   imageUrl: z.string().min(1),
// })
const MAX_FILE_SIZE = 5000000
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"]

const ComponentSchema = z.object({
    name: z.string().min(1),
    price: z.coerce.number().min(1),
    manufacturer: z.string(),
    imageUrl: z
        .any()
        .refine((files) => {
            return files?.[0]?.size <= MAX_FILE_SIZE
        }, `Max image size is 5MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported.",
        ),
})

export const MotherboardSchema = z.object({
    component: ComponentSchema,
    socket: z.string().min(1),
    formFactor: z.string().min(1),
    ramSlots: z.coerce.number().min(1),
    ramType: z.string().min(1),
    gpuInterface: z.string().min(1),
    storageBusType: z.string().min(1),
})

export const ProcessorSchema = {}
