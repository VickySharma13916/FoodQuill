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
    <div className="card">
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        loading="lazy"
        alt="restaurant"
        className="card-img-top"
      />
      <div className="card-body card-height">
        <div className="card-title res_title text-truncate">{name}</div>
        <div className="text-truncate">{address}</div>
        <div className="cuisines text-truncate">{cuisines.join(", ")}</div>
        <div className="resdata">
          <div
            className={`rating ${avgRating > 0 ? "rating-star" : "no-rating"}`}
          >
            {avgRating > 0 ? (
              <>
                {avgRating}
                <FaStar fill="#ffd401" />
              </>
            ) : (
              "N/A"
            )}
          </div>
          <div className="available">
            {availability?.opened ? "Restaurant open" : "Restaurant closed"}
          </div>
        </div>
        <div className="card-text">
          <div className="resdata">
            <div className="cost2">₹{costForTwo / 100} for two</div>
            <div className="res_time">{deliveryTime} minutes Delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
