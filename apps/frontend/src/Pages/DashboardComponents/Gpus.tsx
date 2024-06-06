import CustomButton from "@/components/CustomButton/CustomButton"
import TableComponents from "@/components/Table/TableComponents"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import "./outlet.css"
import { useComponents } from "@/hooks/useComponents"
import { Spin } from "antd"

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

const Gpus = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const { data, isLoading } = useComponents("motherboards")

    if (isLoading) {
      <Spin />
    }

    return (
        <div className="dashboard-components">
            <div className="dashboard-components__add-button">
                <CustomButton label="" btype="primary" icon={<FaPlus />}></CustomButton>
            </div>
            <TableComponents fetchedData={mockData} admin={true}/>
        </div>
    )
}

export default Gpus
