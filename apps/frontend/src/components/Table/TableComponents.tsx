import CustomButton from "../CustomButton/CustomButton"
import { TiPlus } from "react-icons/ti"
import type { TableColumnsType } from "antd"
import { Table } from "antd"
import { useSearch } from "./useSearch"
import { MdDelete } from "react-icons/md"
import { FaEye } from "react-icons/fa"
import "./table.css"
import { useComponent, useComponentsDelete } from "@/hooks/useComponents"
import { Component, ComponentTypes } from "../../models/components"
import { useState } from "react"
import ComponentView from "../ComponentView/ComponentView"

type DataIndex = keyof Component["component"]

type TableComponentsProps = {
    fetchedData: Component[]
    admin: boolean
    name: ComponentTypes
}

const TableComponents: React.FC<TableComponentsProps> = ({ fetchedData, admin, name }) => {
    const [openView, setOpenView] = useState(false)
    const [componentId, setComponentId] = useState("")
    const { mutateAsync: DeleteComponent } = useComponentsDelete(componentId)
    const { data } = useComponent(name, componentId)
    console.log(componentId)

    const { getColumnSearchProps } = useSearch()

    const columns: TableColumnsType<Component> = [
        {
            title: "Image",
            dataIndex: ["component", "imageUrl"],
            key: "component.image",
            render: (imageUrl) => <img src={imageUrl} alt="Component" style={{ width: "70px", height: "auto" }} />,
        },
        {
            title: "Name",
            dataIndex: ["component", "name"],
            key: "component.name",
            onFilter: (value, record) => record.component.name.indexOf(value as string) === 0,
            sorter: (a, b) => a.component.name.length - b.component.name.length,
            sortDirections: ["descend"],
            ...getColumnSearchProps("name" as DataIndex),
        },
        {
            title: "Price (€)",
            dataIndex: ["component", "price"],
            key: "component.price",
            sorter: (a, b) => a.component.price - b.component.price,
        },
        {
            title: "Action",
            dataIndex: "",
            key: "add",
            render: (record: Component) => (
                <div className="table-buttons">
                    <span onClick={() => handleView(record)}>
                        <CustomButton label="" btype="secondary" icon={<FaEye />} />
                    </span>
                    {admin && (
                        <span onClick={() => handleDelete(record)}>
                            <CustomButton label="" btype="primary" icon={<MdDelete />} />
                        </span>
                    )}
                    {!admin && (
                        <div onClick={handleAdd}>
                            <CustomButton label="Add" btype="secondary" icon={<TiPlus />} />
                        </div>
                    )}
                </div>
            ),

            align: "right",
            width: "10%",
        },
    ]

    const handleDelete = async (record: Component) => {
        setComponentId(record.component.id)
        await DeleteComponent()
    }

    const handleAdd = () => {
        console.log("working")
    }

    const handleView = (record: Component) => {
        setComponentId(record.id)
        setOpenView(true)
    }

    const handleCloseView = () => {
        setOpenView(false)
    }

    return (
        <>
            <Table columns={columns} pagination={{ position: ["none", "bottomCenter"] }} dataSource={fetchedData} />
            {openView && data && <ComponentView data={data} handleClose={handleCloseView} />}
        </>
    )
}

export default TableComponents
