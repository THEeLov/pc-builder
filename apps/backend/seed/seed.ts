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

async function seedHighEndConfig() {
    const ram_1 = await RAMRepo.create({
        component: {
            name: "Corsair Vengeance RGB Pro 32GB (2 x 16GB) DDR4 3600MHz",
            componentType: "RAM",
            price: 199.99,
            manufacturer: "Corsair",
            imageUrl: "https://media.cdn.kaufland.de/product-images/1024x1024/6cb63e01aa4095feb361cbc613d22bbd.jpg",
        },
        id: "6a9a1a47-8a6d-4f2e-b1da-1e1b9cdbbfc0",
        memoryType: "ddr4",
        capacity: 32,
        computerType: "DESKTOP",
    })
    const ram_2 = await RAMRepo.create({
        component: {
            name: "Corsair Vengeance RGB Pro 32GB (2 x 16GB) DDR4 3600MHz",
            componentType: "RAM",
            price: 199.99,
            manufacturer: "Corsair",
            imageUrl: "https://media.cdn.kaufland.de/product-images/1024x1024/6cb63e01aa4095feb361cbc613d22bbd.jpg",
        },
        id: "d4a6b6a2-9f87-4e2c-9c35-50e4ab127c67",
        memoryType: "ddr4",
        capacity: 32,
        computerType: "DESKTOP",
    })
    const processor = await ProcessorRepo.create({
        component: {
            name: "Intel Core i9-11900K",
            componentType: "PROCESSOR",
            price: 529.99,
            manufacturer: "Intel",
            imageUrl: "https://img-cdn.heureka.group/v1/2d5b69eb-c304-40df-84b7-a290a7eabc07.jpg?width=350&height=350",
        },
        id: "2b685d87-1b26-4958-9e55-4824a66b5f2e",
        socket: "lga1200",
        cores: 8,
        threads: 16,
        bits: 64,
        architecture: "Intel Core i9",
    })
    const motherboard = await MotherboardRepo.create({
        component: {
            name: "ASUS ROG Strix Z590-E",
            componentType: "MOTHERBOARD",
            price: 379.99,
            manufacturer: "ASUS",
            imageUrl: "https://www.eo.cz/pic.php?u=/katalog/20083205/photos/hero1.png",
        },
        id: "0b6a5a47-e1c6-4d2e-8b9c-3d7e4e6c5f5b",
        socket: "lga1200",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        storageBusType: "nvme",
        gpuInterface: "pcie",
    })
    const gpu = await GPURepo.create({
        component: {
            name: "NVIDIA GeForce RTX 3080 Ti",
            componentType: "GPU",
            price: 1199.99,
            manufacturer: "NVIDIA",
            imageUrl:
                "https://cdn.aukro.cz/images/sk1641752877810/prodam-gigabyte-geforce-rtx-3080-ti-gaming-oc-12g-115284985.jpeg",
        },
        id: "a1e6b2c5-8a4f-4b1e-8d3e-5e1a6a7c8f4b",
        memory: 12,
        powerConnector: "2 x 8-pin",
        interface: "pcie",
        power: 750,
    })
    const powerSupply = await PowerSupplyRepo.create({
        component: {
            name: "Corsair RM850x",
            componentType: "POWERSUPPLY",
            price: 139.99,
            manufacturer: "Corsair",
            imageUrl: "https://iczc.cz/5jon1g95i0jni8hf5o8lq4ids2-2_1/obrazek",
        },
        id: "f1e4c3d5-6b8a-4a1e-b9d6-4c7a5e8f6a9b",
        powerOutput: 850,
        efficiency: "80+ Gold",
        formFactor: "atx",
    })
    const pccase = await PCCaseRepo.create({
        component: {
            name: "NZXT H510 Elite",
            componentType: "PCCASE",
            price: 149.99,
            manufacturer: "NZXT",
            imageUrl: "https://pcpraha.cz/wp-content/uploads/2015/03/nzxt-h510-elite-cerna.png",
        },
        id: "e7a6b3c5-8d4e-4f1a-9c2e-5a6b7c8d4e5f",
        formFactor: "atx",
    })
    if (
        !pccase.isOk ||
        !gpu.isOk ||
        !motherboard.isOk ||
        !powerSupply.isOk ||
        !ram_1.isOk ||
        !ram_2.isOk ||
        !processor.isOk
    ) {
        return false
    }

    return true
}

async function seedOfficeConfig() {
    const ram_1 = await RAMRepo.create({
        component: {
            name: "Kingston ValueRAM 8GB DDR4 2400MHz",
            componentType: "RAM",
            price: 49.99,
            manufacturer: "Kingston",
            imageUrl: "https://iczc.cz/68h1nq02t0hsdbgshn8str0aa5_1/obrazek",
        },
        id: "a1b2c3d4-1234-5678-9101-abcdef123456",
        memoryType: "ddr4",
        capacity: 8,
        computerType: "DESKTOP",
    })
    const ram_2 = await RAMRepo.create({
        component: {
            name: "Kingston ValueRAM 8GB DDR4 2400MHz",
            componentType: "RAM",
            price: 49.99,
            manufacturer: "Kingston",
            imageUrl: "https://iczc.cz/68h1nq02t0hsdbgshn8str0aa5_1/obrazek",
        },
        id: "b2c3d4e5-2345-6789-1011-bcdef2345678",
        memoryType: "ddr4",
        capacity: 8,
        computerType: "DESKTOP",
    })
    const processor = await ProcessorRepo.create({
        component: {
            name: "Intel Core i5-10400",
            componentType: "PROCESSOR",
            price: 179.99,
            manufacturer: "Intel",
            imageUrl:
                "https://www.nc.cz/intel-core-i5-10400-2-9ghz-6core-12mb-lga1200-graphics-comet-lake_ie869827.jpg",
        },
        id: "c3d4e5f6-3456-7891-0112-cdef34567890",
        socket: "lga1200",
        cores: 6,
        threads: 12,
        bits: 64,
        architecture: "Intel Core i5",
    })
    const motherboard = await MotherboardRepo.create({
        component: {
            name: "ASUS PRIME B460M-A",
            componentType: "MOTHERBOARD",
            price: 99.99,
            manufacturer: "ASUS",
            imageUrl: "https://interlink-static1.tsbohemia.cz/asus-prime-b460m-a-image1-big_ies27860193.jpg",
        },
        id: "d4e5f6g7-4567-8910-1121-def456789012",
        socket: "lga1200",
        formFactor: "microATX",
        ramSlots: 4,
        ramType: "ddr4",
        storageBusType: "sata",
        gpuInterface: "pcie",
    })
    const gpu = await GPURepo.create({
        component: {
            name: "NVIDIA GeForce GT 1030",
            componentType: "GPU",
            price: 79.99,
            manufacturer: "NVIDIA",
            imageUrl: "https://www.tonerpartner.cz/userdata/products/1510/1557800_0a-fed72b2a1925d71.jpg",
        },
        id: "e5f6g7h8-5678-9101-1222-ef5678901234",
        memory: 2,
        powerConnector: "None",
        interface: "pcie",
        power: 300,
    })
    const storage = await StorageRepo.create({
        component: {
            name: "WD Blue 1TB HDD",
            componentType: "STORAGE",
            price: 49.99,
            manufacturer: "Western Digital",
            imageUrl:
                "https://www.westerndigital.com/content/dam/store/en-us/assets/products/internal-storage/wd-blue-desktop-sata-hdd/gallery/wd-blue-pc-desktop-hard-drive-1tb.png.thumb.319.319.png",
        },
        id: "f6g7h8i9-6789-1011-2333-f67890123456",
        capacity: 1000,
        storageType: "hdd",
        busType: "sata",
    })
    const powerSupply = await PowerSupplyRepo.create({
        component: {
            name: "Corsair CX450",
            componentType: "POWERSUPPLY",
            price: 59.99,
            manufacturer: "Corsair",
            imageUrl: "https://im9.cz/iR/importprodukt-orig/144/144c3f40d1535088caf88de030a73c90--mmf350x350.jpg",
        },
        id: "g7h8i9j0-7891-0112-3444-678901234567",
        powerOutput: 450,
        efficiency: "80+ Bronze",
        formFactor: "microATX",
    })
    const pccase = await PCCaseRepo.create({
        component: {
            name: "NZXT H510",
            componentType: "PCCASE",
            price: 69.99,
            manufacturer: "NZXT",
            imageUrl: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6486/6486440_sd.jpg",
        },
        id: "h8i9j0k1-8910-1121-4555-789012345678",
        formFactor: "microATX",
    })
    if (
        !pccase.isOk ||
        !storage.isOk ||
        !gpu.isOk ||
        !motherboard.isOk ||
        !powerSupply.isOk ||
        !ram_1.isOk ||
        !ram_2.isOk ||
        !processor.isOk
    ) {
        return false
    }

    return true
}

async function seedGamingConfig() {
    const ram_1 = await RAMRepo.create({
        component: {
            name: "Corsair Vengeance LPX 16GB 2x8GB DDR4 3200MHz C16",
            componentType: "RAM",
            price: 149.99,
            manufacturer: "Corsair",
            imageUrl: "https://img-cdn.heureka.group/v1/441925e7-b1de-4c1f-b62b-a11a71fddb79.jpg?width=350&height=350",
        },
        id: "b7d8392b-2470-45e1-9fe2-e52ed52137a8",
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    })
    const ram_2 = await RAMRepo.create({
        component: {
            name: "Corsair Vengeance LPX 16GB 2x8GB DDR4 3200MHz C16",
            componentType: "RAM",
            price: 149.99,
            manufacturer: "Corsair",
            imageUrl: "https://img-cdn.heureka.group/v1/441925e7-b1de-4c1f-b62b-a11a71fddb79.jpg?width=350&height=350",
        },
        id: "e82bbf74-442e-432c-8579-23cc4a183515",
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    })
    const processor = await ProcessorRepo.create({
        component: {
            name: "AMD Ryzen 7 3700X",
            componentType: "PROCESSOR",
            price: 299.99,
            manufacturer: "AMD",
            imageUrl: "https://img-cdn.heureka.group/v1/6955e21e-289b-4afd-9039-6aa61997ee02.jpg?width=350&height=350",
        },
        id: "9463465c-a8a7-4aa9-8424-94e22b617f96",
        socket: "am4",
        cores: 8,
        threads: 16,
        bits: 64,
        architecture: "AMD Ryzen 7",
    })
    const motherboard = await MotherboardRepo.create({
        component: {
            name: "MSI B450 TOMAHAWK MAX",
            componentType: "MOTHERBOARD",
            price: 149.99,
            manufacturer: "MSI",
            imageUrl:
                "https://asset.msi.com/resize/image/global/product/product_1_20200806161944_5f2bbd20c4441.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
        },
        id: "b8dbb237-f40d-416f-87f3-6a704063e9bd",
        socket: "am4",
        formFactor: "atx",
        ramSlots: 4,
        ramType: "ddr4",
        storageBusType: "nvme",
        gpuInterface: "pcie",
    })
    const gpu = await GPURepo.create({
        component: {
            name: "MSI GeForce RTX 3080",
            componentType: "GPU",
            price: 299.99,
            manufacturer: "MSI",
            imageUrl:
                "https://asset.msi.com/resize/image/global/product/product_1623834930083e54118002c13961e3ce71a2f22f6e.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
        },
        id: "078d2ad4-2c53-4a15-b76c-07e11c7d3491",
        memory: 16,
        powerConnector: "8-pin + 8-pin",
        interface: "pcie",
        power: 300,
    })
    const storage = await StorageRepo.create({
        component: {
            name: "Samsung 970 EVO Plus 500GB",
            componentType: "STORAGE",
            price: 59.99,
            manufacturer: "Samsung",
            imageUrl: "https://img-cdn.heureka.group/v1/4c1e783a-5e7b-45ce-a2da-c727b1daf753.jpg?width=350&height=350",
        },
        id: "f8d61bd0-98a7-419f-bbe9-0c7458a1b2cb",
        capacity: 500,
        storageType: "nvme",
        busType: "nvme",
    })
    const powerSupply = await PowerSupplyRepo.create({
        component: {
            name: "EVGA SuperNOVA 650",
            componentType: "POWERSUPPLY",
            price: 149.99,
            manufacturer: "EVGA",
            imageUrl: "https://image.alza.cz/products/EV206s1c/EV206s1c.jpg?width=500&height=500",
        },
        id: "86f01c83-5a92-4610-a39b-46cdf0a2ad56",
        powerOutput: 650,
        efficiency: "80+ Bronze",
        formFactor: "atx",
    })
    const pccase = await PCCaseRepo.create({
        component: {
            name: "Cooler Master MasterBox 120",
            componentType: "PCCASE",
            price: 149.99,
            manufacturer: "Cooler Master",
            imageUrl: "https://www.mall.cz/i/69959921/550/550",
        },
        id: "7e4aeb5d-df20-47e2-b5f2-89222e1d8885",
        formFactor: "atx",
    })
    if (
        !pccase.isOk ||
        !storage.isOk ||
        !gpu.isOk ||
        !motherboard.isOk ||
        !powerSupply.isOk ||
        !ram_1.isOk ||
        !ram_2.isOk ||
        !processor.isOk
    ) {
        return false
    }
    return true
}

async function seedWorkConfig() {
    const ram_1 = await RAMRepo.create({
        component: {
            name: "Crucial 16GB DDR4 2666MHz",
            componentType: "RAM",
            price: 79.99,
            manufacturer: "Crucial",
            imageUrl: "https://image.alza.cz/products/CR113f1f/CR113f1f.jpg?width=800&height=800",
        },
        id: "1b75b4b9-3988-40af-acb7-2535512d7eda",
        memoryType: "ddr4",
        capacity: 16,
        computerType: "DESKTOP",
    })
    const processor = await ProcessorRepo.create({
        component: {
            name: "Intel Core i7-10700",
            componentType: "PROCESSOR",
            price: 299.99,
            manufacturer: "Intel",
            imageUrl: "https://iczc.cz/35utavbm5mh1jat22gajn1bb38-3_1/obrazek",
        },
        id: "03985bcc-6051-4b2d-bb0f-5404eee89af5",
        socket: "lga1200",
        cores: 8,
        threads: 16,
        bits: 64,
        architecture: "Intel Core i7",
    })
    const motherboard = await MotherboardRepo.create({
        component: {
            name: "ASUS PRIME Z490-A",
            componentType: "MOTHERBOARD",
            price: 179.99,
            manufacturer: "ASUS",
            imageUrl: "https://dlcdnwebimgs.asus.com/gain/66cdc754-58ca-491a-8087-6ab9d646f5eb/w800/fwebp",
        },
        id: "57986798-aea1-401c-887f-47e9c1cb3f42",
        socket: "lga1200",
        formFactor: "ATX",
        ramSlots: 4,
        ramType: "ddr4",
        storageBusType: "sata",
        gpuInterface: "pcie",
    })
    const gpu = await GPURepo.create({
        component: {
            name: "NVIDIA GeForce GTX 1650",
            componentType: "GPU",
            price: 159.99,
            manufacturer: "NVIDIA",
            imageUrl: "https://iczc.cz/b5cs4cjg0ohm0aeoaf6m5o1gj1-2_1/obrazek",
        },
        id: "f749593c-5970-49f2-bf53-d69dc3d12f22",
        memory: 4,
        powerConnector: "6-pin",
        interface: "pcie",
        power: 300,
    })
    const storage = await StorageRepo.create({
        component: {
            name: "Samsung 970 EVO 1TB NVMe SSD",
            componentType: "STORAGE",
            price: 149.99,
            manufacturer: "Samsung",
            imageUrl: "https://iczc.cz/ebpvsc1rlshp4979p1ndfgoa0d-3_1/obrazek",
        },
        id: "7cd266dd-da80-4cf0-98e6-10a74d626fc5",
        capacity: 1000,
        storageType: "ssd",
        busType: "nvme",
    })
    const powerSupply = await PowerSupplyRepo.create({
        component: {
            name: "Corsair RM650",
            componentType: "POWERSUPPLY",
            price: 109.99,
            manufacturer: "Corsair",
            imageUrl: "https://iczc.cz/6rf1o73qeaie0a8ub1jugfm5d6-4_1/obrazek",
        },
        id: "2c677ad4-e260-495e-8ee2-2a55225a1078",
        powerOutput: 650,
        efficiency: "80+ Gold",
        formFactor: "ATX",
    })
    const pccase = await PCCaseRepo.create({
        component: {
            name: "Fractal Design Meshify C",
            componentType: "PCCASE",
            price: 89.99,
            manufacturer: "Fractal Design",
            imageUrl: "https://image.alza.cz/products/CB321k5i/CB321k5i.jpg?width=800&height=800",
        },
        id: "a82279d4-184e-4ee3-81e6-db8edebcdc02",
        formFactor: "ATX",
    })
    if (
        !pccase.isOk ||
        !storage.isOk ||
        !gpu.isOk ||
        !motherboard.isOk ||
        !powerSupply.isOk ||
        !ram_1.isOk ||
        !processor.isOk
    ) {
        return false
    }

    return true
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
    await seedWorkConfig()
    await seedGamingConfig()
    await seedOfficeConfig()
    await seedHighEndConfig()
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
