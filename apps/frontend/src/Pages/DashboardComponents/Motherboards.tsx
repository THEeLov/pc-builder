import CustomButton from "@/components/CustomButton/CustomButton"
import TableComponents from "@/components/Table/TableComponents"
import React, { useState } from "react"
import { FaPlus } from "react-icons/fa"
import "./outlet.css"
import { useComponents } from "@/hooks/useComponents"
import { Spin } from "antd"
import MotherboardCreateDialog from "../../components/Dialogs/MotherboardCreateDialog"

const mockData = [
    {
        component: {
            name: "Motherboard ultra",
            price: 145,
            imageUrl: "PHOTO",
        },
        id: "1984",
    },
    {
        component: {
            name: "Motherboard light",
            price: 135,
            imageUrl: "PHOTO",
        },
        id: "1985",
    },
]

const Motherboards = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const { data, isLoading } = useComponents("motherboards")

    const handleOpen = () => {
        setDialogOpen(true)
    }

    const handleClose = () => {
        setDialogOpen(false)
    }

    if (isLoading) {
        ;<Spin />
    }

    return (
        <div className="dashboard-components">
            <div className="dashboard-components__add-button" onClick={handleOpen}>
                <CustomButton label="" btype="primary" icon={<FaPlus />}></CustomButton>
            </div>
            {dialogOpen && <MotherboardCreateDialog handleClose={handleClose}/>}
            <TableComponents fetchedData={mockData} admin={true} handleView={() => null} />
        </div>
    )
}

export default Motherboards
