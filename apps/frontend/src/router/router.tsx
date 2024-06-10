import App from "../app/App"
import { createBrowserRouter } from "react-router-dom"
import Homepage from "../pages/Homepage/Homepage"
import Build from "../pages/Build/Build"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"
import Components from "../pages/Components/Components"
import OptionsPage from "../pages/Options/OptionsPage"
import ProtectedRoute from "@/auth/ProtectedRoute"
import Dashboard from "@/pages/Dashboard/Dashboard"
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
