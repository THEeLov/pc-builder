import { Component } from "react"
import "./tableComponent.css"
import { ComponentTypes } from "@/models/components"
import DashboardTable from "@/pages/Dashboard/DashboardTable"
import CustomButton from "../CustomButton/CustomButton"

type TableProps = {
    components: string[]
    currentComponent: ComponentTypes
    handleClick: (component: string) => void
}

/*const TableComponent: React.FC<TableProps> = ({ components, currentComponent, handleClick }) => {
    return (<div className="dashboard">
        <div className="dashboard__component-selectors">
            {components.map((component) => (
                <div onClick={() => handleClick(component.toLocaleLowerCase())} key={component}>
                    <CustomButton label={component} btype="secondary" />
                </div>
            ))}
        </div>
        <DashboardTable name={currentComponent} />
    </div>);
};*/
