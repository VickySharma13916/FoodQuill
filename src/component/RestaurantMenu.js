import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API, CDN_URL } from "../Utils/constant";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restMenu, setRestMenu] = useState([]);
  const { resId } = useParams();
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const resJson = json.data.cards[0].card.card.info;
    const resMenuJson =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
        .itemCards;
    setRestaurantMenu(resJson);
    setRestMenu(resMenuJson);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const { name, avgRating, totalRatings, cloudinaryImageId, cuisines, slugs } =
    restaurantMenu;
  const RestraurantMenuCard = ({ restData }) => {
    const { name, imageId, category, description, ratings, inStock, price } =
      restData;
    console.log(restData);
    return (
      <div className="restaurant_card">
        <div className="res_img">
          {imageId && (
            <img src={CDN_URL + imageId} loading="lazy" alt="restaurant" />
          )}
        </div>
        <div
          className="res_title"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>{name.slice(0, 25)}</div>
          <div> {price && <>Price - ₹{price / 100}</>}</div>
        </div>
        <div className="resdata" style={{ gap: "15px" }}>
          <div className="category" style={{ width: "30%" }}>
            {category}
          </div>
          <div
            className="description"
            style={{
              height: "100px",
              overflow: "hidden",
              width: "70%",
            }}
          >
            {description && description?.slice(0, 150)}
          </div>
        </div>
        <div className="resdata">
          <div className="rating">
            {ratings?.aggregatedRating?.rating > 0
              ? ratings?.aggregatedRating?.rating + " star"
              : "N/A"}
          </div>
          <div className="available">Stock Available :- {inStock}</div>
        </div>
      </div>
    );
  };
  console.log(restaurantMenu);
  return restaurantMenu.length <= 0 ? (
    <Shimmer />
  ) : (
    <div style={{ padding: "1rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div className="res_img">
          {cloudinaryImageId && (
            <img
              src={CDN_URL + cloudinaryImageId}
              loading="lazy"
              alt="restaurant"
              style={{ borderRadius: "10px" }}
            />
          )}
        </div>
        <div
          style={{
            width: "50%",
          }}
        >
          <div className="name-rest">
            <h2>{name}</h2>
          </div>
          <div>Cuisines Available - {cuisines.join(" ")}</div>
          <div className="avg">
            {avgRating} Star - {totalRatings} Ratings
          </div>
          <div className="slugs">
            Address - {slugs.restaurant}, {slugs.city}
          </div>
        </div>
      </div>
      <div className="menuItems">
        <h2> Menu Items </h2>
        <div className="res_container" style={{ padding: "1.5rem" }}>
          {restMenu &&
            restMenu?.map((item) => (
              <RestraurantMenuCard
                key={item.card.info.id}
                restData={item.card.info}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
