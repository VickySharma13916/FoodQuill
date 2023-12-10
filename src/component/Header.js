import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import logo from "../images/foodQuilllogo.png";
import UserContext from "../Utils/UserContext";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { useSelector } from "react-redux";

const Header = () => {
  const [login, setLogin] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const online = useOnlineStatus();
  const { user } = useContext(UserContext);
  const cart = useSelector((store) => store.cart.item);
  //If their is no dependency array in useEffect component called in every rendered
  //If empty dependency array is put it in the useEffect than it called in first or initial render(just once)
  //If their is some variable or state in depencencies array than it called when state is updated ([login] => it will render when login is update)
  // useEffect(() => {
  //   console.log("Useeffect called");
  // }, []);
  return (
    <div className="header sticky top-0 z-20 flex md:flex-row flex-col justify-between items-center shadow-md px-4 bg-slate-100">
      <div className="flex justify-between items-center w-full">
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
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>
      <div
        className={`${
          menuOpen
            ? "flex md:justify-end justify-start w-full"
            : "sm:flex md:justify-end sm:justify-start w-full hidden"
        } sm:mt-2`}
      >
        <Link to="/" className="px-2 cursor-pointer">
          Home
        </Link>
        {/* <Link to="/about" className="px-2 cursor-pointer">
          About Us
        </Link>
        <Link to="/contact" className="px-2 cursor-pointer">
          Contact Us
        </Link> */}
        <Link to="/grocery" className="px-2 cursor-pointer">
          Grocery
        </Link>
        <Link to="/cart" className="px-2 cursor-pointer relative">
          <div className="flex">
            <TfiShoppingCartFull size={20} />
            <div className="border rounded-full bg-red-600 absolute -top-4 -right-1 text-center text-sm w-6 h-6 text-white">
              {cart.length}
            </div>
          </div>
        </Link>
        {/* <div className="flex flex-col items-center justify-center relative pl-2 pr-6 text-indigo-800 font-bold text-xl">
          {user}
          {online ? (
            <span className="w-4 h-4 absolute top-0 right-3 border rounded-full bg-green-600"></span>
          ) : (
            <span className="w-4 h-4 absolute top-0 right-3 border rounded-full bg-red-600"></span>
          )}
        </div> */}
        {/* <div
          className="flex items-center w-max cursor-pointer justify-center rounded border border-transparent bg-indigo-600 px-2 py-2 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none"
          onClick={() => setLogin(!login)}
        >
          {login ? "Login" : "Logout"}
        </div> */}
      </div>
    </div>
  );
};

export default Header;
