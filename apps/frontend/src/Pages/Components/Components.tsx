import "./components.css"
import PriceFilter from "./PriceFilter/PriceFilter"
import TableComponents from "@/components/Table/TableComponents"
import { useComponents } from "@/hooks/useComponents"
import { ComponentTypes } from "@/models/components"
import { Spin } from "antd"
import { useSearchParams } from "react-router-dom"

const Components = () => {
    // const mockData = []
    // for (let i = 0; i < 100; i++) {
    //     mockData.push({
    //         component: {
    //             name: `Product ${i}`,
    //             price: Math.floor(Math.random() * 400),
    //             imageUrl: "PHOTO",
    //         },
    //         id: "something",
    //         formFactor: "something",
    //         componentId: "something",
    //     })
    // }
    const [searchParams] = useSearchParams()
    const componentParam = searchParams.get("component")

    const { data, isLoading } = useComponents((componentParam as ComponentTypes) || "")

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
                {isLoading ? <Spin /> : <TableComponents fetchedData={data || []} admin={false} />}
            </div>
        </div>
    )
}

export default Components
