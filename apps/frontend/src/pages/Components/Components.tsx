import PriceFilter from "./PriceFilter/PriceFilter"
import TableComponents from "@/components/Table/TableComponents"
import { useComponents } from "@/hooks/useComponents"
import { ComponentTypes } from "@/models/components"
import { Spin } from "antd"
import { useSearchParams } from "react-router-dom"
import "./components.css"

const Components = () => {
    const [searchParams] = useSearchParams()
    const componentParam = searchParams.get("component")
    const queryParams = new URLSearchParams(searchParams).toString()

    const { data, isLoading } = useComponents((componentParam as ComponentTypes) || "", queryParams)

    return (
        <div className="components">
            <div className="components__filter-container">
                <div className="filter--headline">
                    <h1>Filters</h1>
                </div>
                <div className="filter--filters">
                    <PriceFilter />
                </div>
            </div>
            <div className="components-container">
                {isLoading ? (
                    <Spin />
                ) : (
                    <TableComponents fetchedData={data || []} admin={false} name={componentParam as ComponentTypes} />
                )}
            </div>
        </div>
    )
}

export default Components
