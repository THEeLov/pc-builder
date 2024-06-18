import RAMRepo from "../../../src/components/rams/repository/rams.repository"
import ProcessorRepo from "../../../src/components/processor/repository/processor.repository"
import MotherboardRepo from "../../../src/components/motherboard/repository/motherboard.repository"
import GPURepo from "../../../src/components/gpu/repository/gpu.repository"
import StorageRepo from "../../../src/components/storage/repository/storage.repository"
import PowerSupplyRepo from "../../../src/components/powerSupply/repository/powerSupply.repository"
import PCCaseRepo from "../../../src/components/pcCase/repository/pcCase.repository"

export default async function seedOfficeConfig() {
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
    return !(
        !pccase.isOk ||
        !storage.isOk ||
        !gpu.isOk ||
        !motherboard.isOk ||
        !powerSupply.isOk ||
        !ram_1.isOk ||
        !ram_2.isOk ||
        !processor.isOk
    )
}
