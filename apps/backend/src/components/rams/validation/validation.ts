import z from "zod"
import { component } from "../../base/validation/validation"

const computerType = z.enum(["DESKTOP", "LAPTOP"])
