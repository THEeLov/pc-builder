import express from "express"
import { ParcialConfigurationController } from "./partial/controller/parcialConfiguration.controller"
import ConfigurationController from "./full/controller/configuration.controller"
const router = express.Router()

router.route("/partial").get(ParcialConfigurationController.get)
router
    .route("/parital/:id")
    .put(ParcialConfigurationController.update)
    .post(ParcialConfigurationController.create)
    .delete(ParcialConfigurationController.remove)

router.route("/").get(ConfigurationController.getMany)
router.route("/:id").put(ConfigurationController.update)
                    .post(ConfigurationController.create)
                    .delete(ConfigurationController.remove)

export default router
