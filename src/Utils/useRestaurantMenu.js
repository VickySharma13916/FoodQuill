import React, { useEffect, useState } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (resId) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [restMenu, setRestMenu] = useState([]);
  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    const resJson = json.data.cards[0].card.card.info;
    const resMenuJson = json.data.cards[2].groupedCard
      ? json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards
      : json.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
          .itemCards;
    setRestaurantMenu(resJson);
    setRestMenu(resMenuJson);
  };
  useEffect(() => {
    fetchData();
  }, []);
  let resInfo = { restaurantMenu, restMenu };
  return resInfo;
};

export default useRestaurantMenu;
