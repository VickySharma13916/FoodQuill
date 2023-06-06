import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restMenu, setRestMenu] = useState([]);
  const { resId } = useParams();
  const fetchData = async () => {
    const data = await fetch(
      `https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=${resId}`
    );
    const json = await data.json();
    const resJson = json.data.cards[0].card.card.info;
    const resMenuJson =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    setRestaurantMenu(resJson);
    setRestMenu(resMenuJson);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const { name, costForTwo, cuisines, avgRating, totalRatings, slugs } =
    restaurantMenu;
  return restaurantMenu.length <= 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="name-rest">
        Restaurant Name - <span>{name}</span>
      </div>
      <div>
        ₹{costForTwo / 100} For 2 People - {cuisines.join(" ")}
      </div>
      <div className="avg">
        {avgRating} Star - {totalRatings} Ratings
      </div>
      <div className="slugs">
        Address:- {slugs.restaurant}, {slugs.city}
      </div>
      <div className="menuItems">
        Menu Items :-
        {restMenu?.map((item) => (
          <div>{item?.card?.info?.name}</div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
