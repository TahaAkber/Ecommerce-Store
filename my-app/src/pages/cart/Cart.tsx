import React from "react";
import Product from "../shop/product";
import Products from "../../configs/Products";
import { createContext } from "react";
import { ShopContextType, ShopContext } from "../context/shop-context";
import { useContext } from "react";
import Cartitems from "./Cartitems";

function Cart() {
  const contextValue: ShopContextType | null = useContext(ShopContext);
  if (!contextValue) {
    console.error("ShopContext is null");
    return null;
  }
  const { cart }: ShopContextType = contextValue;

  return (
    <div>
      <div className="cart">
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cart[product.id] !== 0) {
            return <Cartitems data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: $</p>
        <button>Continue Shopping</button>
        <button>Check-Out</button>
      </div>
    </div>
  );
}

export default Cart;
