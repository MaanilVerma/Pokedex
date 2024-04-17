import { useState } from "react";
import { Skeleton, SkeletonContainer } from "@/utils/styles/loader";

type SkeletonLoadingProps = {
  src: string;
  alt: string;
};

const SkeletonLoading = ({ src, alt }: SkeletonLoadingProps) => {
  const [skeleton, setSkeleton] = useState(true);

  return (
    <SkeletonContainer skeleton={skeleton ? "true" : "false"}>
      {skeleton && <Skeleton />}
      <img
        onLoad={() => setSkeleton(false)}
        src={src}
        width="256"
        height="256"
        alt={alt}
      />
    </SkeletonContainer>
  );
};

export default SkeletonLoading;
