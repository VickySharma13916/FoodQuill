import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link, useNavigate } from "react-router-dom";

const Body = () => {
  // Local State Variable - super powerful variable
  // Whenever a state variable is updated, react trigger a reconciliation cycle(re-render the component)
  const [restaurant, setRestaurant] = useState([]);
  const [showRestaurant, setShowRestaurant] = useState(true);
  const [searchRes, setSearchRes] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining
    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setShowRestaurant(false);
  };

  useEffect(() => {
    //when the body component is render is completed than the useEffect callback function is called
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchRes(e.target.value);
  };

  const filterRestraurant = restaurant?.filter((item) =>
    item?.data?.name?.toLowerCase().includes(searchRes?.toLowerCase())
  );

  const navigate = useNavigate();
  const openProfile = (item) => {
    navigate(`/restaurants/${item?.data?.id}`, {
      state: {
        item: item,
      },
    });
  };

  return (
    <div className="food_body">
      <div className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search food restaurant"
          value={searchRes}
          onChange={(e) => handleSearch(e)}
          className="search_restaurant"
        />
        <button
          className="filter-btn"
          onClick={() => {
            const listOfRestaurant = restaurant.filter(
              (item) => item.data.avgRating >= 4
            );
            setRestaurant(listOfRestaurant);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      {showRestaurant ? (
        <Shimmer />
      ) : (
        <div className="res_container">
          {filterRestraurant?.map((item) => {
            return (
              <Link
                to={`restaurants/${item.data.id}`}
                state={{ item: item }}
                key={item.data.id}
                onClick={() => openProfile(item)}
              >
                <RestaurantCard restaurantData={item} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
