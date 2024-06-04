import OptionCard from "./OptionCard/OptionCard"
import {
    AppstoreAddOutlined,
    DesktopOutlined,
    FundProjectionScreenOutlined,
    CustomerServiceOutlined,
    TagsOutlined,
} from "@ant-design/icons"
import "./optionspage.css"
import { Link } from "react-router-dom"

// Issue to solve: big screens will have too big navbar.
const OptionsPage = () => {
    const cardData = [
        { label: "Default", icon: AppstoreAddOutlined },
        { label: "Office", icon: FundProjectionScreenOutlined },
        { label: "Gaming", icon: CustomerServiceOutlined },
        { label: "Work", icon: DesktopOutlined },
        { label: "High-end", icon: TagsOutlined },
    ]

    return (
        <div className="options">
            <div className="options__headline">
                <h1>Select your configuration</h1>
            </div>
            <div className="options__container">
                {cardData.map((card, index) => (
                    <Link to="/build" className="options_container__link">
                        <OptionCard key={index} label={card.label} icon={<card.icon style={{ fontSize: "12rem" }} />} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default OptionsPage
