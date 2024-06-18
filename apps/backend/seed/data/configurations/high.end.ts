import RAMRepo from "../../../src/components/rams/repository/rams.repository"
import ProcessorRepo from "../../../src/components/processor/repository/processor.repository"
import MotherboardRepo from "../../../src/components/motherboard/repository/motherboard.repository"
import GPURepo from "../../../src/components/gpu/repository/gpu.repository"
import PowerSupplyRepo from "../../../src/components/powerSupply/repository/powerSupply.repository"
import PCCaseRepo from "../../../src/components/pcCase/repository/pcCase.repository"

export default async function seedHighEndConfig() {
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
    return !(
        !pccase.isOk ||
        !gpu.isOk ||
        !motherboard.isOk ||
        !powerSupply.isOk ||
        !ram_1.isOk ||
        !ram_2.isOk ||
        !processor.isOk
    )
}
