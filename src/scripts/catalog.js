
const contentElement = document.querySelector(".container")

export const Catalog = (harvestedPlantsArray) => {
    for (const plant of harvestedPlantsArray ) {
        contentElement.innerHTML += `
        <section class="plant">${plantObj.name}</section>
        `
    }
}
