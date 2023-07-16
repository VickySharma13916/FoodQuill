import React from "react";
import { CDN_URL } from "../Utils/constant";
import { FaStar } from "react-icons/fa";
const RestaurantCard = ({ restaurantData }) => {
  const {
    name,
    cloudinaryImageId,
    address,
    avgRating,
    deliveryTime,
    availability,
    costForTwo,
    cuisines,
  } = restaurantData?.data;
  return (
    <div className="w-80 border rounded-lg shadow-md hover:shadow-lg">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        loading="lazy"
        alt="restaurant"
        className="rounded-t-lg"
      />
      <div className="h-48 p-4">
        <div className="text-xl mt-2 font-semibold truncate">{name}</div>
        <div className="truncate">{address}</div>
        <div className="cuisines truncate">{cuisines.join(", ")}</div>
        <div className="flex justify-between my-2">
          <div
            className={`flex items-center text-white ${
              avgRating > 0
                ? "bg-green-500 px-2 py-1 rounded"
                : "px-2 py-1 rounded bg-red-500"
            }`}
          >
            {avgRating > 0 ? (
              <>
                {avgRating}
                <FaStar fill="#ffd401" className="ml-1" />
              </>
            ) : (
              "N/A"
            )}
          </div>
          <div className="available">
            {availability?.opened ? "Restaurant open" : "Restaurant closed"}
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="font-semibold">₹{costForTwo / 100} for two</div>
          <div className="res_time">{deliveryTime} minutes Delivery</div>
        </div>
      </div>
    </div>
  );
};

//Higher Order Component
//Input- RestaurantCard => ResturantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <label className="absolute text-white bg-black px-2 py-1 rounded z-10 shadow-md">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
