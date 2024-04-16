import App from "../app/App"
import { createBrowserRouter } from "react-router-dom"
import Homepage from "../Pages/Homepage/Homepage"
import Build from "../Pages/Build/Build"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App>
                {" "}
                <Homepage />{" "}
            </App>
        ),
    },
    {
        path: "/build",
        element: (
            <App>
                {" "}
                <Build />{" "}
            </App>
        ),
    },
    {
        path: "login",
        element: <Login />,
    },
    {
        path: "register",
        element: <Register />,
    },
])
