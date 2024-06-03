import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "./AuthProvider"
import { notification } from "antd"

const ProtectedRoute = () => {
    const { user } = useAuth()

    if (user === null) {
        notification.error({
            message: "Ooops!",
            description: "Please log in to continue",
            duration: 2.5
        })
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default ProtectedRoute
