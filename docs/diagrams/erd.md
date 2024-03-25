@startuml

class ComponentDTO {
  +componentId: int
  +type: string
  +price: float
}

class MotherboardDTO {
  +socket: string
  +formFactor: string
  +ramSlots: int
}

MotherboardDTO --|> ComponentDTO

class ProcessorDTO {
  +architecture: string
  +cores: int
  +threads: int
}
ProcessorDTO --|> ComponentDTO

class GraphicsCardDTO {
  +memory: int
  +powerConnector: string
  +interface: string
}
GraphicsCardDTO --|> ComponentDTO

class RAMDTO {
  +memoryType: string
  +size: int
}
RAMDTO --|> ComponentDTO

class StorageDTO {
  +storageType: string
  +capacity: int
}
StorageDTO --|> ComponentDTO

class PowerSupplyDTO {
  +powerOutput: int
  +efficiencyRating: string
}
PowerSupplyDTO --|> ComponentDTO

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
  +userType: string
}

PCConfigurationDTO "1" o-- "" ComponentDTO : contains
UserDTO "1" -- "0.." PCConfigurationDTO : creates

@endumlc