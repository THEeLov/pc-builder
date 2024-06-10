import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import useAuth from "./authProvider"
import { notification } from "antd"

const ProtectedRoute = ({ admin }: { admin: boolean }) => {
    const { user } = useAuth()

    if (admin && (user === null || user.role !== "ADMIN")) {
        return <Navigate to="/" />
    }

    if (user === null) {
        notification.error({
            message: "Ooops!",
            description: "Please log in to continue",
            duration: 2.5,
        })
        return <Navigate to="/login" />
    }

    return <Outlet />
}

export default ProtectedRoute
