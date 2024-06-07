import OptionCard from "./OptionCard/OptionCard"
import {
    AppstoreAddOutlined,
    DesktopOutlined,
    FundProjectionScreenOutlined,
    CustomerServiceOutlined,
    TagsOutlined,
} from "@ant-design/icons"
import "./optionspage.css"
import { useNavigate } from "react-router-dom"
import { usePartialConfigCreate, usePartialConfigDelete } from "@/hooks/usePartialConfig"
import useAuth from "@/auth/authProvider"

// Issue to solve: big screens will have too big navbar.
const OptionsPage = () => {
    const { user } = useAuth()
    const { mutateAsync: PartialCreate } = usePartialConfigCreate(user?.id || "")
    const { mutateAsync: PartialDelete } = usePartialConfigDelete(user?.id || "")
    const navigate = useNavigate()

    const handleClick = async (configType: string) => {
        try {
            await PartialDelete()
        } catch (err) {
            // Caught but ignored
        }
        await PartialCreate({ configurationType: configType })
        navigate(`/build`)
    }

    const cardData = [
        { label: "DEFAULT", icon: AppstoreAddOutlined },
        { label: "OFFICE", icon: FundProjectionScreenOutlined },
        { label: "GAMING", icon: CustomerServiceOutlined },
        { label: "WORK", icon: DesktopOutlined },
        { label: "HIGH_END", icon: TagsOutlined },
    ]

    return (
        <div className="options">
            <div className="options__headline">
                <h1>Select your configuration</h1>
            </div>
            <div className="options__container">
                {cardData.map((card, index) => (
                    <div className="options_container__link" onClick={() => handleClick(card.label)}>
                        <OptionCard key={index} label={card.label} icon={<card.icon style={{ fontSize: "12rem" }} />} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OptionsPage
