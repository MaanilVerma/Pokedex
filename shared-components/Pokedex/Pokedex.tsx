import UsePagination from "../Pagination/Pagination";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import {
  PokeDexButtonContainer,
  PokeDexWrapper,
  PokemonList,
} from "@/utils/styles/pokeDex";
import Loading from "../Loader/Loader";
import { AddIcon } from "@/public/static/images/AddIcon";
import { UpArrow } from "@/public/static/images/UpArrow";
import PokemonCard from "../PokemonCard/PokemonCard";
import { PokedexProps } from "@/utils/models/pokedex.model";

const Pokedex = (props: PokedexProps) => {
  if (props.error) return <ErrorMessage />;
  else
    return (
      <PokeDexWrapper>
        <div className="main-container">
          {props.loading ? (
            <Loading />
          ) : (
            <PokemonList>
              {props?.pokemonList?.map((pokemon) => (
                <PokemonCard
                  key={pokemon?.id}
                  pokemon={pokemon}
                  setModal={props?.setModal}
                  setPokemonData={props?.setPokemonData}
                />
              ))}
            </PokemonList>
          )}
          {props.pokemonList.length > 1 &&
            props.loading === false &&
            props.showPagination === true && (
              <UsePagination
                setPokemonList={props.setPokemonList}
                setLoading={props.setLoading}
                searchBarRef={props.searchBarRef}
                page={props.page}
                setPage={props.setPage}
              />
            )}
          {props.pokemonList.length > 1 &&
            props.loading === false &&
            props.showPagination === false && (
              <PokeDexButtonContainer>
                {props.pokemonAmount < 54 && (
                  <button
                    className="button"
                    onClick={() =>
                      props.setPokemonAmount(props.pokemonAmount + 9)
                    }
                    disabled={props.disabledButton ? true : false}
                  >
                    <AddIcon />
                    Show more Pokemon
                  </button>
                )}

                <button
                  className="button"
                  onClick={() => {
                    window.scrollTo({
                      top: props.searchBarRef.current.offsetTop - 56,
                    });
                  }}
                >
                  <UpArrow />
                </button>
              </PokeDexButtonContainer>
            )}
        </div>
      </PokeDexWrapper>
    );
};

export default Pokedex;
