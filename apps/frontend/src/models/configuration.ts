import { Component } from "./components"

export type PartialConfig = {
    id: string
    configurationType: string
    mothderboard?: Component
    processor?: Component
    rams: Component[]
    gpu?: Component
    storages: Component[]
    powerSupply?: Component
    pcCase?: Component
}

export type PartialConfigCreate = {
  configurationType: string,
}

type ObjectWithId = {
  id: "string"
}

export type PartialConfigEdit = {
  motherboardId?: string
  processorId?: string
  gpuId?: string
  powerSupplyId?: string
  PCCaseId?: string
  rams?: ObjectWithId[]
  storages?: ObjectWithId[]
}
