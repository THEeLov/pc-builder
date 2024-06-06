import CustomButton from "@/components/CustomButton/CustomButton"
import TableComponents from "@/components/Table/TableComponents"
import React, { useState } from "react"
import { FaPlus } from "react-icons/fa"
import "./outlet.css"
import { useComponents } from "@/hooks/useComponents"
import { Spin } from "antd"

const mockData = [
    {
        component: {
            name: "Power Supply ultra",
            price: 145,
            imageUrl: "PHOTO",
        },
        id: "1984",
    },
    {
        component: {
            name: "Power Supply light",
            price: 135,
            imageUrl: "PHOTO",
        },
        id: "1985",
    },
]

const PowerSupplies = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const { data, isLoading } = useComponents("power-supplies")

    if (isLoading) {
        ;<Spin />
    }

    return (
        <div className="dashboard-components">
            <div className="dashboard-components__add-button">
                <CustomButton label="" btype="primary" icon={<FaPlus />}></CustomButton>
            </div>
            <TableComponents fetchedData={mockData} admin={true} />
        </div>
    )
}

export default PowerSupplies
