import { PokemonLogo } from "@/public/static/images/PokemonLogo";
import { HeaderContainer } from "@/utils/styles/header";
import { SocialMedia } from "../SocialMedia/SocialMedia";

const Header = () => {
  return (
    <div className="main-container">
      <HeaderContainer>
        <PokemonLogo />
        <SocialMedia />
      </HeaderContainer>
    </div>
  );
};

export default Header;
