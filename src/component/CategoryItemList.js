import React from "react";
import { CDN_URL } from "../Utils/constant";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addItem } from "../Utils/cartSlice";

const CategoryItemList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {item?.map((data) => {
        const itemData = data?.card?.info;
        return (
          <div
            key={data?.card?.info?.id}
            className="flex border-b-2 border-slate-300 h-24 py-2 items-center justify-between"
          >
            <div className="w-9/12">
              <div className="text-xl">
                {itemData?.name} - ₹
                {itemData?.price
                  ? itemData?.price / 100
                  : itemData?.defaultPrice / 100}
              </div>
              <div className="text-sm text-slate-700 h-16 overflow-hidden">
                {itemData?.description}
              </div>
            </div>
            <div className="w-3/12 flex h-20 justify-end relative">
              {itemData?.imageId && (
                <img
                  src={CDN_URL + itemData?.imageId}
                  className="w-20 h-20 rounded-sm object-cover"
                  alt="food-item"
                />
              )}
              <div className="absolute bottom-2 right-2">
                <button
                  className="px-2 py-1 rounded shadow-lg hover:shadow-xl font-semibold hover:bg-green-500 hover:text-white bg-white text-green-500"
                  onClick={() => handleAddItem(itemData)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryItemList;
