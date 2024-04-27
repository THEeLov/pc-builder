import React, { useEffect } from "react"
import CustomButton from "../../components/CustomButton/CustomButton"
import "./components.css"
import { useState } from "react"
import { RadioChangeEvent, Slider } from "antd"
import { Flex, Radio } from "antd"
import { useSearchParams } from "react-router-dom"
import PriceFilter from "./PriceFilter/PriceFilter"
import OrderFilter from "./OrderFilter/OrderFilter"

const Components = () => {
    const [searchParamt, setSearchParams] = useSearchParams()
    const minPriceParam = searchParamt.get("minPrice")
    const maxPriceParam = searchParamt.get("maxPrice")
    console.log(minPriceParam, maxPriceParam)

    const basicFilter = {
        sort: "name",
        minPrice: "0",
        maxPrice: "10000",
    }

    const [rangeValues, setRangeValues] = useState(() => {
        const minPrice = searchParamt.get("minPrice") || "0"
        const maxPrice = searchParamt.get("maxPrice") || "400"
        return [Number(minPrice), Number(maxPrice)]
    })

    const [orderValue, setOrderValue] = useState(() => {
        const sortParam = searchParamt.get("sort") || "debilko"
        return sortParam
    })

    const handlePriceChange = (values: number[]) => {
        setRangeValues(values)
        basicFilter.minPrice = values[0].toString()
        basicFilter.maxPrice = values[1].toString()
        setSearchParams(basicFilter)
    }

    const handleButtonChange = (e: RadioChangeEvent) => {
        setOrderValue(e.target.value)
        basicFilter.sort = e.target.value
        setSearchParams(basicFilter)
    }

    return (
        <div className="components">
            <div className="components__filter-container">
                <div className="filter--headline">
                    <h1>Filters</h1>
                </div>
                <PriceFilter filterFunction={handlePriceChange} range={rangeValues} />
                <OrderFilter filterFunction={handleButtonChange} />
            </div>
            <div className="components-container"></div>
        </div>
    )
}

export default Components
