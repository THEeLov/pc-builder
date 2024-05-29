import { prisma } from "../../../client"
import { DbResult } from "../../../../types"
import handleError from "../../../utils"
import { ComponentType, Component } from "@prisma/client"
import { Result } from "@badrap/result"

async function getMany(type: ComponentType | undefined): DbResult<Component[]> {
    try {
        const components = await prisma.component.findMany({
            where: {
                componentType: type,
            },
        })
        return Result.ok(components)
    } catch (e) {
        return handleError(e, "getMany components")
    }
}

const ComponentRepo = {
    getMany,
}

export default ComponentRepo
