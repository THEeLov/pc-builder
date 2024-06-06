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
            name: "Pc-Cases ultra violet",
            price: 145,
            imageUrl: "PHOTO",
        },
        id: "1984",
    },
    {
        component: {
            name: "Pc-case light blue",
            price: 1,
            imageUrl: "PHOTO",
        },
        id: "1985",
    },
]

const PcCases = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const { data, isLoading } = useComponents("motherboards")

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

export default PcCases
