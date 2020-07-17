export const harvestPlants = (plantArray) => {
let harvestedPlants = []
for (const seed of plantArray) {
   if (seed.type === "Corn") {
    for (let j = 0; j < seed.output/2; j++) {
        harvestedPlants.push(seed)
    }

    } else {
        for (let i = 0; i < seed.output; i++) {
            harvestedPlants.push(seed)
        }
    }

}
    return harvestedPlants
}
