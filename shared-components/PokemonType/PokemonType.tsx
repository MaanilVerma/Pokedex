import { pokemonTypesColor } from "@/utils/constants/constants";
import { ErrorMessage, Type } from "@/utils/styles/pokemonType";
import { SyntheticEvent } from "react";

type PokemonTypeProps = {
  type: string;
  tabIndex: boolean;
  handleClick?: (e: SyntheticEvent) => void;
};

export const PokemonType = (props: PokemonTypeProps) => {
  const [{ name, color }] = pokemonTypesColor.filter(
    (item) => item.name === props.type
  );

  return name && color ? (
    <Type
      color={color}
      value={name}
      onClick={props.handleClick}
      tabIndex={props.tabIndex ? 0 : -1}
    >
      <img
        src={`/static/images/pokemonTypes/${name}.svg`}
        width={16}
        height={16}
        alt={name}
      />
      {name}
    </Type>
  ) : (
    <ErrorMessage>
      Oops, we couldn't find the type of this Pokémon.
    </ErrorMessage>
  );
};
