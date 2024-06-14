import { PowerSupply } from "../../src/components/powerSupply/types"
import faker from "../seed"
import { DATA_AMOUNT } from "../seed"

const powerSupplyData: PowerSupply[] = Array.from({ length: DATA_AMOUNT }).map((_, index) => ({
    id: index + 1,
    name: faker.commerce.productName(),
    price: faker.number.int({ min: 0, max: 100 }),
    manufacturer: faker.company.name(),
    fromFactor: faker.system.networkInterface(),
    powerOutput: faker.number.int({ min: 50, max: 250 }),
    efficiency: faker.string.alphanumeric({ length: { min: 5, max: 25 } }),
}))

export const seedPowerSupply = async (tx) => {
    await tx.powerSupply.createMany({
        data: powerSupplyData,
    })
}
