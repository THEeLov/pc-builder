import App from "../app/App"
import { createBrowserRouter } from "react-router-dom"
import Homepage from "../Pages/Homepage/Homepage"
import Build from "../Pages/Build/Build"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Components from "../Pages/Components/Components"
import OptionsPage from "../Pages/Options/OptionsPage"
import ProtectedRoute from "@/auth/ProtectedRoute"

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: "/options",
                Component: ProtectedRoute,
                children: [{ path: "", Component: OptionsPage }],
            },
            {
                path: "/components",
                Component: ProtectedRoute,
                children: [{ path: "", Component: Components }],
            },
            {
                path: "/build",
                Component: ProtectedRoute,
                children: [{ path: "", Component: Build }],
            },
        ],
    },
    {
        path: "login",
        Component: Login,
    },
    {
        path: "register",
        Component: Register,
    },
])
