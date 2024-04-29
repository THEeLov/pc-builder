import { prisma } from "../../../client"
import {ConfigurationType} from '@prisma/client'
import { notFoundError, internalError } from "apps/backend/src/utils"


async function create(userId: string, type: ConfigurationType) {
    try {
        await prisma.parcialPCConfiguration.create({
            data: {
                userId,
                configurationType: type,
                totalPrice: 0
            }
        })
    }
}