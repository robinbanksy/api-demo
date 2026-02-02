const search = document.querySelector(".search");
const button = document.querySelector(".search-button");
const sprite = document.querySelector(".sprite");

async function getPokemon(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = await response.json();

    sprite.src = data.sprites.front_default;
    sprite.style.display = "block"
  
}

button.addEventListener("click", function () {
    console.log("Success!");
    getPokemon(search.value);
});

sprite.style.width = "200px";
