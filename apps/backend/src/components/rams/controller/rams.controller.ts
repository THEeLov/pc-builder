import RAMRepo from "../repository/rams.repository"
import { Request, Response } from "express"
import { RAMWithComponent } from "../validation/validation"
import baseComponentController from "../../base/controller/specific.components.controller"

async function getMany(req: Request, res: Response): Promise<Response<RAMWithComponent[]>> {
    return await baseComponentController.getMany(RAMRepo, req, res)
}
