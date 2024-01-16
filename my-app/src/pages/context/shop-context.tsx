import React, { useState } from "react";
import { createContext } from "react";
import { Products } from "../../configs/Products";

export interface ShopContextType {
  cart: { [itemId: number]: number };
  addtocart: (itemId: number) => void;
  removefromcart: (itemId: number) => void;
}

export const ShopContext = createContext<ShopContextType | null>(null);

const defaultCart = () => {
  let cart: { [itemId: number]: number } = {};
  // Replace Products.length with the actual length based on your data
  for (let i = 1; i <= Products.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props: any) => {
  const [cart, setCart] = useState(defaultCart);

  const addtocart = (itemId: number) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removefromcart = (itemId: number) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue: ShopContextType = { cart, addtocart, removefromcart };
  console.log(cart);
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
