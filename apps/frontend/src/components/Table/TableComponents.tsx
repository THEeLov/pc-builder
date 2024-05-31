import CustomButton from "../CustomButton/CustomButton"
import { TiPlus } from "react-icons/ti"
import { useRef, useState } from "react"
import { SearchOutlined } from "@ant-design/icons"
import type { InputRef, TableColumnsType, TableColumnType } from "antd"
import { Button, Input, Space, Table } from "antd"
import type { FilterDropdownProps } from "antd/es/table/interface"
import Highlighter from "react-highlight-words"

type DataType = {
    image: string
    name: string
    price: number
    componentId: string
}

type DataIndex = keyof DataType

type TableComponentsProps = {
    fetchedData: DataType[]
}

const TableComponents: React.FC<TableComponentsProps> = ({ fetchedData }) => {
    const [searchText, setSearchText] = useState("")
    const [searchedColumn, setSearchedColumn] = useState("")
    const searchInput = useRef<InputRef>(null)

    const handleSearch = (selectedKeys: string[], confirm: FilterDropdownProps["confirm"], dataIndex: DataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }

    const handleReset = (clearFilters: () => void) => {
        clearFilters()
        setSearchText("")
    }

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: "block" }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false })
                            setSearchText((selectedKeys as string[])[0])
                            setSearchedColumn(dataIndex)
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close()
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => <SearchOutlined style={{ color: filtered ? "#1677ff" : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes((value as string).toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100)
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    })

    const columns: TableColumnsType<DataType> = [
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            onFilter: (value, record) => record.name.indexOf(value as string) === 0,
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ["descend"],
            ...getColumnSearchProps("name"),
        },
        {
            title: "Price (€)",
            dataIndex: "price",
            key: "price",
            sorter: (a, b) => a.price - b.price,
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
            width: "10%"
        },
    ]

    const onAdd = (record: DataType) => {
        console.log(record)
    }

    return <Table columns={columns} pagination={{ position: ['none', "bottomCenter"]}} dataSource={fetchedData} />
}

export default TableComponents
