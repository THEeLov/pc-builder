import { User } from "../../src/users/userTypes"
import faker from "../seed"
import { DATA_AMOUNT } from "../seed"

const userData: User[] = Array.from({ length: DATA_AMOUNT }).map((_, index) => ({
    id: index + 1,
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
