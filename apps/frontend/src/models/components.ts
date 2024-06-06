export type Component = {
    component: {
        name: string
        price: number
        imageUrl: string
    }
    id: string
}

export type ComponentTypes = "motherboards" | "processors" | "rams" | "storages" | "gpus" | "power-supplies" | "pc-cases" | ""
