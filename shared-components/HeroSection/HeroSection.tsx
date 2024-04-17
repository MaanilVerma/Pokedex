import imgSrc from "../../public/static/images/img-charizard-min.png";
import {
  CharizardData,
  CharizardDescription,
  CharizardImg,
  CharizardName,
  CharizardNumber,
  CharizardTypes,
  Divider,
  HeroSectionContainer,
  HeroSectionContent,
  MoreDetailsButton,
} from "@/utils/styles/heroSection";
import { Pokemon } from "@/utils/models/pokemon.model";
import { fetchPokemon } from "@/api-endpoints/fetchPokemon";

import { PokemonType } from "../PokemonType/PokemonType";
import Header from "../Header/Header";
import Waves from "../Waves/Waves";
import { BoltIcon } from "@/public/static/images/BoltIcon";
import { DividerFire } from "@/public/static/images/DividerFire";
import ScrollDownIcon from "../ScrollBelowIndicator/ScrollBelowIndicator";

type HeroSectionProps = {
  setModal: (value: boolean) => void;
  setPokemonData: (data: Pokemon | null) => void;
};

const HeroSection = ({ setModal, setPokemonData }: HeroSectionProps) => {
  const handleClick = async () => {
    const { data } = await fetchPokemon("charizard");
    setPokemonData(data);
    setModal(true);
  };

  return (
    <>
      <HeroSectionContainer>
        <Header />
        <div className="main-container hero-section">
          <HeroSectionContent>
            <CharizardData>
              <CharizardNumber>#006</CharizardNumber>
              <CharizardTypes>
                <PokemonType type={"fire"} tabIndex={false} />
                <PokemonType type={"flying"} tabIndex={false} />
              </CharizardTypes>
              <CharizardName>Charizard</CharizardName>
              <CharizardDescription>
                Charizard resembles a large traditional European dragon. Despite
                the similarity, Charizard is explicitly a Pokémon from Fire and
                Flying types, and not a Dragon type except in its "Mega
                Charizard X"; However, it can learn type attacks Dragon.
              </CharizardDescription>
              <MoreDetailsButton onClick={handleClick}>
                <BoltIcon />
                More details
              </MoreDetailsButton>
            </CharizardData>

            <Divider>
              <DividerFire />
            </Divider>

            <CharizardImg>
              <img
                src={imgSrc.src}
                width="488"
                height="528"
                alt="Charizard Picture"
              />
            </CharizardImg>
          </HeroSectionContent>
        </div>

        <Waves />
      </HeroSectionContainer>
      <ScrollDownIcon />
    </>
  );
};

export default HeroSection;
