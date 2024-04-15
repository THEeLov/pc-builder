import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"

import App from "./app/App"
import "./globalStyles.css"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Homepage from "./components/Homepage/Homepage"
import Build from "./components/Build/Build"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"

const router = createBrowserRouter([
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

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
