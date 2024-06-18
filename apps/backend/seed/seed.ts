import { PrismaClient } from "@prisma/client"
import * as dotenv from "dotenv"
import seedGPUs from "./data/components/gpu"
import { seedUsers } from "./data/user"
import seedHighEndConfig from "./data/configurations/high.end"
import seedWorkConfig from "./data/configurations/work"
import seedGamingConfig from "./data/configurations/gaming"
import seedOfficeConfig from "./data/configurations/office"
import seedAdmin from "./data/admin"
import seedMotherboards from "./data/components/motherboard"
import seedPcCases from "./data/components/pcCase"
import seedPowerSupplies from "./data/components/powerSupply"
import seedProcessors from "./data/components/processor"
import seedRams from "./data/components/ram"
import seedStorages from "./data/components/storage"

dotenv.config()

const client = new PrismaClient()

const deleteAll = async () => {
    await client.$transaction([client.component.deleteMany(), client.user.deleteMany()])
    console.log("All data cleared.")
}

const seedComponents = async () => {
    await seedGPUs()
    await seedMotherboards()
    await seedPcCases()
    await seedPowerSupplies()
    await seedProcessors()
    await seedRams()
    await seedStorages()
}

const seedConfigurations = async () => {
    await seedHighEndConfig()
    await seedWorkConfig()
    await seedGamingConfig()
    await seedOfficeConfig()
}

const main = async (): Promise<any> => {
    await client.$connect()
    await deleteAll()
    await seedComponents()
    await seedConfigurations()
    await seedUsers()
    await seedAdmin()
}

main()
    .then(() => {
        console.log("Seeding finished")
        process.exit(0)
    })
    .catch((e: any) => {
        console.log(e)
        process.exit(1)
    })
    .finally(() => {
        client.$disconnect().then(() => "Disconnected")
    })
