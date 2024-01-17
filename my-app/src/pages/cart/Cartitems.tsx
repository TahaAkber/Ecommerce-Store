import React, { useState } from "react";
import { ShopContext, ShopContextType } from "../context/shop-context";
import { useContext } from "react";
const Cartitems = (props: any) => {
  const contextValue: ShopContextType | null = useContext(ShopContext);
  if (!contextValue) {
    console.error("ShopContext is null");
    return null;
  }
  const { cart, addtocart, removefromcart }: ShopContextType = contextValue;
  const { id, productimage, productName, price } = props.data;

  return (
    <div className="cartItem">
      <img src={productimage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="addorremove">
          <button
            onClick={() => {
              removefromcart(id);
            }}
          >
            -
          </button>
          <input value={cart[id]} />
          <button
            onClick={() => {
              addtocart(id);
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartitems;
