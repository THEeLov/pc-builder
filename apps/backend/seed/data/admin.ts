import { UsersRepository } from "../../src/users/repository/users.repository"

export default async function seedAdmin() {
  const user = await UsersRepository.create({
    username: "admin",
    email: "admin@admin.com",
    password: "adminadmin",
    userRole: "ADMIN",
  })
  return user.isOk;
}
