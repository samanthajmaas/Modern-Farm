import {usePlants} from "./field.js"

let harvestedPlants = []

export const harvestPlants = (plantArray) => {
for (const seed of plantArray) {
   if (plantObj.type === "Corn") {
    for (let j = 0; j < plantObj.output/2; j++) {
        harvestedPlants.push(seed)
    }

    } else {
        for (let i = 0; i < plantObj.output; i++) {
            harvestedPlants.push(seed)
        }
    }
    return harvestedPlants
}
}
