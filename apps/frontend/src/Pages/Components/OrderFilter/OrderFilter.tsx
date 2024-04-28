import React from "react"
import { Flex, Radio, RadioChangeEvent } from "antd"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import './orderfilter.css'

const OrderFilter = () => {
    const [searchParam, setSearchParams] = useSearchParams()

    const [orderValue, setOrderValue] = useState(searchParam.get("sort") ?? "name");

    const handleButtonChange = (e: RadioChangeEvent) => {
        setOrderValue(e.target.value)
        searchParam.set("sort", e.target.value)
        setSearchParams(searchParam, {
            replace: true,
        })
    }
    return (
        <div className="filter--order">
            <h2>Order filter:</h2>
            <Flex vertical gap="middle">
                <Radio.Group size="large" defaultValue={orderValue} onChange={handleButtonChange}>
                    <Radio.Button value="name">Name</Radio.Button>
                    <Radio.Button value="higher">▴ Price</Radio.Button>
                    <Radio.Button value="lower">▾ Price</Radio.Button>
                </Radio.Group>
            </Flex>
        </div>
    )
}

export default OrderFilter
