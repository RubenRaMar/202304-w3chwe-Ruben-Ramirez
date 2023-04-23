import { type PokemonDataStructure } from "../../types.js";
import Component from "../Component/Component.js";

class CardComponent extends Component {
  constructor(
    parentElement: Element,
    private readonly pokemonData: PokemonDataStructure
  ) {
    super(parentElement, "card", "li");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <button class="card__favorite">
        <i class="fa-regular fa-star"></i>
    </button>
    <a href="" class="card__button">
      <span class="card__id">Nº ${this.pokemonData.id}</span>
      <h2 class="card__name">${this.pokemonData.name}</h2>
      <img class="card__image" src=${
        this.pokemonData.sprites.other.dream_world.front_default
      } alt="${this.pokemonData.name}" width="125" height="150">
      
      <div class="card__type-container">${
        this.pokemonData.types.length <= 1
          ? `<span><img class="type-container__image" src="img/${this.pokemonData.types[0].type.name}.png" alt="Type of ${this.pokemonData.types[0].type.name} element" width="35" height="42"></span>`
          : `<span><img class="type-container__image" src="img/${this.pokemonData.types[0].type.name}.png" alt="Type of ${this.pokemonData.types[0].type.name} element" width="35" height="42"></span>
             <span><img class="type-container__image" src="img/${this.pokemonData.types[1].type.name}.png" alt="Type of ${this.pokemonData.types[1].type.name} element" width="35" height="42"></span>`
      }
      </div>
    </a>
    `;
  }
}

export default CardComponent;
