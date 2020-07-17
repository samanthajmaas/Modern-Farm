
const contentElement = document.querySelector(".container")

export const Catalog = (harvestedPlantsArray) => {
    for (const plantObj of harvestedPlantsArray ) {
        contentElement.innerHTML += `
        <section class="plant">${plantObj.type}</section>
        `
    }
}
