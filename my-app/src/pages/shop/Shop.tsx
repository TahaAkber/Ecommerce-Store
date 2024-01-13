import React from "react";
import Products from "../../configs/Products";
import Product from "./product";

function Shop() {
  return (
    <div>
      <h1>
        <b>SHOOPING CENTER</b>
      </h1>
      <div>
        {Products.map((i) => (
          <Product data={i} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
