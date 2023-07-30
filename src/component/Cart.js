import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((store) => store.cart.item);
  return (
    <div>
      {cartItem.map((item) => {
        return <div key={item?.id}>{item.name}</div>;
      })}
    </div>
  );
};

export default Cart;
