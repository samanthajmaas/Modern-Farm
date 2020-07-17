import { createPlan } from "./plan.js"
import {plantSeeds} from "./tractor.js"
import {usePlants} from "./field.js"
import {harvestPlants} from "./harvester.js"

const yearlyPlan = createPlan()
console.log(yearlyPlan)
const arrayOfPlants = usePlants()
plantSeeds(arrayOfPlants)
const allHarvestedPlants = harvestPlants(arrayOfPlants)
console.log(allHarvestedPlants)
