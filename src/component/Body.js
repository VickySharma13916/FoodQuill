import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

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
    <div className="food_body">
      <Row xs={12} md={8} className="gap-3 justify-content-between px-3">
        <Col xs={12} md={6} className="pe-md-3 pe-sm-0 ps-0">
          <form className="d-flex">
            <input
              className="form-control"
              type="search"
              aria-label="Search"
              name="search"
              id="search"
              placeholder="Search food restaurant"
              value={searchRes}
              onChange={(e) => handleSearch(e)}
            />
          </form>
        </Col>
        <Col xs={12} md={4} className="text-end pe-0">
          <button
            className="btn btn-secondary"
            onClick={() => {
              const listOfRestaurant = restaurant.filter(
                (item) => item.data.avgRating >= 4
              );
              setRestaurant(listOfRestaurant);
            }}
          >
            Top Rated Restaurant
          </button>
        </Col>
      </Row>

      {showRestaurant ? (
        <Shimmer />
      ) : (
        <Container className="p-0" fluid={true}>
          <Row xs={1} sm={2} md={3} lg={4}>
            {filterRestraurant?.map((item) => {
              return (
                <Col className="p-3" key={item.data.id}>
                  <Link
                    to={`restaurants/${item.data.id}`}
                    state={{ item: item }}
                    style={{ textDecoration: "none" }}
                  >
                    <RestaurantCard restaurantData={item} />
                  </Link>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Body;
