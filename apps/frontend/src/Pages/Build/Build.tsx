import "./build.css"
import { useQuery } from "@tanstack/react-query"
import CustomButton from "../../components/CustomButton/CustomButton"
import { PlusOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { useState } from "react"
import { fetchConfiguration } from "../../api/fetchConfiguration"

const Build = () => {
    const components = ["Motherboard", "Processor", "RAM", "Storage", "GPU", "Power Supply", "Case"]
    const [totalPrice, setTotalPrice] = useState(0)
    const configuration = fetchConfiguration()

    return (
        <div className="build">
            <div className="build__headline">
                <h1>Part Picker</h1>
            </div>
            <div className="build__components-container">
                <div className="build__components">
                    {false ? (
                        <h1>Loading...</h1>
                    ) : (
                        components.map((component, index) => (
                            <div key={component} className="build__component">
                                <div className="component__name">
                                    <h2>{component}</h2>
                                </div>
                                <div className="component__info">
                                    <Link to={`/components?component=${components[index].toLocaleLowerCase().trim()}`}>
                                        <CustomButton label="Add" btype="primary" icon={<PlusOutlined />} />
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="build__amount">
                    <h2>Total price: {totalPrice}</h2>
                </div>
            </div>
        </div>
    )
}

export default Build
