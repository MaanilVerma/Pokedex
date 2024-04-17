import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    "HomeButton ."
    "SearchFilter SearchField";
  align-items: end;
  row-gap: 1.5rem;
  column-gap: 2rem;
  margin: 4.5rem 0;
  border-bottom: 1px solid #24293f;
  padding-bottom: 2.19rem;

  @media (max-width: 56.25rem) {
    grid-template-columns: 1fr auto;

    grid-template-areas:
      "SearchFilter HomeButton"
      "SearchField SearchField";
  }

  @media (max-width: 42.5rem) {
    grid-template-columns: 1fr;

    grid-template-areas:
      "HomeButton HomeButton"
      "SearchFilter SearchFilter"
      "SearchField SearchField";
  }

  @media (max-width: 31.25rem) {
    margin: 3.5rem 0 3rem;
    padding-bottom: 1.5rem;
  }
`;

export const SearchFilterContainer = styled.div`
  grid-area: SearchFilter;
`;

export const SearchFilterTitle = styled.span`
  font-size: 1.5rem;
  line-height: 135%;
  font-weight: 700;
  display: block;
  margin-bottom: 1rem;
`;

export const SearchFieldContainer = styled.form`
  grid-area: SearchField;
  justify-self: end;
  width: 22.5rem;
  height: 3.5rem;
  display: flex;
  border-radius: 0.5rem;
  transition: 0.4s;

  &:hover {
    box-shadow: 0px 0px 0px 4px rgba(47, 90, 255, 0.4);
  }

  @media (max-width: 65.63rem) {
    width: 100%;
  }
`;

export const SearchFieldInputText = styled.input`
  flex: 1;
  background: none;
  border: 0.13rem solid #2f5aff;
  border-radius: 0.5rem 0 0 0.5rem;
  padding: 1rem;
  font-size: 1rem;
  line-height: 150%;
  font-weight: 400;
  color: #ffffff;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.25);
  }
`;

export const SearchButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  background: #2f5aff;
  border-radius: 0 0.5rem 0.5rem 0;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;
