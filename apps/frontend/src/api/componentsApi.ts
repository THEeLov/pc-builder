import axios from "axios"
import { Component, ComponentTypes } from "../models/components"

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/components",
})

async function getAll(path: ComponentTypes): Promise<Component[]> {
    const resp = await axiosInstance.get(`${path}`)
    return resp.data
}

async function postSingle(path: ComponentTypes, payload: unknown) {
    const resp = await axiosInstance.post(`${path}`, payload)
    return resp.data
}

async function putSingle(id: string, payload: unknown) {
    const resp = await axiosInstance.put(`${id}`, payload)
    return resp.data
}

async function deleteSingle(id: string) {
    const resp = await axiosInstance.delete(`${id}`)
    return resp.data
}

const ComponentsApi = {
    get: axiosInstance.get,
    getAll,
    post: axiosInstance.post,
    postSingle,
    put: axiosInstance.put,
    putSingle,
    delete: axiosInstance.delete,
    deleteSingle,
}

export default ComponentsApi
