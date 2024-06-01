//POST /configurations/partial/{userId}

import { ConfigurationType } from "@prisma/client"

//Takyto datovy typ v tele:

type PartialConfigCreate = {
    configurationType: ConfigurationType //ENUM bud GAMING, OFFICE ....
}

//Návrat:

// Cely model ParcialPCConfig v prisma scheme. Všetko odtial.

//GET /configurations/partial/{userId}

//Návrat:

// Cely model ParcialPCConfig v prisma scheme. Všetko odtial.

//PUT /configurations/partial/{userId}

type ObjectWithId = {
    id: "string"
}

//TOTO SA POSIELA:

type updateObject = {
    configurationType?: ConfigurationType,
    motherboardId?: string,
    processorId?: string,
    gpuId?: string,
    powerSupplyId?: string,
    PCCaseId?: string,
    rams?: ObjectWithId[],
    storages?: ObjectWithId[],
}

//TOTO PRIDE NASPAŤ:

// Cely model ParcialPCConfig v prisma scheme. Všetko odtial.
