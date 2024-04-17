import styled from "styled-components";

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const SlideWrapper = styled.div`
  max-width: 40rem;
  overflow: hidden;
  border: 1px solid #ee8328;
  border-radius: 8px;
  padding: 8px;

  @media (max-width: 31.25rem) {
    max-width: 100%;
    overflow-x: scroll;
    border: none;
    &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: #060b28;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #2f5aff;
      border-radius: 0.5rem;
      border: 0.25rem solid #060b28;
    }
  }
`;

export const SlideContent = styled.div<{ slideposition: number }>`
  display: flex;
  gap: 0.5rem;
  transform: translateX(${(props) => `${props.slideposition}rem`});
  transition: 0.4s;
`;

export const SlideButton = styled.button`
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 2rem;
    height: 2rem;
  }

  &[disabled] {
    opacity: 0.5;
    cursor: default;
  }
`;
