import ArrowButtonComponent from "../ArrowButtonComponent/ArrowButtonComponent.js";
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
      <ul class="arrows-contanier">
        <li class="arrow-left"></li>
        <li class="arrows-contanier__displayed-cards">24/500</li>
        <li class="arrow-right"></li>
      </ul>
    </section>
    `;

    const arrowLeft = this.element.querySelector(".arrow-left")!;
    const arrowRight = this.element.querySelector(".arrow-right")!;

    new ArrowButtonComponent(
      arrowLeft,
      `<i class="fa-solid fa-left-long"></i>`,
      "arrows-contanier__left button"
    );

    new ArrowButtonComponent(
      arrowRight,
      `<i class="fa-solid fa-right-long"></i>`,
      "arrows-contanier__Rigth button"
    );
  }
}

export default AppComponent;
