import React, { useState } from "react";
import { LOGO_URL } from "../Utils/constant";
import { Link, useLocation, useParams } from "react-router-dom";
const Header = () => {
  const [login, setLogin] = useState(true);

  //If their is no dependency array in useEffect component called in every rendered
  //If empty dependency array is put it in the useEffect than it called in first or initial render(just once)
  //If their is some variable or state in depencencies array than it called when state is updated ([login] => it will render when login is update)
  // useEffect(() => {
  //   console.log("Useeffect called");
  // }, []);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={LOGO_URL} alt="logo" />
        </Link>
      </div>
      <div className="nav-link">
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/about">
          <div>About Us</div>
        </Link>
        <Link to="/contact">
          <div>Contact Us</div>
        </Link>
        <Link to="/cart">
          <div>Cart</div>
        </Link>
        <div className="login ms-2" onClick={() => setLogin(!login)}>
          {login ? "Login" : "Logout"}
        </div>
      </div>
    </div>
  );
};

export default Header;
