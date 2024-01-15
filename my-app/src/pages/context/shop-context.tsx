import React from "react";
import { createContext } from "react";

export const ShopContext = createContext(null);
const Shop_contextprovider = (props) => {
  return <ShopContext.Provider>{props.children}</ShopContext.Provider>;
};

export default Shop_contextprovider;
