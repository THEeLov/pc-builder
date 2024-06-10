import { Navigate, Outlet } from "react-router-dom"
import useAuthData from "../hooks/useAuthData"
import { notification } from "antd"

const ProtectedRouteLayout = ({ admin }: { admin: boolean }) => {
    const { user } = useAuthData()

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

export default ProtectedRouteLayout
