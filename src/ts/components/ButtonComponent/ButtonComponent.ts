import Component from "../Component/Component.js";

class ButtonComponent extends Component {
  constructor(
    parentElement: Element,
    className: string,
    private readonly text: string
  ) {
    super(parentElement, className, "button");

    this.renderHtml();
  }

  renderHtml(): void {
    this.element.textContent = this.text;
  }
}

export default ButtonComponent;
