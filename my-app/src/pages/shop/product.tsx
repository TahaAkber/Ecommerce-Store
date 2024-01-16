import React from "react";
export interface productprops {
  id: any;
  productName: string;
  price: number;
  productimage: any;
}
const Product = (props: any) => {
  return (
    <div className="product">
      <img src={props.productimage} />
      <div className="description">
        <p>
          <b>{props.productName}</b>
        </p>
        <p>${props.price}</p>
      </div>
      <button className="addToCartBttn">Add to Cart</button>
    </div>
  );
};

export default Product;
