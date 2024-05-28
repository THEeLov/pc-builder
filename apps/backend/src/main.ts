import express from "express"
import cors from "cors"
import { config } from "dotenv"
import { env } from "process"
import cookieParser from "cookie-parser"
import UserRouter from "./users/router/users.router"
import ConfigRouter from "./configurations/configurations.router"
import RAMRouter from "./components/rams/router/rams.router"

config()

const app = express()
const port = env.PORT ?? 3000

app.use(cookieParser())

// CORS middleware
app.use(cors())

// JSON middleware
app.use(express.json())

// parse URL encoded strings
app.use(express.urlencoded({ extended: true }))

app.use("/components/rams", RAMRouter)
app.use("/users", UserRouter)
app.use("/configurations", ConfigRouter)

app.use((_req, res) => {
    res.status(404).send("Not found")
})

if (env.NODE_ENV !== "test") {
    app.listen(port, () => {
        console.log(`[${new Date().toISOString()}] RESTful API  is listening on port ${port}`)
    })
}
