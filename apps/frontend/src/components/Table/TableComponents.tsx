import CustomButton from "../CustomButton/CustomButton"
import { TiPlus } from "react-icons/ti"
import type { TableColumnsType } from "antd"
import { Table } from "antd"
import { useSearch } from "./useSearch"
import { MdDelete } from "react-icons/md"
import { FaEye } from "react-icons/fa"
import "./table.css"
import { useComponentsDelete } from "@/hooks/useComponents"
import { Component } from "../../models/components"
import { useState } from "react"

type DataIndex = keyof Component["component"];

type TableComponentsProps = {
    fetchedData: Component[]
    admin: boolean,
    handleView: (() => void), 
}

const TableComponents: React.FC<TableComponentsProps> = ({ fetchedData, admin, handleView }) => {
    const [componentId, setComponentId] = useState("")
    const { mutateAsync: DeleteComponent } = useComponentsDelete(componentId)

    const { getColumnSearchProps } = useSearch()

    const columns: TableColumnsType<Component> = [
        {
            title: "Image",
            dataIndex: ["component", "imageUrl"],
            key: "component.image",
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
            render: (record: Component) =>
                admin ? (
                    <div className="table-buttons">
                        <span onClick={handleView}>
                            <CustomButton label="" btype="secondary" icon={<FaEye />} />
                        </span>
                        <span onClick={() => handleDelete(record)}>
                            <CustomButton label="" btype="primary" icon={<MdDelete />}></CustomButton>
                        </span>
                    </div>
                ) : (
                    <div onClick={handleAdd}>
                        <CustomButton label="Add" btype="secondary" icon={<TiPlus />} />
                    </div>
                ),
            align: "right",
            width: "10%",
        },
    ]

    const handleDelete = async (record: Component) => {
        setComponentId(record.id)
        await DeleteComponent();
    }

    const handleAdd = () => {
        console.log("working")
    }

    return <Table columns={columns} pagination={{ position: ["none", "bottomCenter"] }} dataSource={fetchedData} />
}

export default TableComponents
