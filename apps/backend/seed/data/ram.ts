import { Ram } from "../../src/components/rams/types";
import faker from "../seed";
import { DATA_AMOUNT } from "../seed";

const ramData: Ram[] = Array.from({ length: DATA_AMOUNT }).map((_, index) => ({
  id: index + 1,
  name: faker.commerce.productName(),
  price: faker.number.int({ min: 0, max: 100 }),
  manufacturer: faker.company.name(),
  memoryType: faker.string.alphanumeric( { length: { min: 5, max: 25 } } ),
  capacity: faker.number.int({ min: 20000, max: 240000 }),
  busType: faker.string.alphanumeric( { length: { min: 5, max: 25 } } ),
}));

export const seedRam = async (tx) => {
  await tx.rams.createMany({
    data: ramData,
  });
};
