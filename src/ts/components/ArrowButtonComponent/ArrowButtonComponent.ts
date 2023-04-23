import ButtonComponent from "../ButtonComponent/ButtonComponent.js";

class ArrowButtonComponent extends ButtonComponent {
  constructor(parentElement: Element, text: string, className: string) {
    super(parentElement, className, text);
  }

  eventListener(callback: void): void {
    this.element.addEventListener("click", () => callback);
  }
}

export default ArrowButtonComponent;
