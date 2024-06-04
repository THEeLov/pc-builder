import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { ComponentTypes } from "../models/components"
import ComponentsApi from "../api/componentsApi"

export const useComponents = (name: ComponentTypes) => {
    const { data, isLoading } = useQuery({
        queryKey: ["product"],
        queryFn: () => ComponentsApi.getAll(name),
    })

    return { data, isLoading }
}

// TODO: These are admin functions

// export const useComponentsCreate = (name: ComponentTypes) => {
//   const queryClient = useQueryClient();
//   const { mutateAsync } = useMutation({
//     mutationFn: (payload: ComponentCreate) => ComponentsApi.postSingle(name, payload),
//   });

//   return { mutateAsync };
// };

// export const useProductEdit = (id: string) => {
//   const queryClient = useQueryClient();
//   const { mutateAsync } = useMutation({
//     mutationFn: (payload: ComponentEdit) => ComponentsApi.putSingle(id, payload),
//   });

//   return { mutateAsync };
// };

// export const useProductDelete = (id: string) => {
//   const queryClient = useQueryClient();
//   const { mutateAsync } = useMutation({
//     mutationFn: () => ComponentsApi.deleteSingle(id),
//     onSuccess: () => {
//       queryClient.invalidateQueries();
//     },
//   });

//   return { mutateAsync };
// };
