import { GithubLogo } from "@/public/static/images/GithubLogo";
import { LinkedinLogo } from "@/public/static/images/LinkedinLogo";
import {
  SocialMediaContainer,
  SocialMediaLinks,
} from "@/utils/styles/socialMedia";

export const SocialMedia = () => {
  return (
    <SocialMediaContainer>
      <li>
        <SocialMediaLinks href="https://www.linkedin.com/in/maanilverma/">
          <LinkedinLogo />
        </SocialMediaLinks>
      </li>
      <li>
        <SocialMediaLinks href="https://github.com/MaanilVerma">
          <GithubLogo />
        </SocialMediaLinks>
      </li>
    </SocialMediaContainer>
  );
};
