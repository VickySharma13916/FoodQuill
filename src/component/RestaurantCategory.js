import React from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import CategoryItemList from "./CategoryItemList";

const RestaurantCategory = ({ category, isVisible, setShowItem }) => {
  return (
    <div className="border shadow-lg rounded-lg w-8/12 my-4 bg-slate-100 p-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setShowItem()}
      >
        <div className="text-2xl font-bold">
          {category.title} ({category.itemCards.length})
        </div>
        <button>{isVisible ? <RiArrowUpSLine /> : <RiArrowDownSLine />}</button>
      </div>
      {isVisible && (
        <div className="mt-2">
          <CategoryItemList item={category.itemCards} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
