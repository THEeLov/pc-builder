import { ConfigurationType } from "@prisma/client"

//ZOD musi zvalidovat ze ci rams a storages maju aspon 1 položku.
export type ConfigurationCreate = {
    configurationType: ConfigurationType
    motherboardId: number
    processorId: number
    gpuId: number
    powerSupplyId: number
    PCCaseId: number
    rams: { id: number }[]
    storages: { id: number }[]
}