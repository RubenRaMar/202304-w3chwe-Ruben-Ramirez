let maximumPokemons = 23;

export const seeMorePokemons = () => {
  maximumPokemons += 23;
  return maximumPokemons;
};

export const seeFewerPokemons = () => {
  maximumPokemons -= 23;
  return maximumPokemons;
};
