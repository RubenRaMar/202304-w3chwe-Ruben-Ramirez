import Component from "../Component/Component.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "app", "div");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.innerHTML = `
    <header class="header">
      <img class="logo" src="img/pokemon-logo.svg" alt="Logo">
      <nav class="navbar">
      <ul class="menu">
        </ul>
      </nav>
    </header>
    `;
  }
}

export default AppComponent;
