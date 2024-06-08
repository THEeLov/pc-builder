import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { PartialConfigCreate, PartialConfigEdit } from "../models/configuration"
import PartialConfigApi from "../api/configurationApi"

export const usePartialConfig = (userId: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["partial-config", userId],
        queryFn: () => PartialConfigApi.getConfig(userId),
    })

    return { data, isLoading }
}

export const usePartialConfigCreate = (userId: string) => {
    const queryClient = useQueryClient()
    const { mutateAsync } = useMutation({
        mutationFn: (payload: PartialConfigCreate) => PartialConfigApi.postConfig(userId, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["partial-config"] })
        },
    })

    return { mutateAsync }
}

export const usePartialConfigEdit = (userId: string) => {
    const queryClient = useQueryClient()
    const { mutateAsync } = useMutation({
        mutationFn: (payload: PartialConfigEdit) => PartialConfigApi.putConfig(userId, payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["partial-config"] })
        },
    })

    return { mutateAsync }
}

export const usePartialConfigDelete = (userId: string) => {
    const queryClient = useQueryClient()
    const { mutateAsync } = useMutation({
        mutationFn: () => PartialConfigApi.deleteConfig(userId),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["partial-config"] })
        },
    })

    return { mutateAsync }
}
