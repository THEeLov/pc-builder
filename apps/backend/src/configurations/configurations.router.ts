import express from "express"
import { ParcialConfigurationController } from "./partial/controller/parcialConfiguration.controller"
const router = express.Router()

router.route("/partial").get(ParcialConfigurationController.get)
router
    .route("/parital/:id")
    .put(ParcialConfigurationController.update)
    .post(ParcialConfigurationController.create)
    .delete(ParcialConfigurationController.remove)

export default router
