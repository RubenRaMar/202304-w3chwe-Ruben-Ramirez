import AppComponent from "./components/AppComponent/AppComponent.js";
import CardListComponent from "./components/CardListComponent/CardListComponent.js";

const appElement = document.querySelector(".app");

if (appElement) {
  new AppComponent(appElement);
}

const pokedexElement = document.querySelector(".pokedex");

if (pokedexElement) {
  new CardListComponent(pokedexElement);
}
