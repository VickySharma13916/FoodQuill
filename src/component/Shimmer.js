import React from "react";

const Shimmer = () => {
  const RenderShimmerCards = () => {
    const shimmerCards = [];
    for (let i = 0; i < 12; i++) {
      shimmerCards.push(
        <div className="flex-grow w-64 border rounded-lg shadow-md" key={i}>
          <div className="h-96 flex flex-col items-center">
            <div className="bg-gray-300 rounded-t-lg w-full h-full"></div>
            <div className="bg-gray-100 rounded-b-lg w-full h-full"></div>
          </div>
        </div>
      );
    }
    return shimmerCards;
  };
  return (
    <div className="flex flex-wrap gap-4 p-4">
      <RenderShimmerCards />
    </div>
  );
};

export default Shimmer;
