import { useQuery, useMutation } from "@tanstack/react-query"
import { PartialConfigCreate, PartialConfigEdit } from "../models/configuration"
import PartialConfigApi from "../api/configurationApi"

export const usePartialConfig = (userId: string) => {
    const { data, isLoading } = useQuery({
        queryKey: ["partial-config"],
        queryFn: () => PartialConfigApi.getConfig(userId),
    })

    return { data, isLoading }
}

export const usePartialConfigCreate = (userId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: (payload: PartialConfigCreate) => PartialConfigApi.postConfig(userId, payload),
  });

  return { mutateAsync };
};

export const usePartialConfigEdit = (userId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: (payload: PartialConfigEdit) => PartialConfigApi.putConfig(userId, payload),
  });

  return { mutateAsync };
};

export const usePartialConfigDelete = (userId: string) => {
  const { mutateAsync } = useMutation({
    mutationFn: () => PartialConfigApi.deleteConfig(userId),
  });

  return { mutateAsync };
};
