import { Gpu } from "../../src/components/gpu/types";
import faker from "../seed";
import { DATA_AMOUNT } from "../seed";

const gpuData: Gpu[] = Array.from({ length: DATA_AMOUNT }).map((_, index) => ({
  id: index + 1,
  name: faker.commerce.productName(),
  price: faker.number.int({ min: 0, max: 100 }),
  manufacturer: faker.company.name(),
  memory: faker.number.int({ min: 0, max: 2450 }),
  powerConnector: faker.commerce.productName(),
  interface: faker.system.networkInterface(),
  power: faker.number.int({ min: 0, max: 200 }),
}));

export const seedGpu = async (tx) => {
  await tx.gpu.createMany({
    data: gpuData,
  });
};
