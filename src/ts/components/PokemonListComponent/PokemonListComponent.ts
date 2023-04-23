import {
  type PokemonDataStructure,
  type PokemonIdStructure,
  type PokemonResponseStructure,
} from "../../types.js";
import Component from "../Component/Component.js";
import PokemonCardComponent from "../PokemonCardComponent/PokemonCardComponent.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

class PokemonListComponent extends Component {
  private pokemons: PokemonIdStructure[] = [];
  private pokemonData: PokemonDataStructure;

  constructor(
    parentElement: Element,
    private readonly maximumPokemons: number
  ) {
    super(parentElement, "card-list", "ul");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(apiUrl);
    const pokemons = (await response.json()) as PokemonResponseStructure;

    this.pokemons = pokemons.results;
    (async () => this.getPokemonData())();
  }

  async getPokemonData(): Promise<void> {
    this.pokemons.forEach(async (pokemon, position) => {
      if (
        position >= this.maximumPokemons - 23 &&
        position <= this.maximumPokemons
      ) {
        const response = await fetch(pokemon.url);

        const pokemonData = (await response.json()) as PokemonDataStructure;

        this.pokemonData = pokemonData;

        this.renderHtml();
      }
    });
  }

  renderHtml(): void {
    new PokemonCardComponent(this.element, this.pokemonData);

    const displayedCards = document.querySelector(
      ".arrows-contanier__displayed-cards"
    )!;

    displayedCards.textContent = `${this.maximumPokemons + 1}/${
      this.pokemons.length
    }`;
  }
}

export default PokemonListComponent;
