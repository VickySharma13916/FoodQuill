import React from "react";
import { LOGO_URL } from "../Utils/constant";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
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

export default Header;
