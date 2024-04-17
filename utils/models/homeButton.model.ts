import { Pokemon } from "./pokemon.model";

export interface HomeButtonProps {
  setPokemonList: (data: Pokemon[]) => void;
  setLoading: (value: boolean) => void;
  setPage: (value: number) => void;
  setShowPagination: (value: boolean) => void;
  disabledButton: boolean;
  setDisabledButton: (value: boolean) => void;
}
