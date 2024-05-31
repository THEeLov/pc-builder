export type Component = {
    component: {
        name: string
        price: number
        imageurl: string
    }
}

export type ComponentTypes = {
    name: "Motherboard" | "Processor" | "RAM" | "Storage" | "GPU" | "Power Supply" | "Case" | ""
}
