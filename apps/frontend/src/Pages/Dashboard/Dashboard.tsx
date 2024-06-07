import CustomButton from "@/components/CustomButton/CustomButton"
import "./dashboard.css"
import { useDialog } from "./DialogContext"
import { useState } from "react"
import { ComponentTypes } from "@/models/components"
import { useComponents } from "@/hooks/useComponents"
import { Spin } from "antd"
import TableComponents from "@/components/Table/TableComponents"
import { FaPlus } from "react-icons/fa"
import MotherboardCreateDialog from "@/components/Dialogs/MotherboardCreateDialog"
import ProcessorCreateDialog from "@/components/Dialogs/ProcessorCreateDialog"
import RamCreateDialog from "@/components/Dialogs/RamCreateDialog"
import StorageCreateDialog from "@/components/Dialogs/StorageCreateDialog"
import PowerSupplyCreateDialog from "@/components/Dialogs/PowerSupplyCreateDialog"
import PcCaseCreateDialog from "@/components/Dialogs/PcCaseCreateDialog"
import GpuCreateDialog from "@/components/Dialogs/GpuCreateDialog"

const components = ["Motherboards", "Processors", "Rams", "GPUs", "Storages", "Power-Supplies", "Pc-Cases"]

const mockData = [
    {
        component: {
            name: "GPU ultra",
            price: 145,
            imageUrl: "PHOTO",
        },
        id: "1984",
    },
    {
        component: {
            name: "GPU light",
            price: 135,
            imageUrl: "PHOTO",
        },
        id: "1985",
    },
]

const Dashboard = () => {
    const { isDialogOpen, openDialog } = useDialog()
    const [currentComponent, setCurrentComponent] = useState<ComponentTypes>("motherboards")
    const { data, isLoading } = useComponents(currentComponent)

    const handleClick = (component: string) => {
        setCurrentComponent(component as ComponentTypes)
    }

    const componentMapping: { [key in ComponentTypes]?: React.ComponentType } = {
        motherboards: MotherboardCreateDialog,
        processors: ProcessorCreateDialog,
        rams: RamCreateDialog,
        storages: StorageCreateDialog,
        "power-supplies": PowerSupplyCreateDialog,
        "pc-cases": PcCaseCreateDialog,
        gpus: GpuCreateDialog,
    }

    const CurrentDialog = componentMapping[currentComponent]

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

            {isLoading ? (
                <Spin />
            ) : (
                <div className="dashboard-components">
                    <div className="dashboard-components__add-button" onClick={openDialog}>
                        <CustomButton label="" btype="primary" icon={<FaPlus />}></CustomButton>
                    </div>
                    {isDialogOpen && CurrentDialog && <CurrentDialog />}
                    <TableComponents fetchedData={mockData} admin={true} handleView={() => null} />
                </div>
            )}
        </div>
    )
}

export default Dashboard
