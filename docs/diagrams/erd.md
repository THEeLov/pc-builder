@startuml

class ComponentDTO {
  +componentId: int
  +componentName: string
  +type: string
  +price: float
  +manufacturer: string
}

class MotherboardDTO {
  +socket: string
  +formFactor: string
  +ramSlots: int
  +ramType: string
  +graphicsInterface: string
  +busType: string
}

MotherboardDTO --|> ComponentDTO

class ProcessorDTO {
  +architecture: string
  +cores: int
  +threads: int
  +bits: int
  +socket: string
}
ProcessorDTO --|> ComponentDTO

class GraphicsCardDTO {
  +memory: int
  +powerConnector: string
  +interface: string
  powerRequirement: int
}
GraphicsCardDTO --|> ComponentDTO

class RAMDTO {
  +memoryType: string
  +size: int
  computerType: string
}
RAMDTO --|> ComponentDTO

class StorageDTO {
  +storageType: string
  +capacity: int
  +busType: string
}
StorageDTO --|> ComponentDTO

class PowerSupplyDTO {
  +powerOutput: int
  +efficiencyRating: string
  +caseType: string
}
PowerSupplyDTO --|> ComponentDTO

class PCCaseDTO {
  +caseType: string
}

PCCaseDTO --|> ComponentDTO

class PCConfigurationDTO {
  +configurationId: int
  +userId: int
  +totalPrice: float
  +components: List<ComponentDTO>
}

class UserDTO {
  +userId: int
  +name: string
  +email: string
  +password: string
  +userType: string
}

@endumlc