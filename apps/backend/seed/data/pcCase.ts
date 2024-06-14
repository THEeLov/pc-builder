import { PcCase } from "../../src/components/pcCase/types"
import faker from "../seed"
import { DATA_AMOUNT } from "../seed"

const pcCaseData: PcCase[] = Array.from({ length: DATA_AMOUNT }).map((_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    price: faker.number.int({ min: 0, max: 2400 }),
    manufacturer: faker.company.name(),
    fromFactor: faker.system.networkInterface(),
}))

export const seedPcCase = async (tx) => {
    await tx.pcCase.createMany({
        data: pcCaseData,
    })
}
