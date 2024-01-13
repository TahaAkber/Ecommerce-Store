import React from "react";
import "../shop/style.css";
export interface productprops {
  id: number;
  productName: string;
  price: number;
  productimage: any;
}
const Product = (props: any) => {
  const { id, productName, price, productimage } = props.data;
  return (
    <div className="product">
      <img src={productimage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default Product;
