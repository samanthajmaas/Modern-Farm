let allPlantsInField = []

export const addPlant = (seedObj) => {
    if (Array.isArray(seedObj)) {
        for (const type of seedObj){
            allPlantsInField.push(type)
        }
    } else {
        allPlantsInField.push(seedObj)
    }
}

export const usePlants = () => {
    return allPlantsInField.slice()
}