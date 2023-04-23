export interface PokemonResponseStructure {
  results: PokemonIdStructure[];
}

export interface PokemonIdStructure {
  name: string;
  url: string;
}

export interface PokemonDataStructure {
  name: string;
  id: number;
  height: number;
  weight: number;
  base_experience: number;
  sprites: SpritesStructure;
  abilities: AbilitiesStructure[];
  types: TypesStructure[];
  stats: StatsStructure[];
}

interface SpritesStructure {
  other: OtherStructure;
}

interface OtherStructure {
  dream_world: DreamWorldStructure;
}

interface DreamWorldStructure {
  front_default: string;
}

interface StatsStructure {
  base_stat: number;
  stat: StatStructure;
}

interface StatStructure {
  name: string;
  url: string;
}

interface TypesStructure {
  type: TypeStructure;
}

interface TypeStructure {
  name: string;
  url: string;
}

interface AbilitiesStructure {
  ability: AbilityStructure;
}

interface AbilityStructure {
  name: string;
  url: string;
}
