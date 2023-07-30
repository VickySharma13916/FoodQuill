import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../Utils/constant";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  const dispatch = useDispatch();
  return (
    <div className="my-8 p-8 w-2/3 border border-slate-100 bg-slate-100 rounded-lg mx-auto">
      <div
        className={`flex ${
          cartItem.length === 0 ? "justify-center" : "justify-end"
        }`}
      >
        {cartItem.length === 0 ? (
          <div className="text-xl text-center">Add Item to cart</div>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
