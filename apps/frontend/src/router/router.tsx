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
import { DialogProvider } from "@/providers/DialogProvider"

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
                element: <ProtectedRoute admin={false} />,
                children: [{ path: "", Component: OptionsPage }],
            },
            {
                path: "/components",
                element: <ProtectedRoute admin={false} />,
                children: [{ path: "", Component: Components }],
            },
            {
                path: "/build",
                element: <ProtectedRoute admin={false} />,
                children: [{ path: "", Component: Build }],
            },
            {
                path: "/dashboard",
                element: (
                    <DialogProvider>
                        <ProtectedRoute admin={true} />
                    </DialogProvider>
                ),
                children: [{ path: "", Component: Dashboard }],
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
