import { type ComponentStructure } from "../types";

abstract class Component implements ComponentStructure {
  element: Element;

  constructor(
    private readonly parentElement: Element,
    className: string,
    tag = "div"
  ) {
    this.element = document.createElement(tag);
    this.element.className = className;

    this.parentElement.appendChild(this.element);
  }

  abstract renderHtml(): void;
}

export default Component;
