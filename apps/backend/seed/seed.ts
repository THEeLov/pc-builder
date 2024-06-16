import { PrismaClient } from "@prisma/client"
import * as dotenv from "dotenv"
import GPURepo from "../../backend/src/components/gpu/repository/gpu.repository"
import gpuData from "./data/gpu"
import MotherboardRepo from "../src/components/motherboard/repository/motherboard.repository"
import motherboardData from "./data/motherboard"
import PCCaseRepo from "../src/components/pcCase/repository/pcCase.repository"
import pcCaseData from "./data/pcCase"
import PowerSupplyRepo from "../src/components/powerSupply/repository/powerSupply.repository"
import powerSupplyData from "./data/powerSupply"
import ProcessorRepo from "../src/components/processor/repository/processor.repository"
import processorData from "./data/processor"
import RAMRepo from "../src/components/rams/repository/rams.repository"
import ramData from "./data/ram"
import StorageRepo from "../src/components/storage/repository/storage.repository"
import storageData from "./data/storage"
import { seedUsers } from "./data/user"

dotenv.config()

const client = new PrismaClient()

const deleteAll = async () => {
    await client.$transaction([client.component.deleteMany(), client.user.deleteMany()])
    console.log("All data cleared.")
}

const seedGPUs = async () => {
    for (const gpu of gpuData) {
        const result = await GPURepo.create(gpu)
        if (result.isErr) {
            console.error("Failed to create GPU:", result.error)
        }
    }
}

const seedMotherboards = async () => {
    for (const motherboard of motherboardData) {
        const result = await MotherboardRepo.create(motherboard)
        if (result.isErr) {
            console.error("Failed to create Motherboard:", result.error)
        }
    }
}

const seedPcCases = async () => {
    for (const pcCase of pcCaseData) {
        const result = await PCCaseRepo.create(pcCase)
        if (result.isErr) {
            console.error("Failed to create pc case:", result.error)
        }
    }
}

const seedPowerSupplies = async () => {
    for (const powerSupply of powerSupplyData) {
        const result = await PowerSupplyRepo.create(powerSupply)
        if (result.isErr) {
            console.error("Failed to create power s case:", result.error)
        }
    }
}

const seedProcessors = async () => {
    for (const processor of processorData) {
        const result = await ProcessorRepo.create(processor)
        if (result.isErr) {
            console.error("Failed to create pc case:", result.error)
        }
    }
}

const seedRams = async () => {
    for (const ram of ramData) {
        const result = await RAMRepo.create(ram)
        if (result.isErr) {
            console.error("Failed to create pc case:", result.error)
        }
    }
}

const seedStorages = async () => {
    for (const storage of storageData) {
        const result = await StorageRepo.create(storage)
        if (result.isErr) {
            console.error("Failed to create pc case:", result.error)
        }
    }
}

const main = async (): Promise<any> => {
    await client.$connect()
    await deleteAll()
    await seedGPUs()
    await seedMotherboards()
    await seedPcCases()
    await seedPowerSupplies()
    await seedProcessors()
    await seedRams()
    await seedStorages()
    await seedUsers()
}

main()
    .then(() => {
        console.log("Seeding finished")
        process.exit(0)
    })
    .catch((e: any) => {
        console.log(e)
        process.exit(1)
    })
    .finally(() => {
        client.$disconnect().then(() => "Disconnected")
    })
