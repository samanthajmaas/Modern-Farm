import { createPlan } from "./plan.js"
import {plantSeeds} from "./tractor.js"
import {usePlants} from "./field.js"
import {harvestPlants} from "./harvester.js"
import {Catalog} from "./catalog.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)
plantSeeds(yearlyPlan)
const arrayOfPlants = usePlants()
console.log(arrayOfPlants)
const allHarvestedPlants = harvestPlants(arrayOfPlants)
console.log(allHarvestedPlants)

Catalog(allHarvestedPlants)