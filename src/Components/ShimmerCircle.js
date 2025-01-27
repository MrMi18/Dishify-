import React from "react";
import { ShimmerCircularImage } from "react-shimmer-effects";

const ShimmerCircle = () => {
  return (
    <div className="flex mt-40 w-9/12 gap-4 items-center mx-auto flex-nowrap truncate">
      {[...Array(9)].map((_, index) => (
        <ShimmerCircularImage key={index} size={100} />
      ))}
    </div>
  );
};

export default ShimmerCircle;
