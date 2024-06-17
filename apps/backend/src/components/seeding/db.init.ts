import { UsersRepository } from "../../users/repository/users.repository"
import RAMRepo from "../rams/repository/rams.repository"
import MotherboardRepo from "../motherboard/repository/motherboard.repository"
import ProcessorRepo from "../processor/repository/processor.repository"
import GPURepo from "../gpu/repository/gpu.repository"
import StorageRepo from "../storage/repository/storage.repository"
import PCCaseRepo from "../pcCase/repository/pcCase.repository"
import PowerSupplyRepo from "../powerSupply/repository/powerSupply.repository"

//const OFFICE_CONFIG = {
//    motherboardId:
//    rams: [{id: "a1b2c3d4-1234-5678-9101-abcdef123456"}, {id: "b2c3d4e5-2345-6789-1011-bcdef2345678"}]
//}

async function seedOfficeConfig() {
    const ram_1 = await RAMRepo.create({
        component: {
            name: "Kingston ValueRAM 8GB DDR4 2400MHz",
            componentType: "RAM",
            price: 49.99,
            manufacturer: "Kingston",
            imageUrl: "your-image-url-here",
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
            imageUrl: "your-image-url-here",
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
            imageUrl: "your-image-url-here",
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
            imageUrl: "your-image-url-here",
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
            imageUrl: "your-image-url-here",
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
            imageUrl: "your-image-url-here",
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
            imageUrl: "your-image-url-here",
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
            imageUrl: "your-image-url-here",
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

async function main() {
    await UsersRepository.create({
        username: "Administrator",
        email: "administrator@pc-assemblies.com",
        password: "pocitac123",
        userRole: "ADMIN",
    })
    await seedGamingConfig()
}

main()
