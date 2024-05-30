import { ConfigurationType } from "@prisma/client"

//ZOD musi zvalidovat ze ci rams a storages maju aspon 1 položku.
export type ConfigurationCreate = {
    configurationType: ConfigurationType
    motherboardId: string
    processorId: string
    gpuId: string
    powerSupplyId: string
    PCCaseId: string
    rams: { id: string }[]
    storages: { id: string }[]
}
