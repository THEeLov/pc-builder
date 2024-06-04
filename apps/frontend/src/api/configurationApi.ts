import axios from "axios"
import { PartialConfig, PartialConfigCreate, PartialConfigEdit } from "../models/configuration"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/configuration/partial",
})

async function getConfig(userId: string): Promise<PartialConfig> {
    const resp = await axiosInstance.get(`${userId}`)
    return resp.data
}

async function postConfig(userId: string, payload: unknown): Promise<PartialConfig> {
    const resp = await axiosInstance.post(`${userId}`, payload)
    return resp.data
}

async function putConfig(userId: string, payload: unknown): Promise<PartialConfig> {
    const resp = await axiosInstance.put(`${userId}`, payload)
    return resp.data
}

async function deleteConfig(userId: string) {
    const resp = await axiosInstance.delete(`${userId}`)
    return resp.data
}

const ConfigurationApi = {
    get: axiosInstance.get,
    getConfig,
    post: axiosInstance.post,
    postConfig,
    put: axiosInstance.put,
    putConfig,
    delete: axiosInstance.delete,
    deleteConfig,
}

export default ConfigurationApi
