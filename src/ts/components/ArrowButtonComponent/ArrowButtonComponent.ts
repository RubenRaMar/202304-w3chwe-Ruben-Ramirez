import ButtonComponent from "../ButtonComponent/ButtonComponent.js";
import PokemonListComponent from "../PokemonListComponent/PokemonListComponent.js";
import { seeMorePokemons } from "../paginatePokemonLists/paginatePokemonLists.js";

class ArrowButtonComponent extends ButtonComponent {
  constructor(parentElement: Element, text: string, className: string) {
    super(parentElement, className, text);
  }

  eventListener(paginatePokemonLists: () => number): void {
    this.element.addEventListener("click", () => {
      const pokedexElement = document.querySelector(".pokedex");
      const cardList = document.querySelector(".card-list");

      const maximumPokemons = paginatePokemonLists();

      if (pokedexElement) {
        if (maximumPokemons < 23) {
          return seeMorePokemons();
        }

        new PokemonListComponent(pokedexElement, maximumPokemons);
        cardList?.remove();
      }
    });
  }
}
export default ArrowButtonComponent;
