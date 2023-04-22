import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "container", "div");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <header class="header">
      <img class="header__logo" src="img/pokemon-logo.svg" alt="Logo">
      <nav class="header__navbar">
      <ul class="menu">
        </ul>
      </nav>
    </header>
    <section class="pokedex">
      <h2 class="pokedex__title">Pokédex</h2>
      <p class="pokedex__info">Choose your favorite Pokémon</p>
    </section>
    `;
  }
}

export default AppComponent;
