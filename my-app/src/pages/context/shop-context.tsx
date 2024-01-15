import React from "react";
import { createContext } from "react";

export const ShopContext = createContext(null);
const Shop_contextprovider = () => {
  return <div>shop-context</div>;
};

export default Shop_contextprovider;
