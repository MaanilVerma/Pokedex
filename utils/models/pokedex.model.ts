import { Pokemon } from "./pokemon.model";

export interface PokedexProps {
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
  pokemonList: Pokemon[];
  setPokemonList: (data: Pokemon[]) => void;
  pokemonAmount: number;
  setPokemonAmount: (value: number) => void;
  error: boolean;
  loading: boolean;
  setLoading: (value: boolean) => void;
  page: number;
  setPage: (value: number) => void;
  showPagination: boolean;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  searchBarRef: React.MutableRefObject<HTMLDivElement>;
}
