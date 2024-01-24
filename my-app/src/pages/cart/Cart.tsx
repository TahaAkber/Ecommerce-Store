import React from "react";
import Products from "../../configs/Products";
import { ShopContextType, ShopContext } from "../context/shop-context";
import { useContext } from "react";
import Cartitems from "./Cartitems";
import { useNavigate } from "react-router-dom";
function Cart() {
  const navigate = useNavigate();
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
      {totalamount ? (
        <div className="checkout">
          <h6>SubTotal: ${totalamount}</h6>
        </div>
      ) : (
        <p>
          <b>Cart is Empty</b>
        </p>
      )}

      <div>
        <button
          className="addToCartBttn"
          onClick={() => {
            navigate("/shop");
          }}
        >
          Continue Shopping
        </button>
        <button className="addToCartBttn">Check-Out</button>
      </div>
    </div>
  );
}

export default Cart;
