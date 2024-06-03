import "./build.css"
import { useQuery } from "@tanstack/react-query"
import CustomButton from "../../components/CustomButton/CustomButton"
import { PlusOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import { useEffect, useMemo, useState } from "react"
import { usePartialConfig } from "@/hooks/usePartialConfig"
import { Component } from "../../models/components"
import { Button, Divider } from "antd"
import { PartialConfig } from "@/models/configuration"
import { MdDelete } from "react-icons/md"

const mockData = {
    id: "hello",
    configurationType: "GAMING",
    motherboard: {
        component: {
            name: "Super ultra light motherborad X123",
            price: 100,
            imageUrl: "PHOTO",
        },
        id: "132142124",
    },
    processor: null,
    rams: [],
    gpu: {
        component: {
            name: "Ultra fast gpu",
            price: 100,
            imageUrl: "PHOTO",
        },
        id: "132142124123",
    },
    storages: [],
    powerSupply: null,
    pcCase: null,
}

const Build = () => {
    // const { data, isLoading } = usePartialConfig(localStorage.getItem("userID") ?? "")
    const data = mockData
    const isLoading = false
    const [info, setInfo] = useState<Array<{ name: string; info: Component | null }>>([])
    const [totalPrice, setTotalPrice] = useState(0)

    const componentInfo = useMemo(() => {    
        const infoArray: Array<{ name: string, info: Component | null }> = [
            { name: "Motherboard", info: data.motherboard ?? null },
            { name: "Processor", info: data.processor ?? null },
            ...data.rams.map((ram: Component) => ({ name: "RAM", info: ram })),
            { name: "GPU", info: data.gpu ?? null },
            ...data.storages.map((storage: Component) => ({ name: "Storage", info: storage })),
            { name: "Power Supply", info: data.powerSupply ?? null },
            { name: "Case", info: data.pcCase ?? null },
        ];
    
        return infoArray;
    }, [data, isLoading]);
    
    useEffect(() => {
        setInfo(componentInfo);
    
        const price = componentInfo.reduce(
            (acc, component) => acc + (component.info ? component.info.component.price : 0),
            0,
        );
    
        setTotalPrice(price);
    }, [componentInfo]);

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
                        info.map((component, index) => (
                            <div className="build__component">
                                <div className="component__name">
                                    <h2>{component.name}</h2>
                                </div>
                                {component.info ? (
                                    <div className="component__info">
                                        <img src={component.info.component.imageUrl} alt="PHOTO" />
                                        <h3>{component.info.component.name}</h3>
                                        <h3 className="component__info__price">{component.info.component.price} €</h3>
                                        <div className="component__info__button">
                                            <CustomButton label="" btype="secondary" icon={<MdDelete />}></CustomButton>
                                        </div>
                                    </div>
                                ) : (
                                    <Link to={`/components?component=${component.name.toLocaleLowerCase()}`}>
                                        <CustomButton label="Add" btype="primary" icon={<PlusOutlined />} />
                                    </Link>
                                )}
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
