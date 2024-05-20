import { ConfigurationType, GPU, Motherboard, PCCase, PowerSupply, Processor, RAM, Storage } from "@prisma/client"

export type PartialConfigCreate = {
    configurationType: ConfigurationType
}

export type FullPartialConfig = {
    motherboard?: Motherboard
    processor?: Processor
    rams: RAM[]
    gpu?: GPU
    storages: Storage[]
    powerSupply?: PowerSupply
    pcCase?: PCCase
}
