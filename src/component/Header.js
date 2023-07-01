import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import useOnlineStatus from "../Utils/useOnlineStatus";
const Header = () => {
  const [login, setLogin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const online = useOnlineStatus();
  //If their is no dependency array in useEffect component called in every rendered
  //If empty dependency array is put it in the useEffect than it called in first or initial render(just once)
  //If their is some variable or state in depencencies array than it called when state is updated ([login] => it will render when login is update)
  // useEffect(() => {
  //   console.log("Useeffect called");
  // }, []);
  return (
    <div className="header flex flex-wrap justify-between items-center shadow-md px-4 bg-slate-100">
      <Link to="/" className="flex-shrink-0">
        <img
          src={logo}
          alt="logo"
          className="logo w-20 brightness-95 cursor-pointer"
        />
      </Link>
      <button
        className="block sm:hidden px-2 py-1 rounded bg-indigo-600 text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        Menu
      </button>
      <div
        className={`${
          menuOpen ? "flex flex-col justify-end" : "hidden"
        } sm:flex sm:items-center sm:justify-center sm:mt-2`}
      >
        <Link to="/" className="px-4 cursor-pointer">
          Home
        </Link>
        <Link to="/about" className="px-4 cursor-pointer">
          About Us
        </Link>
        <Link to="/contact" className="px-4 cursor-pointer">
          Contact Us
        </Link>
        <Link to="/cart" className="px-4 cursor-pointer">
          Cart
        </Link>
        <Link to="/grocery" className="px-4 cursor-pointer">
          Grocery
        </Link>
        <div
          className="flex items-center w-max cursor-pointer justify-center rounded border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
          onClick={() => setLogin(!login)}
        >
          {login ? "Login" : "Logout"}
        </div>
      </div>
    </div>
  );
};

export default Header;
