import React from "react";
import Products from "../../configs/Products";
import Product from "./product";
import "../shop/style.css";

function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>
          <b>SHOPPING CENTER</b>
        </h1>
      </div>

      <div className="products">
        {Products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
