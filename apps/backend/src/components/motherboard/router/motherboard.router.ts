import express from "express"
import MotherboardController from "../controller/motherboard.controller"

const router = express.Router()

router.route("/").post(MotherboardController.create).get(MotherboardController.getMany)

router.route("/:id").put(MotherboardController.update).get(MotherboardController.getSingle).delete(MotherboardController.remove)

export default router
