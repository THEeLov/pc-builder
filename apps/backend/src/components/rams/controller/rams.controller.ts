import RAMRepo from "../repository/rams.repository"
import { Request, Response } from "express"
import { RAMWithComponent } from "../validation/validation"
import { RamCreate, RamUpdate } from "../validation/validation"
import baseComponentController from "../../base/controller/specific.components.controller"

async function getMany(req: Request, res: Response): Promise<Response<RAMWithComponent[]>> {
    return await baseComponentController.getMany(RAMRepo, req, res)
}

async function create(req: Request, res: Response): Promise<Response<RAMWithComponent>> {
    return await baseComponentController.create(RamCreate, RAMRepo, req, res)
}

async function remove(req: Request, res: Response): Promise<Response<void>> {
    return await baseComponentController.remove(RAMRepo, req, res)
}

async function update(req: Request, res: Response): Promise<Response<RAMWithComponent>> {
    return await baseComponentController.update(RamUpdate, RAMRepo, req, res)
}

async function getSingle(req: Request, res: Response) {
    return await baseComponentController.getSingle(RAMRepo, req, res)
}

export const RAMController = {
    getMany,
    getSingle,
    create,
    remove,
    update,
}