import { ConfigurationType } from "@prisma/client"

const includeQuery = {
    motherboard: {
        include: {
            component: true
        }
    },
    processor: {
        include: {
            component: true
        }
    },
    rams: {
        include: {
            component: true
        }
    },
    gpu: {
        include: {
            component: true
        }
    },
    storages: {
        include: {
            component: true
        }
    },
    powerSupply: {
        include: {
            component:true
        }
    },
    pcCase: {
        include: {
            component:true
        }
    }
}

export type ParcialConfigEdit = {
    configurationType?: ConfigurationType
    motherboardId?: number
    processorId?: number
    gpuId?: number
    powerSupplyId?: number
    PCCaseId?: number
    rams?: { id: number }[]
    storages?: { id: number }[]
}

export default includeQuery