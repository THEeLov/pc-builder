import ComponentQuery from "../../universal_types/query.type"
import { prisma } from "apps/backend/src/client"
import { DbResult } from "apps/backend/types"
import handleError from "apps/backend/src/utils"
import { ComponentType, Component, RAM } from "@prisma/client"
import { Result } from "@badrap/result"

async function getMany(query: ComponentQuery): DbResult<RAM[]> {
    try {
        const rams = await prisma.rAM.findMany({
            where: {
                memoryType: query.ramType,
            },
        })
        return Result.ok(rams)
    } catch (e) {
        return handleError(e, "In findMany RAMS")
    }
}
