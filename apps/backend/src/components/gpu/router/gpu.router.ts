import express from "express"
import GPUController from "../controller/gpu.controller"

const router = express.Router()

router.route("/").post(GPUController.create).get(GPUController.getMany)

router.route("/:id").put(GPUController.update).get(GPUController.getSingle).delete(GPUController.remove)

export default router
