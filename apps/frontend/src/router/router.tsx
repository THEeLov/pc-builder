import App from "../app/App"
import { createBrowserRouter } from "react-router-dom"
import Homepage from "../Pages/Homepage/Homepage"
import Build from "../Pages/Build/Build"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import Components from "../Pages/Components/Components"
import OptionsPage from "../Pages/Options/OptionsPage"
import ProtectedRoute from "@/auth/ProtectedRoute"
import Dashboard from "@/Pages/Dashboard/Dashboard"
import Motherboards from "../Pages/DashboardComponents/Motherboards"
import Processors from "../Pages/DashboardComponents/Processors"
import Rams from "../Pages/DashboardComponents/Rams"
import Gpus from "@/Pages/DashboardComponents/Gpus"
import Storages from "@/Pages/DashboardComponents/Storages"
import PowerSupplies from "@/Pages/DashboardComponents/PowerSupplies"
import PcCases from "@/Pages/DashboardComponents/PcCases"

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
            {
                path: "/dashboard",
                Component: Dashboard,
                children: [
                    { path: "motherboards", Component: Motherboards },
                    { path: "processors", Component: Processors },
                    { path: "rams", Component: Rams },
                    { path: "gpus", Component: Gpus },
                    { path: "storages", Component: Storages },
                    { path: "power-supplies", Component: PowerSupplies },
                    { path: "pc-cases", Component: PcCases },
                ],
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
