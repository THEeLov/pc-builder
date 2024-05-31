import CustomButton from "../CustomButton/CustomButton"
import { TiPlus } from "react-icons/ti"
import type { InputRef, TableColumnsType, TableColumnType } from "antd"
import { Table } from "antd"
import { useSearch } from "./useSearch"

type DataType = {
    component: {
        name: string
        price: number
        imageUrl: string
    }
}

type DataIndex = keyof DataType["component"]

type TableComponentsProps = {
    fetchedData: DataType[]
}

const TableComponents: React.FC<TableComponentsProps> = ({ fetchedData }) => {

    const { getColumnSearchProps } = useSearch()

    const columns: TableColumnsType<DataType> = [
        {
            title: "Image",
            dataIndex: ["component", "imageUrl"],
            key: "component.image",
        },
        {
            title: "Name",
            dataIndex: ["component", "name"],
            key: "name",
            onFilter: (value, record) => record.component.name.indexOf(value as string) === 0,
            sorter: (a, b) => a.component.name.length - b.component.name.length,
            sortDirections: ["descend"],
            ...getColumnSearchProps("name" as DataIndex),
        },
        {
            title: "Price (€)",
            dataIndex: ["component", "price"],
            key: "price",
            sorter: (a, b) => a.component.price - b.component.price,
        },
        {
            title: "Action",
            dataIndex: "",
            key: "add",
            render: (record) => (
                <div onClick={() => onAdd(record)}>
                    <CustomButton label="Add" btype="secondary" icon={<TiPlus />} />
                </div>
            ),
            align: "right",
            width: "10%",
        },
    ]

    const onAdd = (record: DataType) => {
        console.log(record)
    }

    return <Table columns={columns} pagination={{ position: ["none", "bottomCenter"] }} dataSource={fetchedData} />
}

export default TableComponents
