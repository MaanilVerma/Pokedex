import styled from "styled-components";

export const Pagination = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;

  li:first-child {
    margin-right: 1rem;
  }

  li:last-child {
    margin-left: 1rem;
  }
`;

export const PaginationButton = styled.button<{
  selected?: boolean;
  navigation?: string;
}>`
  width: ${(props) => (props.navigation === "true" ? "2rem" : "2.5rem")};
  height: ${(props) => (props.navigation === "true" ? "2rem" : "2.5rem")};
  background: ${(props) => (props.selected ? "#ee8328" : "none")};
  border: ${(props) =>
    props.navigation === "true" ? "none" : "0.13rem solid #fff;"};
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1;
  font-weight: 700;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export const Ellipsis = styled.span`
  display: block;
  padding: 0.75rem 0;
  font-size: 1rem;
  line-height: 1;
  font-weight: 700;
  color: #fff;
`;
