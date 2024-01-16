import React, { useState } from "react";
import { createContext } from "react";
import { Products } from "../../configs/Products";

export const ShopContext = createContext(null);
const defaultcart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1, i++; ) {
    cart[i] = 0;
  }
  return cart;
};
export const Shop_contextprovider = (props: any) => {
  const [cart, setcart] = useState(defaultcart());
  const addtocart = (itemId) => {
    setcart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  return <ShopContext.Provider value={}>{props.children}</ShopContext.Provider>;
};
