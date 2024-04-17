import { SyntheticEvent, useState } from "react";

import { fetchPokemon } from "@/api-endpoints/fetchPokemon";
import { SearchIcon } from "@/public/static/images/SearchIcon";
import { Pokemon } from "@/utils/models/pokemon.model";
import {
  SearchButton,
  SearchFieldContainer,
  SearchFieldInputText,
} from "@/utils/styles/searchBar";

type SearchFieldProps = {
  setPokemonList: (data: Pokemon[]) => void;
  setError: (value: boolean) => void;
  setLoading: (value: boolean) => void;
};

const SearchField = (props: SearchFieldProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    props.setLoading(true);
    const requestPokemon = await fetchPokemon(inputValue.toLowerCase());

    requestPokemon?.response?.ok
      ? props.setPokemonList([requestPokemon?.data!])
      : props.setError(requestPokemon.error);

    props.setLoading(false);
    setInputValue("");
  };

  return (
    <SearchFieldContainer onSubmit={handleSubmit}>
      <SearchFieldInputText
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search Pokémon"
        required
      />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchFieldContainer>
  );
};

export default SearchField;
