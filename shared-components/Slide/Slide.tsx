import { LeftArrow } from "@/public/static/images/LeftArrow";
import { RightArrow } from "@/public/static/images/RightArrow";
import {
  SlideButton,
  SlideContainer,
  SlideContent,
  SlideWrapper,
} from "@/utils/styles/slide";
import { ReactNode, SyntheticEvent, useState } from "react";
import { useMedia } from "../../hooks/useMedia";

type SlideProps = {
  children: ReactNode;
};

const Slide = ({ children }: SlideProps) => {
  const [slidePosition, setSlidePosition] = useState(0);
  const mobile = useMedia("(max-width: 31.25rem)");

  const slideNavigation = ({ currentTarget }: SyntheticEvent) => {
    const direction = (currentTarget as HTMLButtonElement).value;

    direction === "next"
      ? setSlidePosition(slidePosition <= -87.5 ? -87.5 : slidePosition - 12.5)
      : setSlidePosition(slidePosition === 0 ? 0 : slidePosition + 12.5);
  };

  return (
    <SlideContainer>
      {!mobile && (
        <SlideButton
          value="prev"
          onClick={slideNavigation}
          disabled={slidePosition === 0 && true}
        >
          <LeftArrow />
        </SlideButton>
      )}
      <SlideWrapper>
        <SlideContent slideposition={slidePosition}>{children}</SlideContent>
      </SlideWrapper>
      {!mobile && (
        <SlideButton
          value="next"
          onClick={slideNavigation}
          disabled={slidePosition === -62.5 && true}
        >
          <RightArrow />
        </SlideButton>
      )}
    </SlideContainer>
  );
};

export default Slide;
