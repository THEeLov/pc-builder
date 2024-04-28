import "./components.css"
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
