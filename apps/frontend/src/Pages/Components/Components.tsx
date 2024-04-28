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
    return (
        <div className="components">
            <div className="components__filter-container">
                <div className="filter--headline">
                    <h1>Filters</h1>
                </div>
                <PriceFilter />
                <OrderFilter />
            </div>
            <div className="components-container"></div>
        </div>
    )
}

export default Components
