import express from 'express'
import { remove } from '../controller/just.components.controller'

const componentRouter = express.Router()

componentRouter.route("/:id").delete(remove)

export default componentRouter