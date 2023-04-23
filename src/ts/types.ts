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
  stats: StatStructure[];
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

interface StatStructure {
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
  url: Promise<void>;
}
