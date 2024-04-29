import { Link } from "react-router-dom"
import CustomButton from "../../../components/CustomButton/CustomButton"
import { PlusOutlined } from "@ant-design/icons"
import "./componentcard.css"
type ComponentType = {
    image: string
    name: string
    price: number
    componentId: string
}

const ComponentCard = ({ image, name, price, componentId }: ComponentType) => {
    return (
        <div className="component">
            <div className="component-item component__image">{image}</div>
            <div className="component-item component__name">{name}</div>
            <div className="component-item component__price">{price}</div>
            <div className="component-item component__delete-button">
                <Link to="/build">
                    <CustomButton label="Add" btype="secondary" icon={<PlusOutlined />} />
                </Link>
            </div>
        </div>
    )
}

export default ComponentCard
