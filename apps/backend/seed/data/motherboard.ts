import { Motherboard } from "../../src/components/motherboard/types"
import faker from "../seed"
import { DATA_AMOUNT } from "../seed"

const motherboardData: Motherboard[] = Array.from({ length: DATA_AMOUNT }).map((_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    price: faker.number.int({ min: 0, max: 100 }),
    manufacturer: faker.company.name(),
    socket: faker.system.networkInterface(),
    fromFactor: faker.system.networkInterface(),
    ramSlots: faker.number.int({ min: 2, max: 24 }),
    ramType: faker.string.alphanumeric({ length: { min: 5, max: 25 } }),
    gpuInterface: faker.string.alphanumeric({ length: { min: 5, max: 25 } }),
    storageBusType: faker.string.alphanumeric({ length: { min: 5, max: 25 } }),
}))

export const seedMotherboard = async (tx) => {
    await tx.motherboard.createMany({
        data: motherboardData,
    })
}
