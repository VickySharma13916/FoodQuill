import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -logo
 * -nav-item
 * Body
 * -search
 * -restaurant container
 * --restaurant card
 * Footer
 * -Links
 * -copyright
 * -Address
 * -contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://images.unsplash.com/photo-1602934445884-da0fa1c9d3b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=60&q=60"
          alt="logo"
        />
      </div>
      <div className="nav-link">
        <div>Home</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Cart</div>
      </div>
    </div>
  );
};

const RestaurantCard = ({ title, src, rating, address, time }) => {
  return (
    <div className="restaurant_card">
      <div className="res_img">
        <img src={src} alt="restaurant" />
      </div>
      <h3 className="res_title">{title}</h3>
      <div className="res_add">{address}</div>
      <div className="rating">{rating} stars</div>
      <div className="res_time">{time}</div>
    </div>
  );
};

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
        <RestaurantCard
          title={"The Lalit"}
          src={
            "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=200"
          }
          address={"Continental"}
          rating={"4.4"}
          time={"40 minutes"}
        />
        <RestaurantCard
          title={"Taz Hotel"}
          src={
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          address={"Chinese"}
          rating={"5"}
          time={"30 minutes"}
        />
        <RestaurantCard
          title={"Seven Seas"}
          src={
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=200"
          }
          address={"South Indian"}
          rating={"4.5"}
          time={"20 minutes"}
        />
        <RestaurantCard
          title={"Haldiram"}
          src={
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=200"
          }
          address={"North Indian"}
          rating={"5"}
          time={"15 minutes"}
        />
        <RestaurantCard
          title={"The Lalit"}
          src={
            "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=200"
          }
          address={"Continental"}
          rating={"4.4"}
          time={"40 minutes"}
        />
        <RestaurantCard
          title={"Taz Hotel"}
          src={
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          address={"Chinese"}
          rating={"5"}
          time={"30 minutes"}
        />
        <RestaurantCard
          title={"Seven Seas"}
          src={
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          address={"South Indian"}
          rating={"4.5"}
          time={"20 minutes"}
        />
        <RestaurantCard
          title={"Haldiram"}
          src={
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=200"
          }
          address={"North Indian"}
          rating={"5"}
          time={"15 minutes"}
        />
        <RestaurantCard
          title={"The Lalit"}
          src={
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          address={"Continental"}
          rating={"4.4"}
          time={"40 minutes"}
        />
        <RestaurantCard
          title={"Taz Hotel"}
          src={
            "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          }
          address={"Chinese"}
          rating={"5"}
          time={"30 minutes"}
        />
        <RestaurantCard
          title={"Seven Seas"}
          src={
            "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=200"
          }
          address={"South Indian"}
          rating={"4.5"}
          time={"20 minutes"}
        />
        <RestaurantCard
          title={"Haldiram"}
          src={
            "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          }
          address={"North Indian"}
          rating={"5"}
          time={"15 minutes"}
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
