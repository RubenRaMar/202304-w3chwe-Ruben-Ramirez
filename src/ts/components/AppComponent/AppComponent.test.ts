import AppComponent from "./AppComponent";

let container: Element;

beforeEach(() => {
  container = document.createElement("div");
});

describe("Given an AppComponent with no html elements inside it", () => {
  describe("When we access the innerHTML property to add children to it", () => {
    test("Then it should contain html elements inside", () => {
      new AppComponent(container).renderHtml();

      const appComponent = container.querySelector(".container");
      const header = container.querySelector(".header");
      const pokedex = container.querySelector(".pokedex");

      expect(appComponent).not.toBeNull();
      expect(header).not.toBeNull();
      expect(pokedex).not.toBeNull();
    });
  });
});
