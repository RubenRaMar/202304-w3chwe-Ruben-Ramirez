import ButtonComponent from "./ButtonComponent";

let container: Element;

beforeEach(() => {
  container = document.createElement("div");
});

describe("Given a ButtonComponent component", () => {
  describe("When it receives the text 'Favorite'", () => {
    test("Then it should show a button with the text 'Favorite", () => {
      const text = "Favorite";

      new ButtonComponent(container, "", text);
      const button = container.querySelector("button");

      expect(button).not.toBeNull();
      expect(button?.textContent).toBe(text);
    });
  });
});
