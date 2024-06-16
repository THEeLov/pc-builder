import { UsersRepository } from "../../users/repository/users.repository";

async function main() {
    await UsersRepository.create({
        username: "Administrator",
        email: "administrator@pc-assemblies.com",
        password: "pocitac123",
        userRole: "ADMIN",
    })
}

main()