import componentsApi from "./componentsApi"
import { UseQueryResult, useQuery } from "@tanstack/react-query"

// Dont forget to change return type from any 
export function fetchConfiguration(): UseQueryResult<any> {
    return useQuery({
        queryKey: ["configuration"],
        queryFn: async () => {
            await componentsApi.get("/conifiguration/partial")
        },
    })
}
