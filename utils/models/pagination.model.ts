import { Pokemon } from "./pokemon.model";

export interface UsePaginationProps {
  setPokemonList: (data: Pokemon[]) => void;
  setLoading: (value: boolean) => void;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
  page: number;
  setPage: (value: number) => void;
}
