import { StrictMode } from "react"
import * as ReactDOM from "react-dom/client"

import "./globalStyles.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { DialogProvider } from "./Pages/Dashboard/DialogContext"

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
    <StrictMode>
        <DialogProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </DialogProvider>
    </StrictMode>,
)
