import React from "react";
import { CDN_URL } from "../Utils/constant";

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
    <div className="restaurant_card">
      <div className="res_img">
        <img src={`${CDN_URL}${cloudinaryImageId}`} alt="restaurant" />
      </div>
      <div className="res_title">{name}</div>
      <div className="res_add">{address}</div>
      <div className="cuisines">{cuisines.join(", ")}</div>
      <div className="resdata">
        <div className="rating">
          {avgRating > 0 ? avgRating + " star" : "N/A"}
        </div>
        <div className="available">
          {availability?.opened ? "Restaurant open" : "Restaurant closed"}
        </div>
      </div>
      <div className="resdata">
        <div className="cost2">₹{costForTwo / 100} for two</div>
        <div className="res_time">{deliveryTime} minutes Delivery</div>
      </div>
    </div>
  );
};

export default RestaurantCard;
