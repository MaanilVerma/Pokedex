import React from "react";

import { CloseIcon } from "@/public/static/images/CloseIcon";
import { RulerIcon } from "@/public/static/images/RulerIcon";
import { WeightIcon } from "@/public/static/images/WeightIcon";
import { pokemonTypesColor } from "@/utils/constants/constants";
import { Pokemon } from "@/utils/models/pokemon.model";
import {
  CloseButton,
  PokemonModalWrapper,
  PokemonModal as Modal,
  PokemonModalData,
  PokemonModalOverlay,
  PokemonModalImg,
  PokemonModalNumber,
  PokemonModalName,
  PokemonModalType,
  PokemonModalFeatures,
  PokemonModalWeight,
  PokemonModalHeight,
  PokemonModalDivider,
  PokemonModalStats,
  StatsTitle,
  StatsList,
  ProgressBar,
  ProgressBarFill,
} from "@/utils/styles/pokemonModal";
import { useMedia } from "../../hooks/useMedia";
import { PokemonType } from "../PokemonType/PokemonType";
import SkeletonLoading from "../Skeleton/Skeleton";
import { Pokeball } from "@/public/static/images/Pokeball";

type PokemonModalProps = {
  setModal: (value: boolean) => void;
  pokemonData: Pokemon;
};

export const PokemonModal = ({ setModal, pokemonData }: PokemonModalProps) => {
  const mobile = useMedia("(max-width: 980px)");

  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`;

  const [{ color }] = pokemonTypesColor?.filter(
    (type) => pokemonData?.types[0]?.type?.name?.indexOf(type?.name) !== -1
  );

  const formatStatName = (statName: string) => {
    switch (statName) {
      case "hp":
        return "HP";
      case "attack":
        return "Attack";
      case "defense":
        return "Defense";
      case "special-attack":
        return "Sp. Atk";
      case "special-defense":
        return "Sp. Def";
      case "speed":
        return "Speed";
    }
  };

  const formatPokemonId = (id: number) => {
    if (id < 10) return `#00${id}`;
    else if (id >= 10 && id < 99) return `#0${id}`;
    else return `#${id}`;
  };

  const renderCloseButton = () => (
    <CloseButton onClick={() => setModal(false)} mobile={mobile!}>
      <CloseIcon />
    </CloseButton>
  );

  return (
    <PokemonModalWrapper
      onClick={(e) => e.target === e.currentTarget && setModal(false)}
    >
      <Modal>
        <PokemonModalData>
          <PokemonModalOverlay color={color} />
          <PokemonModalImg>
            <SkeletonLoading src={imgUrl} alt={pokemonData.name} />
          </PokemonModalImg>
          <PokemonModalNumber>
            {formatPokemonId(pokemonData.id)}
          </PokemonModalNumber>
          <PokemonModalName>{pokemonData.name}</PokemonModalName>
          <PokemonModalType>
            {pokemonData.types.map(({ type }) => (
              <PokemonType key={type.name} type={type.name} tabIndex={false} />
            ))}
          </PokemonModalType>
          <PokemonModalFeatures>
            <PokemonModalWeight>
              <div>
                <WeightIcon />
                <span>{`${pokemonData.weight / 10}`} kg</span>
              </div>
              <span>Weight</span>
            </PokemonModalWeight>
            <PokemonModalHeight>
              <div>
                <RulerIcon />
                <span>{`${pokemonData.height / 10}`} m</span>
              </div>
              <span>Height</span>
            </PokemonModalHeight>
          </PokemonModalFeatures>
        </PokemonModalData>

        <PokemonModalDivider>
          <Pokeball />
        </PokemonModalDivider>

        <PokemonModalStats>
          <StatsTitle>Stats</StatsTitle>
          <StatsList>
            {pokemonData.stats.map(({ stat, base_stat }) =>
              React.Children.toArray(
                <li>
                  <span>{formatStatName(stat.name)}</span>
                  <span>{base_stat}</span>
                  <ProgressBar>
                    <ProgressBarFill base_stat={base_stat}></ProgressBarFill>
                  </ProgressBar>
                </li>
              )
            )}
          </StatsList>
        </PokemonModalStats>

        {!mobile && renderCloseButton()}
      </Modal>
      {mobile && renderCloseButton()}
    </PokemonModalWrapper>
  );
};
