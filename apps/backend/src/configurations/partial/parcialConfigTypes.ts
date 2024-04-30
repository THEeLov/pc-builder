import { ConfigurationType, RAM, Storage } from "@prisma/client"

export type PartialConfigCreate = {
    configurationType: ConfigurationType
}

export type ParcialConfigEdit = {
    configurationType?: ConfigurationType
    motherboardId?: number
    peocessorId?: number
    gpuId?: number
    powerSupplyId?: number
    PCCaseId?: number
    rams?: {id: number}[]
    storages?: {id: number}[]
}
