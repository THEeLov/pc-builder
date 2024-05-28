import express from "express"
import { RAMController } from "../controller/rams.controller"

const router = express.Router()

router.route("/").post(RAMController.create).get(RAMController.getMany)

router.route("/:id").put(RAMController.update)
        .get(RAMController.getSingle)
        .delete(RAMController.remove)

export default router