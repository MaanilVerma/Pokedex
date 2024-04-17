import styled from "styled-components";

export const SocialMediaContainer = styled.ul`
  display: flex;
  gap: 0.5rem;
`;

export const SocialMediaLinks = styled.a.attrs({ target: "_blank" })`
  display: block;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
