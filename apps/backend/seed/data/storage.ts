import { Storage } from "../../src/components/storage/types"
import faker from "../seed"
import { DATA_AMOUNT } from "../seed"

const storageData: Storage[] = Array.from({ length: DATA_AMOUNT }).map((_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    price: faker.number.int({ min: 0, max: 100 }),
    manufacturer: faker.company.name(),
    storageType: faker.string.alphanumeric({ length: { min: 5, max: 25 } }),
    capacity: faker.number.int({ min: 200000, max: 2400000 }),
    busType: faker.string.alphanumeric({ length: { min: 5, max: 25 } }),
}))

export const seedStorage = async (tx) => {
    await tx.storage.createMany({
        data: storageData,
    })
}
