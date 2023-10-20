import {
  type PokemonDataStructure,
  type PokemonIdStructure,
  type PokemonResponseStructure,
} from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=24&offset=";

class PokemonListComponent extends Component {
  private pokemons: PokemonIdStructure[] = [];
  private pokemonData: PokemonDataStructure[] = [];
  private length: number;

  constructor(parentElement: Element, private readonly maximumPokemons = 0) {
    super(parentElement, "card-list", "ul");

    (async () => {
      await this.getPokemons();
      await this.getPokemonData();

      this.renderHtml();
    })();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(`${apiUrl}${this.maximumPokemons * 24}`);
    const pokemons = (await response.json()) as PokemonResponseStructure;

    this.pokemons = pokemons.results;
    this.length = pokemons.count;
  }

  async getPokemonData(): Promise<void> {
    const pokemonDataPromises = this.pokemons.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const pokemonData = (await response.json()) as PokemonDataStructure;
      return pokemonData;
    });

    this.pokemonData = await Promise.all(pokemonDataPromises);
  }

  renderHtml(): void {
    this.pokemonData.forEach((data) => {
      new PokemonCardComponent(this.element, data);
    });

    const displayedCards = document.querySelector(
      ".arrows-contanier__displayed-cards"
    )!;

    displayedCards.textContent = `${this.maximumPokemons + 1}/${Math.ceil(
      this.length / 24
    )}`;
  }
}

export default PokemonListComponent;
