import "./build.css"
import CustomButton from "../../components/CustomButton/CustomButton"
import { PlusOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { usePartialConfig } from "@/hooks/usePartialConfig"
import { Component } from "../../models/components"
import { MdDelete } from "react-icons/md"
import useAuth from "@/auth/authProvider"

const Build = () => {
    const { user } = useAuth()
    const { data, isLoading } = usePartialConfig(user?.id ?? "")
    const [info, setInfo] = useState<Array<{ name: string; info: Array<Component | null> }>>([])
    const [totalPrice, setTotalPrice] = useState(0)

    const componentInfo = useMemo(() => {
        if (!data) {
            return []
        }
        const infoArray: Array<{ name: string; info: Array<Component | null> }> = [
            { name: "Motherboard", info: [data?.motherboard ?? null] },
            { name: "Processor", info: [data?.processor ?? null] },
            { name: "Rams", info: [...data.rams, null] },
            { name: "GPU", info: [data?.gpu ?? null] },
            { name: "Storages", info: [...data.storages, null] },
            { name: "Power-Supplie", info: [data?.powerSupply ?? null] },
            { name: "Pc-Case", info: [data?.pcCase ?? null] },
        ]

        return infoArray
    }, [data, isLoading])

    useEffect(() => {
        setInfo(componentInfo)

        const price = componentInfo.reduce((acc, component) => {
            if (component.info && component.info.some((item) => item !== null)) {
                return acc + component.info.reduce((subAcc, item) => subAcc + (item?.component.price ?? 0), 0)
            } else {
                return acc
            }
        }, 0)

        setTotalPrice(price)
    }, [componentInfo])

    return (
        <div className="build">
            <div className="build__headline">
                <h1>Part Picker</h1>
            </div>
            <div className="build__components-container">
                <div className="build__components">
                    {isLoading ? (
                        <h1>Loading...</h1>
                    ) : (
                        info.map((component, index) => (
                            <div key={index} className="build__component">
                                <div className="component__name">
                                    <h2>{component.name}</h2>
                                </div>
                                {component.info.map((componentInfo, subIndex) => (
                                    <div key={subIndex} className="component__info">
                                        {componentInfo ? (
                                            <>
                                                <img src={componentInfo.component.imageUrl} alt="PHOTO" />
                                                <h3>{componentInfo.component.name}</h3>
                                                <h3 className="component__info__price">
                                                    {componentInfo.component.price} €
                                                </h3>
                                                <div className="component__info__button">
                                                    <CustomButton label="" btype="secondary" icon={<MdDelete />} />
                                                </div>
                                            </>
                                        ) : (
                                            <Link to={`/components?component=${component.name.toLocaleLowerCase()}s`}>
                                                <CustomButton label="Add" btype="primary" icon={<PlusOutlined />} />
                                            </Link>
                                        )}
                                    </div>
                                ))}
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
