import express from "express"
import StorageController from "../controller/storage.controller"

const router = express.Router()

router.route("/").post(StorageController.create).get(StorageController.getMany)

router.route("/:id").put(StorageController.update).get(StorageController.getSingle).delete(StorageController.remove)

export default router
