import "./components.css"
import PriceFilter from "./PriceFilter/PriceFilter"
import OrderFilter from "./OrderFilter/OrderFilter"
import ComponentCard from "./ComponentCard/ComponentCard"

const Components = () => {
    const mockData = []
    for (let i = 0; i < 100; i++) {
        mockData.push({
            image: "PHOTO",
            name: `Product ${i}`,
            price: Math.floor(Math.random() * 400),
            componentId: i.toString(),
        })
    }

    return (
        <div className="components">
            <div className="components__filter-container">
                <div className="filter--headline">
                    <h1>Filters</h1>
                </div>
                <div className="filter--filters">
                    <PriceFilter />
                    <hr className="filter--line" />
                    <OrderFilter />
                </div>
            </div>
            <div className="components-container">
                {mockData.map((product) => {
                    return (
                        <ComponentCard
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            componentId={product.componentId}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Components
