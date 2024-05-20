import ComponentQuery from "./query.type";
import { FullPartialConfig } from "../../configurations/partial/parcialConfigTypes";

export function convertConfigurationToQueryType(configuration: FullPartialConfig): ComponentQuery {
    const query: ComponentQuery = {
        socket: undefined,
        formFactor: undefined,
        ramSlots: undefined,
        ramType: undefined,
        gpuInterface: undefined,
        storageBusType: undefined,
        powerIO: undefined
    }
    if (configuration.motherboard) {
        query.socket = configuration.motherboard.socket
        query.formFactor = configuration.motherboard.formFactor
        query.ramSlots = configuration.motherboard.ramSlots
        query.ramType = configuration.motherboard.ramType
        query.gpuInterface = configuration.motherboard.gpuInterface
        query.storageBusType = configuration.motherboard.stroageBusType
    }
    if (configuration.gpu) {
        query.gpuInterface = configuration.gpu.interface,
        query.powerIO = configuration.gpu.power
    }
    if (configuration.pcCase) {
        query.formFactor = configuration.pcCase.formFactor
    }
    if (configuration.powerSupply) {
        query.powerIO = configuration.powerSupply.powerOutput
    }
    if (configuration.processor) {
        query.socket = configuration.processor.socket
    }
    if (configuration.rams.length > 0) {
        query.ramType = configuration.rams[0].memoryType
    }
    if (configuration.storages.length > 0) {
        query.storageBusType = configuration.storages[0].busType
    }
    return query;
}