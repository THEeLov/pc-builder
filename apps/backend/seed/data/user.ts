import { UserCreate } from "../../src/users/userTypes"
import faker from "../seed"
import { DATA_AMOUNT } from "../seed"

const userData: UserCreate[] = Array.from({ length: DATA_AMOUNT }).map((_, index) => ({
    username: faker.internet.userName() + (index + 1),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: faker.helpers.arrayElement(["USER", "ADMIN"]),
}))

export const seedUsers = async (tx) => {
    await tx.user.createMany({
        data: userData,
    })
}
