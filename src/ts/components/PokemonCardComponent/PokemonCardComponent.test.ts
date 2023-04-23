/* eslint-disable @typescript-eslint/naming-convention */
import { type PokemonDataStructure } from "../../types";
import PokemonCardComponent from "./PokemonCardComponent.js";

let container: Element;

beforeEach(() => {
  container = document.createElement("div");
});

describe("Given a PokemonCardComponent component", () => {
  describe("When it receives the text 'Favorite'", () => {
    test("Then it should show a button with the text 'Favorite", () => {
      const bulbasaur: PokemonDataStructure = {
        id: 1,
        name: "bulbasaur",
        height: 23,
        weight: 7,
        base_experience: 54,
        abilities: [{ ability: { name: "overgrow", url: "abilityData" } }],
        sprites: { other: { dream_world: { front_default: "image" } } },
        types: [{ type: { name: "grass", url: "typeData" } }],
        stats: [{ base_stat: 45, stat: { name: "hp", url: "statData" } }],
      };

      new PokemonCardComponent(container, bulbasaur);

      const pokemonName = container.querySelector("h2");

      expect(pokemonName?.textContent).toBe(bulbasaur.name);
    });
  });
});
