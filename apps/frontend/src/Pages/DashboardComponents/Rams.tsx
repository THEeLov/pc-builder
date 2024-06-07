import CustomButton from "@/components/CustomButton/CustomButton"
import TableComponents from "@/components/Table/TableComponents"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import "./outlet.css"
import { useComponents } from "@/hooks/useComponents"
import { Spin } from "antd"
import { useDialog } from "../Dashboard/DialogContext"
import RamCreateDialog from "@/components/Dialogs/RamCreateDialog"

const mockData = [
    {
        component: {
            name: "Rams ultra",
            price: 145,
            imageUrl: "PHOTO",
        },
        id: "1984",
    },
    {
        component: {
            name: "Rams light",
            price: 135,
            imageUrl: "PHOTO",
        },
        id: "1985",
    },
]

const Rams = () => {
    const { isDialogOpen, openDialog } = useDialog()
    const { data, isLoading } = useComponents("rams")

    if (isLoading) {
        ;<Spin />
    }

    return (
        <div className="dashboard-components">
            <div className="dashboard-components__add-button" onClick={openDialog}>
                <CustomButton label="" btype="primary" icon={<FaPlus />}></CustomButton>
            </div>
            {isDialogOpen && <RamCreateDialog />}
            <TableComponents fetchedData={mockData} admin={true} handleView={() => null} />
        </div>
    )
}

export default Rams
