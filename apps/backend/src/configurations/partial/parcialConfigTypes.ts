import { ConfigurationType, RAM, Storage } from "@prisma/client"

export type PartialConfigCreate = {
    userId: number
    configurationType: ConfigurationType
}

export type ParcialConfigEdit = {
    configurationType?: ConfigurationType
    motherboardId?: number
    peocessorId?: number
    gpuId?: number
    powerSupplyId?: number
    PCCaseId?: number
    rams?: RAM[]
    storages?: Storage[]
}
