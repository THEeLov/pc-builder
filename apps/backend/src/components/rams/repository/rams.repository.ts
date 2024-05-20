import ComponentQuery from "../../universal_types/query.type"
import { prisma } from "apps/backend/src/client"
import { DbResult } from "apps/backend/types"
import handleError from "apps/backend/src/utils"
import { Prisma, RAM } from "@prisma/client"
import { Result } from "@badrap/result"
import { CreateRAM } from "../validation/validation"


type RAMWithComponent = Prisma.RAMGetPayload<{
    include: { component: true };
  }>;

async function getMany(query: ComponentQuery): DbResult<RAM[]> {
    try {
        const rams = await prisma.rAM.findMany({
            where: {
                memoryType: query.ramType,
            },
        })
        return Result.ok(rams)
    } catch (e) {
        return handleError(e, "In getMany RAMS")
    }
}

async function create(createObj: CreateRAM): DbResult<RAMWithComponent> {
    try {
        const ram = await prisma.$transaction( async () => {
            const component = await prisma.component.create({
                data: createObj.component
            })
            const ram = await prisma.rAM.create({
                data: {
                    memoryType: createObj.memoryType,
                    capacity: createObj.capacity,
                    computerType: createObj.computerType,
                    componentId: component.id
                },
                include: {
                    component: true
                }
            })
            return ram;
        } );
        return Result.ok(ram);
    }
    catch (e) {
        return handleError(e, "Ram create")
    }
}


async function getSingle(id: number): DbResult<RAMWithComponent> {
    try {
        const ram = await prisma.rAM.findUniqueOrThrow({
            where: {
                id
            },
            include: {
                component: true
            }
        });
        return Result.ok(ram);
    }
    catch (e) {
        return handleError(e, "in RAM getSingle");
    }
}
