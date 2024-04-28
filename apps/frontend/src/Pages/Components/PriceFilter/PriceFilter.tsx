import { Slider } from "antd"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import "./pricefilter.css"

const PriceFilter = () => {
    const [searchParam, setSearchParams] = useSearchParams()

    const [rangeValues, setRangeValues] = useState(() => {
        const minPrice = Number(searchParam.get("minPrice") ?? "0")
        const maxPrice = Number(searchParam.get("maxPrice") ?? "400")
        return [minPrice, maxPrice]
    })

    const handlePriceChange = (values: number[]) => {
        setRangeValues(values)
        searchParam.set("minPrice", `${values[0]}`)
        searchParam.set("maxPrice", `${values[1]}`)
        setSearchParams(searchParam, {
            replace: true,
        })
    }

    return (
        <div className="filter--price">
            <h2>Price filter:</h2>
            <Slider
                range={{ draggableTrack: true }}
                defaultValue={rangeValues}
                min={0}
                max={1000}
                onChangeComplete={handlePriceChange}
            />
            <div className="filter--price__range">
                <h2>{rangeValues[0]}€</h2>
                <h2>{rangeValues[1]}€</h2>
            </div>
        </div>
    )
}

export default PriceFilter
