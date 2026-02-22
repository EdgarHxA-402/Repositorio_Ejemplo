const container = document.getElementById("pokemon-container");

//cantidad de pokemones a mostrar
const TOTAL_POKEMON = 150;
async function cargarPokemon() { 

for (let i = 1; i <= TOTAL_POKEMON; i++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const data = await response.json();

    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    card.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${data.name}">
        <div class="pokemon-name">${data.name.toUpperCase()}</div>
    `;
    container.appendChild(card);
}
}

cargarPokemon();