export interface PokemonResponseStructure {
  results: PokemonIdStructure[];
}

export interface PokemonIdStructure {
  name: string;
  url: string;
}

export interface PokemonStructure {
  name: string;
  id: number;
  height: number;
  weight: number;
  experieceBase: number;
  image: ImageStructure;
  stats: StatStructure[];
  types: TypesStructure[];
  skills: SkillStructure[];
}

interface ImageStructure {
  image: Promise<string>;
}

interface StatStructure {
  baseStat: number;
  stat: StatStructure;
}

interface StatStructure {
  name: string;
}

interface TypesStructure {
  type: TypeStructure;
}

interface TypeStructure {
  name: string;
}

interface SkillStructure {
  name: string;
  info: Promise<SkillInfoStructure[]>;
}

interface SkillInfoStructure {
  name: string;
  effect: Promise<SkillInfoTextStructure[]>;
}

interface SkillInfoTextStructure {
  effect: string;
}
