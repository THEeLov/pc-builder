import PriceFilter from "./PriceFilter/PriceFilter"
import TableComponents from "@/components/Table/TableComponents"
import { useComponents } from "@/hooks/useComponents"
import { ComponentTypes } from "@/models/components"
import { Spin } from "antd"
import { useSearchParams } from "react-router-dom"
import "./components.css"
import { useState } from "react"
import DashboardTable from "../Dashboard/DashboardTable"
import CustomButton from "@/components/CustomButton/CustomButton"

const components = ["Motherboards", "Processors", "Rams", "GPUs", "Storages", "Power-Supplies", "Pc-Cases"]

const Components = () => {
    const [searchParams] = useSearchParams()
    const componentParam = searchParams.get("component")
    const queryParams = new URLSearchParams(searchParams).toString()

    const [currentComponent, setCurrentComponent] = useState<ComponentTypes>("motherboards")

    const handleClick = (component: string) => {
        setCurrentComponent(component as ComponentTypes)
    }

    return (
        <div className="components">
            <div className="components__filter-container">
                <div className="filter--headline">
                    <h1>Filters</h1>
                </div>
                <div className="filter--filters">
                    <PriceFilter name={currentComponent} />
                </div>
            </div>
            <div className="dashboard">
                <div className="dashboard__component-selectors">
                    {components.map((component) => (
                        <div onClick={() => handleClick(component.toLocaleLowerCase())} key={component}>
                            <CustomButton label={component} btype="secondary" />
                        </div>
                    ))}
                </div>
                <DashboardTable name={currentComponent} />
            </div>
        </div>
    )
}

export default Components
