"use client";
import { FooterContainer, FooterText } from "@/utils/styles/footer";
import { SocialMedia } from "../SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <div className="main-container">
      <FooterContainer>
        <FooterText>
          <span>
            Developed By{" "}
            <a
              href="https://maanilverma.netlify.app"
              target="_blank"
              style={{ color: "#ee8328" }}
            >
              Maanil Verma
            </a>
          </span>
          <span>Data taken from API - pokeapi.co</span>
        </FooterText>
        <SocialMedia />
      </FooterContainer>
    </div>
  );
};

export default Footer;
