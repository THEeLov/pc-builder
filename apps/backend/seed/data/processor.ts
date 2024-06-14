import { Processor } from "../../src/components/processor/types"
import faker from "../seed"
import { DATA_AMOUNT } from "../seed"

const processorData: Processor[] = Array.from({ length: DATA_AMOUNT }).map((_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    price: faker.number.int({ min: 0, max: 100 }),
    manufacturer: faker.company.name(),
    architecture: faker.string.alphanumeric({ length: { min: 5, max: 25 } }),
    cores: faker.number.int({ min: 2, max: 24 }),
    threads: faker.number.int({ min: 20, max: 240 }),
    bits: faker.number.int({ min: 200, max: 2400 }),
    socket: faker.string.alphanumeric({ length: { min: 5, max: 25 } }),
}))

export const seedProcessor = async (tx) => {
    await tx.processor.createMany({
        data: processorData,
    })
}
