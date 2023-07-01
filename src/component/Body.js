import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const online = useOnlineStatus();
  if (!online) {
    return <h1>You are Online, Please check your internet connection</h1>;
  }
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
    setRestaurant(
      json?.data?.cards[2]
        ? json?.data?.cards[2]?.data?.data?.cards
        : json?.data?.cards[0]?.data?.data?.cards
    );
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

  return (
    <div className="food_body my-4">
      <div className="px-4 flex">
        <input
          type="text"
          name="search"
          id="search"
          className="w-96 py-2 px-4 border bg-slate-50 rounded-sm"
          placeholder="Search food restaurant"
          value={searchRes}
          onChange={(e) => handleSearch(e)}
        />
        <button
          className="w-max ml-4 flex items-center cursor-pointer justify-center rounded border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
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
        <div className="flex flex-wrap gap-4 p-4">
          {filterRestraurant?.map((item) => {
            return (
              <span className="flex-grow w-64" key={item.data.id}>
                <Link
                  to={`restaurants/${item.data.id}`}
                  state={{ item: item }}
                  className="no-underline"
                >
                  <RestaurantCard restaurantData={item} />
                </Link>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
