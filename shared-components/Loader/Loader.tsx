import { Loader, LoaderContainer } from "@/utils/styles/loader";

const Loading = () => {
  return (
    <LoaderContainer>
      <Loader>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Loader>
    </LoaderContainer>
  );
};

export default Loading;
