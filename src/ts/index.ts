import AppComponent from "./components/AppComponent/AppComponent.js";
import PokemonListComponent from "./components/PokemonListComponent/PokemonListComponent.js";

const appElement = document.querySelector(".app");

if (appElement) {
  new AppComponent(appElement);
}

const pokedexElement = document.querySelector(".pokedex");

if (pokedexElement) {
  new PokemonListComponent(pokedexElement, 23);
}
