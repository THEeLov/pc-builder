import z from "zod"

export const configType = z.enum(["GAMING", "OFFICE", "WORK", "HIGH_END", "DEFAULT"])
