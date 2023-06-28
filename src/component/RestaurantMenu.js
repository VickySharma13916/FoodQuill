import React from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../Utils/constant";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const { name, avgRating, totalRatings, cloudinaryImageId, cuisines, slugs } =
    resInfo.restaurantMenu;
  const RestraurantMenuCard = ({ restData }) => {
    const { name, imageId, category, description, ratings, inStock, price } =
      restData;
    return (
      <div className="card">
        {imageId && (
          <img
            src={CDN_URL + imageId}
            loading="lazy"
            alt="restaurant"
            className="card-img-top"
          />
        )}
        <div className="card-body card-height">
          <div className="card-title res_title text-truncate">{name}</div>

          <div className="resdata">
            <div
              className={`rating ${
                ratings?.aggregatedRating?.rating > 0
                  ? "rating-star"
                  : "no-rating"
              } `}
            >
              {ratings?.aggregatedRating?.rating > 0 ? (
                <>
                  {ratings?.aggregatedRating?.rating}
                  <FaStar fill="#ffd401" />
                </>
              ) : (
                "N/A"
              )}
            </div>
            <div className="available">Stock Available :- {inStock}</div>
          </div>
          <div className="card-text mt-1">
            <div className="resdata">
              <div className="category">{category}</div>
              <div className="res_title">{price && <>₹{price / 100}</>}</div>
            </div>
            <div className="text-truncate">
              {description ? description : "Description Menu Item"}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return resInfo.restaurantMenu.length <= 0 ? (
    <Shimmer />
  ) : (
    <Container fluid={true} className="p-3">
      <Row>
        <Col
          xs={12}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <Col xs={12} md={6} className="res_img">
            {cloudinaryImageId && (
              <img
                src={CDN_URL + cloudinaryImageId}
                loading="lazy"
                alt="restaurant"
                className="img-fluid rounded"
              />
            )}
          </Col>
          <Col xs={12} md={6}>
            <div className="card-body border-0">
              <div className="card-title res_title">{name}</div>
              <div className="card-subtitle mb-2 text-muted slugs">
                <div>Cuisines Available - {cuisines.join(" ")}</div>
              </div>
              <div className="card-text">
                <div className="avg">
                  <span className="rating-star">
                    {avgRating && (
                      <>
                        {avgRating} <FaStar fill="#ffd401" className="ms-0" />
                      </>
                    )}{" "}
                  </span>
                  - {totalRatings} Ratings
                </div>
                <div className="mt-2">
                  Address - {slugs.restaurant}, {slugs.city}
                </div>
              </div>
            </div>
          </Col>
        </Col>
        <Col xs={12} className="menuItems mt-3">
          <h2> Menu Items </h2>
          <Container className="p-0" fluid={true}>
            <Row xs={1} sm={2} md={3} lg={4}>
              {resInfo.restMenu &&
                resInfo.restMenu?.map((item) => (
                  <Col className="p-3" key={item.card.info.id}>
                    <RestraurantMenuCard restData={item.card.info} />
                  </Col>
                ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default RestaurantMenu;
