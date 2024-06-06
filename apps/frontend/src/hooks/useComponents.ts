import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { ComponentTypes } from "../models/components"
import ComponentsApi from "../api/componentsApi"

export const useComponents = (name: ComponentTypes) => {
    const { data, isLoading } = useQuery({
        queryKey: ["components"],
        queryFn: () => ComponentsApi.getAll(name),
    })

    return { data, isLoading }
}

export const useComponentsCreate = (name: ComponentTypes) => {
    const { mutateAsync } = useMutation({
        mutationFn: (payload: unknown) => ComponentsApi.postSingle(name, payload),
    })

    return { mutateAsync }
}

export const useProductEdit = (id: string) => {
    const queryClient = useQueryClient()
    const { mutateAsync } = useMutation({
        mutationFn: (payload: unknown) => ComponentsApi.putSingle(id, payload),
    })

    return { mutateAsync }
}

export const useProductDelete = (id: string) => {
    const { mutateAsync } = useMutation({
        mutationFn: () => ComponentsApi.deleteSingle(id),
    })

    return { mutateAsync }
}
