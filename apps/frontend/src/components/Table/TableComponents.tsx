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
import { usePartialConfigEdit } from "@/hooks/usePartialConfig"
import useAuthData from "../../hooks/useAuthData"
import { useNavigate } from "react-router-dom"
import { mapComponentToBody } from "@/utils/mapComponentToBody"

type DataIndex = keyof Component["component"]

type TableComponentsProps = {
    fetchedData: Component[]
    admin: boolean
    name: ComponentTypes
}

// This component should be better decomposed, doesnt have single responsibility
const TableComponents: React.FC<TableComponentsProps> = ({ fetchedData, admin, name }) => {
    const { user } = useAuthData()
    const [openView, setOpenView] = useState(false)
    const [componentId, setComponentId] = useState("")
    const navigate = useNavigate()

    const { mutateAsync: DeleteComponent } = useComponentsDelete(componentId)
    const { mutateAsync: AddComponent } = usePartialConfigEdit(user?.id ?? "")

    const { data } = useComponent(name, componentId)

    const { getColumnSearchProps } = useSearch()

    const columns: TableColumnsType<Component> = [
        {
            title: "Image",
            dataIndex: ["component", "imageUrl"],
            key: "component.image",
            render: (imageUrl) => <img src={imageUrl} alt="Component" style={{ width: "70px", height: "70px" }} />,
        },
        {
            title: "Name",
            dataIndex: ["component", "name"],
            key: "component.name",
            onFilter: (value, record) => record.component.name.indexOf(value as string) === 0,
            sorter: (a, b) => a.component.name.toLocaleLowerCase().localeCompare(b.component.name.toLocaleLowerCase()),
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
                    {admin ? (
                        <span onClick={() => handleDelete(record)}>
                            <CustomButton label="" btype="primary" icon={<MdDelete />} />
                        </span>
                    ) : (
                        <div onClick={() => handleAdd(record)}>
                            <CustomButton label="Add" btype="primary" icon={<TiPlus />} />
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

    const handleAdd = async (record: Component) => {
        setComponentId(record.id)
        let body = mapComponentToBody(name, record, false)
        await AddComponent(body)
        navigate("/build")
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
