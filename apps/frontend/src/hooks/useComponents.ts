import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { ComponentTypes } from "../models/components"
import ComponentsApi from "../api/componentsApi"

export const useComponents = (name: ComponentTypes) => {
    const { data, isLoading } = useQuery({
        queryKey: ["components", name],
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

export const useComponentsEdit = (componentId: string) => {
    const { mutateAsync } = useMutation({
        mutationFn: (payload: unknown) => ComponentsApi.putSingle(componentId, payload),
    })

    return { mutateAsync }
}

export const useComponentsDelete = (componentId: string) => {
    const { mutateAsync } = useMutation({
        mutationFn: () => ComponentsApi.deleteSingle(componentId),
    })

    return { mutateAsync }
}
