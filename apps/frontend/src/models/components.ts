export type Component = {
    component: {
        id: string
        name: string
        price: number
        imageUrl: string
    }
    id: string
}

export type ComponentTypes =
    | "motherboards"
    | "processors"
    | "rams"
    | "storages"
    | "gpus"
    | "power-supplies"
    | "pc-cases"
    | ""
