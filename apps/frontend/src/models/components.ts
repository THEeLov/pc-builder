export type Component = {
    component: {
        name: string
        price: number
        imageUrl: string
    }
}

export type ComponentTypes = "Motherboard" | "Processor" | "RAM" | "Storage" | "GPU" | "Power Supply" | "Case" | ""
