import React from "react";
import { ShimmerSimpleGallery, ShimmerText } from "react-shimmer-effects";

const Shimmer = ({text}) => {
  return (
    <div className="w-10/12 mx-auto mt-40">
      {text && <ShimmerText line={5} gap={10} />}
    <ShimmerSimpleGallery card imageHeight={300} caption />
    </div>
  );
};

export default Shimmer;
