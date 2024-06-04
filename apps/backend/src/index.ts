import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { env } from "process"
import UserRouter from "./users/router/users.router"
import ConfigRouter from "./configurations/configurations.router"

config()

const app = express()
const port = env.PORT ?? 3000

// CORS middleware
app.use(
    cors({
        origin: "http://localhost:4200",
        credentials: true,
    }),
)

// JSON middleware
app.use(express.json())

// parse URL encoded strings
app.use(express.urlencoded({ extended: true }))

app.use("/users", UserRouter)
app.use("/configurations", ConfigRouter)

app.use((_req, res) => {
    res.status(404).send("Not found")
})

if (env.NODE_ENV !== "test") {
    app.listen(port, () => {
        console.log(`[${new Date().toISOString()}] RESTful API for iteration 02 is listening on port ${port}`)
    })
}
