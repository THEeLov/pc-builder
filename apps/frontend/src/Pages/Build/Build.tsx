import "./build.css"
import { useQuery } from "@tanstack/react-query"
import  CustomButton  from "../../components/CustomButton/CustomButton"
import { PlusOutlined } from "@ant-design/icons"

const Build = () => {
    
    const components = ["Motherboard", "Processor", "RAM", "Storage", "GPU", "Power Supply", "Case"]
    const total = 0;
    
    const { data, isLoading } = useQuery({
        queryKey: ["components"],
        queryFn: async () => {
            await fetch("http://localhost:8080/configuration/partial")
                .then((response) => response.json())
                .catch((error) => console.log(error))
        },
    })

    return (
        <div className="build">
            <div className="build__headline">
                <h1>Part Picker</h1>
            </div>
            <div className="build__components-container">
                <div className="build__components">
                    {isLoading? (
                        <h1>Loading...</h1>
                    ) : (
                        components.map((component) => (
                            <div key={component} className="build__component">
                                <div className="component__name">
                                    <h2>{component}</h2>
                                </div>
                                <div className="component__info">
                                    <CustomButton label="Add" btype="primary" icon={<PlusOutlined/>}></CustomButton>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="build__amount">
                    <h2>Total price: {total}</h2>
                </div>
            </div>
        </div>
    )
}

export default Build
