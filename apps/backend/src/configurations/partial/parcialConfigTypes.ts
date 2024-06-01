import { ConfigurationType, GPU, Motherboard, PCCase, PowerSupply, Prisma, Processor, RAM, Storage } from "@prisma/client"
import includeQuery from "../configurationQuery"

export type PartialConfigCreate = {
    configurationType: ConfigurationType
}

export type ParcialConfigWithComponent = Prisma.ParcialPCConfigurationGetPayload<{include: typeof includeQuery}>

export type FullPartialConfig = {
    motherboard?: Motherboard
    processor?: Processor
    rams: RAM[]
    gpu?: GPU
    storages: Storage[]
    powerSupply?: PowerSupply
    pcCase?: PCCase
}
