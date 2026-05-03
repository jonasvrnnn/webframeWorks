export interface Pokemon {
  name: string;
  url: string;
}

export interface PokedexResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}
export interface LimitProp {
  limit: number;
}
