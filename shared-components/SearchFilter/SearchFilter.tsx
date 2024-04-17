import { SyntheticEvent, useEffect, useState } from "react";
import Slide from "../Slide/Slide";
import { fetchPokemonByType } from "@/api-endpoints/fetchPokemonByType";
import { pokemonTypesColor } from "@/utils/constants/constants";
import { PokemonType } from "../PokemonType/PokemonType";
import {
  SearchFilterContainer,
  SearchFilterTitle,
} from "@/utils/styles/searchBar";
import { SearchFilterProps } from "@/utils/models/search.model";

const SearchFilter = (props: SearchFilterProps) => {
  const [selectedType, setSelectedType] = useState("");

  const handleClick = async (e: SyntheticEvent) => {
    const typeName = (e.currentTarget as HTMLButtonElement).value;
    setSelectedType(typeName);
    props.setPokemonAmount(9);
    props.setLoading(true);
    props.setPokemonList(await fetchPokemonByType(typeName));
    props.setLoading(false);
    props.setShowPagination(false);
  };

  useEffect(() => {
    if (selectedType) {
      (async () => {
        props.setDisabledButton(true);
        props.setPokemonList(
          await fetchPokemonByType(selectedType, props.pokemonAmount)
        );
        props.setDisabledButton(false);
      })();
    }
  }, [props.pokemonAmount]);

  return (
    <SearchFilterContainer>
      <SearchFilterTitle>Search by Types</SearchFilterTitle>
      <Slide>
        {pokemonTypesColor?.map(({ name }) => (
          <PokemonType
            key={name}
            type={name}
            tabIndex={true}
            handleClick={handleClick}
          />
        ))}
      </Slide>
    </SearchFilterContainer>
  );
};

export default SearchFilter;
