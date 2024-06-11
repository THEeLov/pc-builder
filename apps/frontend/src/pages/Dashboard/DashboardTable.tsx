import { useComponents } from "@/hooks/useComponents"
import { Spin } from "antd"
import { ComponentTypes } from "../../models/components"
import MotherboardCreateDialog from "@/components/Dialogs/MotherboardCreateDialog"
import ProcessorCreateDialog from "@/components/Dialogs/ProcessorCreateDialog"
import RamCreateDialog from "@/components/Dialogs/RamCreateDialog"
import StorageCreateDialog from "@/components/Dialogs/StorageCreateDialog"
import PowerSupplyCreateDialog from "@/components/Dialogs/PowerSupplyCreateDialog"
import PcCaseCreateDialog from "@/components/Dialogs/PcCaseCreateDialog"
import GpuCreateDialog from "@/components/Dialogs/GpuCreateDialog"
import { useDialog } from "../../hooks/useDialog"
import TableComponents from "@/components/Table/TableComponents"
import CustomButton from "@/components/CustomButton/CustomButton"
import { FaPlus } from "react-icons/fa"

const DashboardTable = ({ name }: { name: ComponentTypes }) => {
    const { isDialogOpen, openDialog } = useDialog()

    const { data, isLoading } = useComponents(name, "")

    const componentMapping: { [key in ComponentTypes]?: React.ComponentType } = {
        motherboards: MotherboardCreateDialog,
        processors: ProcessorCreateDialog,
        rams: RamCreateDialog,
        storages: StorageCreateDialog,
        "power-supplies": PowerSupplyCreateDialog,
        "pc-cases": PcCaseCreateDialog,
        gpus: GpuCreateDialog,
    }

    const CurrentDialog = componentMapping[name]

    if (isLoading) {
        return <Spin />
    }

    return (
        <div className="dashboard-components">
            <div className="dashboard-components__add-button" onClick={openDialog}>
                <CustomButton label="" btype="primary" icon={<FaPlus />} />
            </div>
            {isDialogOpen && CurrentDialog && <CurrentDialog />}
            <h2>{name.toLocaleUpperCase()}</h2>
            {data && <TableComponents fetchedData={data} admin={true} name={name} />}
        </div>
    )
}

export default DashboardTable
