import React, { useContext } from "react";
import { ShopContext, ShopContextType } from "../context/shop-context";
export interface productprops {
  id: any;
  productName: string;
  price: number;
  productimage: any;
}
const Product = (props: any) => {
  const { id, productimage, productName, price } = props.data;
  const contextValue: ShopContextType | null = useContext(ShopContext);

  if (!contextValue) {
    console.error("ShopContext is null");
    return null;
  }

  const { addtocart }: ShopContextType = contextValue;

  if (!addtocart) {
    console.error("addtocart method is not available in ShopContext");
    return null; // or handle the lack of addtocart method in a different way
  }
  return (
    <div className="product">
      <img src={productimage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        className="addToCartBttn"
        onClick={() => {
          addtocart(id);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
