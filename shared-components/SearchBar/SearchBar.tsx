import SearchFilter from "../SearchFilter/SearchFilter";
import SearchField from "../SearchField/SearchField";

import { SearchBarContainer } from "@/utils/styles/searchBar";
import HomeButton from "../HomeButton/HomeButton";
import { SearchBarProps } from "@/utils/models/search.model";

const SearchBar = (props: SearchBarProps) => {
  return (
    <div className="main-container" ref={props.searchBarRef}>
      <SearchBarContainer>
        <HomeButton
          setPokemonList={props.setPokemonList}
          setLoading={props.setLoading}
          setPage={props.setPage}
          setShowPagination={props.setShowPagination}
          disabledButton={props.disabledButton}
          setDisabledButton={props.setDisabledButton}
        />
        <SearchFilter
          setPokemonList={props.setPokemonList}
          pokemonAmount={props.pokemonAmount}
          setPokemonAmount={props.setPokemonAmount}
          setLoading={props.setLoading}
          setShowPagination={props.setShowPagination}
          setDisabledButton={props.setDisabledButton}
        />
        <SearchField
          setPokemonList={props.setPokemonList}
          setError={props.setError}
          setLoading={props.setLoading}
        />
      </SearchBarContainer>
    </div>
  );
};

export default SearchBar;
