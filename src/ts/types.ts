export interface PokemonResponseStructure {
  results: PokemonIdStructure[];
}

export interface PokemonIdStructure {
  name: string;
  url: string;
}
