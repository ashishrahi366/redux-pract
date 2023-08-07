import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../redux/Slice/CartSlice";

const Cart = () => {
  const items = useSelector(getItemsSelector);
  console.log("items", items);
  const total = items.reduce((a, b) => a + b.price, 0);

  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        total Items:{items.length} (Rs - {total}/-)
      </h3>
    </div>
  );
};

export default Cart;
