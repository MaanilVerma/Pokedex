import { Pokemon } from "@/utils/models/pokemon.model";
import { pokemonTypesColor } from "@/utils/constants/constants";
import { fetchPokemon } from "@/api-endpoints/fetchPokemon";
import {
  MoreDetailsButton,
  PokemonCardContainer,
  PokemonCardOverlay,
  PokemonCardType,
  PokemonFeatures,
  PokemonHeight,
  PokemonImg,
  PokemonName,
  PokemonNumber,
  PokemonWeight,
} from "@/utils/styles/pokemonCard";
import SkeletonLoading from "../Skeleton/Skeleton";
import { PokemonType } from "../PokemonType/PokemonType";
import { WeightIcon } from "@/public/static/images/WeightIcon";
import { RulerIcon } from "@/public/static/images/RulerIcon";
import { BoltIcon } from "@/public/static/images/BoltIcon";

type PokemonCardProps = {
  pokemon: Pokemon;
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon) => void;
};

const PokemonCard = (props: PokemonCardProps) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${props.pokemon.id}.png`;

  const [{ color }] = pokemonTypesColor?.filter(
    (type) => props?.pokemon?.types[0]?.type?.name?.indexOf(type?.name) !== -1
  );

  const handleClick = async () => {
    const requestPokemon = await fetchPokemon(props?.pokemon?.name);
    props.setPokemonData(requestPokemon?.data!);
    props.setModal(true);
  };

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  return (
    <PokemonCardContainer>
      <PokemonCardOverlay color={color} />
      <PokemonImg>
        <SkeletonLoading src={imgUrl} alt={props?.pokemon?.name} />
      </PokemonImg>
      <PokemonNumber>{formatPokemonId(props?.pokemon?.id)}</PokemonNumber>
      <PokemonName>{props?.pokemon?.name}</PokemonName>
      <PokemonCardType>
        {props?.pokemon?.types?.map(({ type }) => (
          <PokemonType key={type.name} type={type.name} tabIndex={false} />
        ))}
      </PokemonCardType>
      <PokemonFeatures>
        <PokemonWeight>
          <div>
            <WeightIcon />
            <span>{`${props.pokemon.weight / 10}`} kg</span>
          </div>
          <span>Weight</span>
        </PokemonWeight>
        <PokemonHeight>
          <div>
            <RulerIcon />
            <span>{`${props.pokemon.height / 10}`} m</span>
          </div>
          <span>Height</span>
        </PokemonHeight>
      </PokemonFeatures>
      <MoreDetailsButton color={color} onClick={handleClick}>
        <BoltIcon />
        More Details
      </MoreDetailsButton>
    </PokemonCardContainer>
  );
};

export default PokemonCard;
