import React from "react";
import Products from "../../configs/Products";
import { ShopContextType, ShopContext } from "../context/shop-context";
import { useContext } from "react";
import Cartitems from "./Cartitems";

function Cart() {
  const contextValue: ShopContextType | null = useContext(ShopContext);
  if (!contextValue) {
    console.error("ShopContext is null");
    return null;
  }
  const { cart, getcartinfo }: ShopContextType = contextValue;
  const totalamount = getcartinfo();
  return (
    <div>
      <div className="cart">
        <h1>Cart Items</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cart[product.id] !== 0) return <Cartitems data={product} />;
        })}
      </div>
      <div className="checkout">
        {totalamount !== null && <h6>SubTotal: ${totalamount ?? 0}</h6>}
      </div>
      <div>
        <button className="addToCartBttn">Continue Shopping</button>
        <button className="addToCartBttn">Check-Out</button>
      </div>
    </div>
  );
}

export default Cart;
