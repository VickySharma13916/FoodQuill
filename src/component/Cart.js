import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../Utils/constant";
import { clearCart, removeItem } from "../Utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  const handleRemomveItem = (data) => {
    dispatch(removeItem(data));
  };
  return (
    <div className="md:my-8 my-4 md:p-8 p-4 md:w-2/3 w-full border border-slate-100 bg-slate-100 rounded-lg mx-auto">
      <div
        className={`flex ${
          cartItem.length === 0 ? "justify-center" : "justify-end"
        }`}
      >
        {cartItem.length === 0 ? (
          <div className="text-xl text-center cursor-pointer">
            <Link to="/">Add Item to cart</Link>
          </div>
        ) : (
          <button
            className="border border-red-200 bg-red-500 px-2 py-1 text-white rounded"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        )}
      </div>
      {cartItem?.map((data) => {
        return (
          <div
            key={data?.id}
            className="flex border-b-2 border-slate-300 h-24 py-2 items-center justify-between"
          >
            <div className="w-9/12">
              <div className="text-xl">
                {data?.name} - ₹
                {data?.price ? data?.price / 100 : data?.defaultPrice / 100}
              </div>
              <div className="text-sm text-slate-700 h-16 overflow-hidden">
                {data?.description}
              </div>
            </div>
            <div className="w-3/12 flex h-20 justify-end relative">
              {data?.imageId && (
                <img
                  src={CDN_URL + data?.imageId}
                  className="w-20 h-20 rounded-sm object-cover"
                  alt="food-item"
                />
              )}
              <div className="absolute md:bottom-2 bottom-0 right-0 md:right-1">
                <button
                  className="px-2 py-1 rounded shadow-lg hover:shadow-xl font-semibold hover:bg-green-500 hover:text-white bg-white text-green-500"
                  onClick={() => handleRemomveItem(data)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
