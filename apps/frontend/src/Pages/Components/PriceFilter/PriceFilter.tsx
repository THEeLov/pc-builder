import React from "react"
import { Slider } from "antd"

interface PriceFilterProps {
    filterFunction: (values: number[]) => void | undefined
    range: number[]
}

const PriceFilter = ({ filterFunction, range }: PriceFilterProps) => {
    return (
        <div className="filter--price">
            <h2>Price filter:</h2>
            <Slider
                range={{ draggableTrack: true }}
                defaultValue={[0, 400]}
                min={0}
                max={1000}
                onChangeComplete={filterFunction}
            />
            <div className="filter--price__range">
                <h2>{range[0]}€</h2>
                <h2>{range[1]}€</h2>
            </div>
        </div>
    )
}

export default PriceFilter
