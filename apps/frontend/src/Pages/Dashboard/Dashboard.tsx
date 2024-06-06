import CustomButton from "@/components/CustomButton/CustomButton"
import "./dashboard.css"
import { Outlet, useNavigate } from "react-router-dom"
import { DialogProvider } from "./DialogContext"

const components = ["Motherboards", "Processors", "Rams", "GPUs", "Storages", "Power-Supplies", "Pc-Cases"]

const Dashboard = () => {
    const navigate = useNavigate()
    const handleClick = (component: string) => {
        navigate(`/dashboard/${component.toLocaleLowerCase()}`)
    }

    return (
        <div className="dashboard">
            <div className="dashboard__headline">
                <h1>Dashboard</h1>
            </div>
            <div className="dashboard__component-selectors">
                {components.map((component) => {
                    return (
                        <div onClick={() => handleClick(component)}>
                            {" "}
                            <CustomButton label={component} btype="secondary" key={component} />
                        </div>
                    )
                })}
            </div>

            <DialogProvider>
                <Outlet />
            </DialogProvider>
        </div>
    )
}

export default Dashboard
