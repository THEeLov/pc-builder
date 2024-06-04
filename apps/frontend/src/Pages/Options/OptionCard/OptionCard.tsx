import { ReactNode } from "react"
import "./optioncard.css"

interface optionCardProps {
    label: string
    icon: ReactNode
}

const OptionCard = ({ label, icon }: optionCardProps) => {
    return (
        <div className="option-card">
            <div className="option-card__icon">{icon}</div>
            <div className="option-card__label">
                <h2>{label}</h2>
            </div>
        </div>
    )
}

export default OptionCard
