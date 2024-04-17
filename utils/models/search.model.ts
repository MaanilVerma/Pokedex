import { Pokemon } from "./pokemon.model";

export interface SearchBarProps {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
  setPage: (value: number) => void;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
}

export interface SearchFilterProps {
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  setLoading: (value: boolean) => void;
  setShowPagination: (value: boolean) => void;
  setDisabledButton: (value: boolean) => void;
}
