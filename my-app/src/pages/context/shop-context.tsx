import React, { useState } from "react";
import { createContext } from "react";
import { Products } from "../../configs/Products";

export interface ShopContextType {
  cart: { [itemId: number]: number };
  addtocart: (itemId: number) => void;
  removefromcart: (itemId: number) => void;
  getcartinfo: () => number | null;
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
  const getcartinfo = () => {
    let cartamount = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        let inteminfo = Products.find((product) => product.id === Number(item));

        // Check if inteminfo is not undefined before accessing its properties
        if (inteminfo) {
          cartamount += cart[item] * inteminfo.price;
        } else {
          // Handle the case where a product with the given id is not found
          console.error(`Product with id ${item} not found.`);
        }
      }
    }
    return cartamount; // Return the calculated cartamount
  };

  const addtocart = (itemId: number) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removefromcart = (itemId: number) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue: ShopContextType = {
    cart,
    addtocart,
    removefromcart,
    getcartinfo,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
