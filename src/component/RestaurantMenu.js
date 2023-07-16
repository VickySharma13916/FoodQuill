import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../Utils/constant";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { FaStar } from "react-icons/fa";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showItem, setShowItem] = useState(null);
  const { name, avgRating, totalRatings, cloudinaryImageId, cuisines, slugs } =
    resInfo.restaurantMenu;
  const RestraurantMenuCard = ({ restData }) => {
    const { name, imageId, category, description, ratings, inStock, price } =
      restData;
    return (
      <div className="w-80 border rounded-lg shadow-md hover:shadow-lg">
        {imageId && (
          <img
            src={CDN_URL + imageId}
            loading="lazy"
            alt="restaurant"
            className="rounded-t-lg"
          />
        )}
        <div className="h-40 p-4">
          <div className="truncate text-xl mt-2 font-semibold">{name}</div>
          <div className="flex justify-between mt-2">
            <div
              className={`flex items-center text-white ${
                ratings?.aggregatedRating?.rating > 0
                  ? "bg-green-500 px-2 py-1 rounded"
                  : "px-2 py-1 rounded bg-red-500"
              } `}
            >
              {ratings?.aggregatedRating?.rating > 0 ? (
                <>
                  {ratings?.aggregatedRating?.rating}
                  <FaStar fill="#ffd401" className="ml-1" />
                </>
              ) : (
                "N/A"
              )}
            </div>
            <div className="available">Stock Available :- {inStock}</div>
          </div>
          <div className="card-text mt-1">
            <div className="flex justify-between mt-2">
              <div className="truncate">{category}</div>
              <div className="text-xl font-semibold">
                {price && <>₹{price / 100}</>}
              </div>
            </div>
            <div className="truncate">
              {description ? description : "Description Menu Item"}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return resInfo.restaurantMenu.length <= 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4">
      <div className="flex flex-wrap justify-between sm:flex-col md:flex-row items-start">
        {cloudinaryImageId && (
          <img
            src={CDN_URL + cloudinaryImageId}
            loading="lazy"
            alt="restaurant"
            className="img-fluid rounded w-full sm:w-5/12"
          />
        )}
        <div className="w-full sm:w-1/2 md:w-1/2 flex justify-start">
          <div>
            <div className="font-semibold text-2xl">{name}</div>
            <div className="text-xl">
              Cuisines Available - {cuisines.join(" ")}
            </div>
            <div className="card-text my-2">
              <div className="flex items-center text-xl">
                <span className="bg-green-500 px-2 py-1 rounded flex items-center text-white">
                  {avgRating && (
                    <>
                      {avgRating} <FaStar fill="#ffd401" className="ml-1" />
                    </>
                  )}
                </span>
                <span className="ml-4">{totalRatings} Ratings</span>
              </div>
              <div className="mt-2 text-xl">
                {slugs.restaurant}, {slugs.city}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4">
        {resInfo?.category.map((category, index) => {
          return (
            //Controlled Component
            <RestaurantCategory
              category={category.card.card}
              key={category.card.card.title}
              isVisible={index === showItem}
              setShowItem={() => setShowItem(showItem === index ? null : index)}
            />
          );
        })}
      </div>
      <div className="mt-3">
        <h2 className="font-semibold text-2xl font-sans"> Menu Items </h2>
        <div className="flex flex-wrap gap-4 mt-4">
          {resInfo.restMenu &&
            resInfo.restMenu?.map((item) => (
              <div className="flex-grow w-64" key={item.card.info.id}>
                <RestraurantMenuCard restData={item.card.info} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;

//Controlled and Uncontrolled Component
// If it has own state then it has a Uncontrolled Component if the parent has the power to control the children then it is called Controlled Compoent
