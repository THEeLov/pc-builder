import React from "react"
import { Flex, Radio, RadioChangeEvent } from "antd"

interface OrderFilterProps {
    filterFunction: (value: RadioChangeEvent) => void | undefined
}

const OrderFilter = ({ filterFunction }: OrderFilterProps) => {
    return (
        <div className="filter--order">
            <h2>Order by:</h2>
            <Flex vertical gap="middle">
                <Radio.Group size="large" defaultValue="name" onChange={filterFunction}>
                    <Radio.Button value="name">Name</Radio.Button>
                    <Radio.Button value="higher">▴ Price</Radio.Button>
                    <Radio.Button value="lower">▾ Price</Radio.Button>
                </Radio.Group>
            </Flex>
        </div>
    )
}

export default OrderFilter
