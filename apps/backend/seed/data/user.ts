import { UserCreate } from "../../src/users/userTypes"
import { faker } from "@faker-js/faker"
import { UsersRepository } from "../../src/users/repository/users.repository"

const userData: UserCreate[] = Array.from({ length: 100 }).map((_, index) => ({
    username: faker.internet.userName() + (index + 1),
    email: faker.internet.email(),
    password: faker.internet.password(),
    role: faker.helpers.arrayElement(["USER", "ADMIN"]),
}))

export const seedUsers = async () => {
    for (const user of userData) {
        const result = await UsersRepository.create(user)
        if (result.isErr) {
            console.error("Failed to create pc case:", result.error)
        }
    }
}
