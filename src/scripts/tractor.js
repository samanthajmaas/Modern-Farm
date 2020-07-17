import { createAsparagus } from "./seeds/asparagus.js"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import{createWheat} from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (plantingArray) => {
 for (const array of plantingArray) {
    for (const plantType of array){
     if ( plantType === "Asparagus") {
         const asparagusSeed = createAsparagus()
         addPlant(asparagusSeed)
     } else if (plantType === "Corn") {
         const cornSeed= createCorn()
         addPlant(cornSeed)
     } else if (plantType === "Potato") {
         const potatoSeed= createPotato()
         addPlant(potatoSeed)
     } else if (plantType === "Soybean") {
         const soybeanSeed =createSoybean()
         addPlant(soybeanSeed)
     } else if (plantType === "Sunflower") {
         const sunflowerSeed = createSunflower()
         addPlant(sunflowerSeed) 
     } else if (plantType === "Wheat") {
         const wheatSeed =createWheat()
         addPlant(wheatSeed)
     }
 }
}
}

