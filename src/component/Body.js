import React, { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Body = () => {
  const online = useOnlineStatus();
  if (!online) {
    return <h1>You are Online, Please check your internet connection</h1>;
  }
  const { user, setUsername } = useContext(UserContext);
  // Local State Variable - super powerful variable
  // Whenever a state variable is updated, react trigger a reconciliation cycle(re-render the component)
  const [restaurant, setRestaurant] = useState([]);
  const [showRestaurant, setShowRestaurant] = useState(true);
  const [searchRes, setSearchRes] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
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
        {/* <label htmlFor="userName" className="mt-2 ml-2">
          Username
        </label>
        <input
          type="text"
          name="userName"
          id="userName"
          value={user}
          onChange={(e) => setUsername(e.target.value)}
          className="border-2 ml-2 rounded border-blue-700 text-cyan-500 p-2"
        /> */}
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
                  {item.data.promoted ? (
                    <RestaurantCardPromoted restaurantData={item} />
                  ) : (
                    <RestaurantCard restaurantData={item} />
                  )}
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
