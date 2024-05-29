import express from "express"
import PCCaseController from "../controller/pcCase.controller"

const router = express.Router()

router.route("/").post(PCCaseController.create).get(PCCaseController.getMany)

router.route("/:id").put(PCCaseController.update).get(PCCaseController.getSingle).delete(PCCaseController.remove)

export default router
