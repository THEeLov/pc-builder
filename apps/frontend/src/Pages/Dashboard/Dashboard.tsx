import CustomButton from "@/components/CustomButton/CustomButton"
import "./dashboard.css"
import { useState } from "react"
import { ComponentTypes } from "@/models/components"
import DashboardTable from "./DashboardTable"

const components = ["Motherboards", "Processors", "Rams", "GPUs", "Storages", "Power-Supplies", "Pc-Cases"]

const Dashboard = () => {
    const [currentComponent, setCurrentComponent] = useState<ComponentTypes>("motherboards")

    const handleClick = (component: string) => {
        setCurrentComponent(component as ComponentTypes)
    }

    console.log(currentComponent)
    return (
        <div className="dashboard">
            <div className="dashboard__headline">
                <h1>Dashboard</h1>
            </div>
            <div className="dashboard__component-selectors">
                {components.map((component) => {
                    return (
                        <div onClick={() => handleClick(component.toLocaleLowerCase())}>
                            {" "}
                            <CustomButton label={component} btype="secondary" key={component} />
                        </div>
                    )
                })}
            </div>
            <DashboardTable name={currentComponent} />
        </div>
    )
}

export default Dashboard
