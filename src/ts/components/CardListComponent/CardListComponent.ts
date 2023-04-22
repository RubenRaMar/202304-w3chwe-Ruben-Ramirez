import {
  type PokemonIdStructure,
  type PokemonResponseStructure,
} from "../../types.js";
import Component from "../Component/Component.js";

const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

class CardListComponent extends Component {
  private pokemons: PokemonIdStructure[] = [];

  constructor(parentElement: Element) {
    super(parentElement, "card-list", "ul");

    (async () => this.getPokemons())();
  }

  async getPokemons(): Promise<void> {
    const response = await fetch(`${apiUrl}pokemons`);
    const pokemons = (await response.json()) as PokemonResponseStructure;

    this.pokemons = pokemons.results;

    this.renderHtml();
  }

  renderHtml(): void {
    this.pokemons.forEach((pokemon) => pokemon);
  }
}

export default CardListComponent;
