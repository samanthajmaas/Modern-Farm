import { createAsparagus } from "./seeds/asparagus"
import {createCorn} from "./seeds/corn.js"
import {createPotato} from "./seeds/potato.js"
import {createSoybean} from "./seeds/soybean.js"
import {createSunflower} from "./seeds/sunflower.js"
import{createWheat} from "./seeds/wheat.js"
import { addPlant } from "./field"

export const plantSeeds = (plantingArray) => {
 for (const array of plantingArray) {
    for (const seed of array){
     if ( plantObj.type === "Asparagus") {
         const asparagusSeed = createAsparagus()
         addPlant(asparagusSeed)
     } else if (plantObj.type === "Corn") {
         const cornSeed= createCorn()
         addPlant(cornSeed)
     } else if (plantObj.type === "Potato") {
         const potatoSeed= createPotato()
         addPlant(potatoSeed)
     } else if (plantObj.type === "Soybean") {
         const soybeanSeed =createSoybean()
         addPlant(soybeanSeed)
     } else if (plantObj.type === "Sunflower") {
         const sunflowerSeed = createSunflower()
         addPlant(sunflowerSeed) 
     } else if (plantObj.type === "Wheat") {
         const wheatSeed =createWheat()
         addPlant(wheatSeed)
     }
 }
}
}

