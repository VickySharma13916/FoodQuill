import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../Utils/mockData";

const Body = () => {
  return (
    <div className="food_body">
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search food..."
        />
      </div>
      <div className="res_container">
        {restaurantList.map((item) => {
          return (
            <>
              <RestaurantCard restaurantData={item} key={item.data.id} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
