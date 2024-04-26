import App from "../app/App"
import { createBrowserRouter } from "react-router-dom"
import Homepage from "../Pages/Homepage/Homepage"
import Build from "../Pages/Build/Build"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Homepage
            },
            {
                path: '/build',
                Component: Build
            }
        ]
    },
    {
        path: "login",
        Component: Login
    },
    {
        path: "register",
        Component: Register
    },
])
