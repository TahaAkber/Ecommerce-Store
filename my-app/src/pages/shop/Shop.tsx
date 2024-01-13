import React from "react";
import Products from "../../configs/Products";
import Product from "./product";

function Shop() {
  return (
    <div>
      <h2>Taha's Shop</h2>
      <div>
        {Products.map((i) => (
          <Product data={i} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
