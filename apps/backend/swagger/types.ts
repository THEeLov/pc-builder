//POST partialconfig

import { ConfigurationType } from "@prisma/client"

type PartialConfigCreate = {
    configurationType: ConfigurationType //ENUM bud GAMING, OFFICE ....
}
