import imgSrc from "../../public/static/images/img-pikachu-sad-min.png";
import { ErrorMessageContainer, ErrorText } from "@/utils/styles/errorMessage";

export const ErrorMessage = () => {
  return (
    <ErrorMessageContainer>
      <ErrorText>
        <img src={imgSrc?.src} width="32" height="32" alt="Pikachu" />
        <span>Oops, Pokemon Not Found!</span>
      </ErrorText>
    </ErrorMessageContainer>
  );
};
