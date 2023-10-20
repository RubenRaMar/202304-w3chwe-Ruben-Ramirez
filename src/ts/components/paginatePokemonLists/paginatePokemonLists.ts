let maximumPokemons = 0;

export const seeMorePokemons = () => {
  maximumPokemons += 1;
  return maximumPokemons;
};

export const seeFewerPokemons = () => {
  maximumPokemons -= 1;
  return maximumPokemons;
};
