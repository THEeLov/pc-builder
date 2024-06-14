import { faker } from '@faker-js/faker';
faker.seed(42);
export const DATA_AMOUNT = 100;
export const RELATIONS_DATA_AMOUNT = 20;

export const generateRandomIndex = (): number => faker.number.int({ min: 1, max: DATA_AMOUNT });

export default faker;
