import express from "express"
import PowerSupplyController from "../controller/powerSupply.controller"

const router = express.Router()

router.route("/").post(PowerSupplyController.create).get(PowerSupplyController.getMany)

router
    .route("/:id")
    .put(PowerSupplyController.update)
    .get(PowerSupplyController.getSingle)
    .delete(PowerSupplyController.remove)

export default router
