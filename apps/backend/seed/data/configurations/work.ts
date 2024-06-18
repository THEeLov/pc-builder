import RAMRepo from "../../../src/components/rams/repository/rams.repository"
import ProcessorRepo from "../../../src/components/processor/repository/processor.repository"
import MotherboardRepo from "../../../src/components/motherboard/repository/motherboard.repository"
import GPURepo from "../../../src/components/gpu/repository/gpu.repository"
import StorageRepo from "../../../src/components/storage/repository/storage.repository"
import PowerSupplyRepo from "../../../src/components/powerSupply/repository/powerSupply.repository"
import PCCaseRepo from "../../../src/components/pcCase/repository/pcCase.repository"

export default async function seedWorkConfig() {
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
        formFactor: "atx",
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
        formFactor: "atx",
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
        formFactor: "atx",
    })
    return !(
        !pccase.isOk ||
        !storage.isOk ||
        !gpu.isOk ||
        !motherboard.isOk ||
        !powerSupply.isOk ||
        !ram_1.isOk ||
        !processor.isOk
    )
}
