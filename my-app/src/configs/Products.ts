import React from "react";
import { productprops } from "../pages/shop/product";
import Product1 from "../assets/products/iphone-12-pakistan-mobileguru.png";
import Product2 from "../assets/products/2.webp";
import Product3 from "../assets/products/3.jpg";
import Product4 from "../assets/products/4.jpeg";
import Product5 from "../assets/products/5.jpeg";
import Product7 from "../assets/products/7.jpeg";
import Product6 from "../assets/products/6.jpeg";
import Product8 from "../assets/products/8.webp";

export const Products: productprops[] = [
  {
    id: 1,
    productName: "Iphone",
    price: 1300,
    productimage: Product1,
  },
  {
    id: 2,
    productName: "Macbook",
    price: 1600,
    productimage: Product2,
  },
  {
    id: 3,
    productName: "camera",
    price: 400,
    productimage: Product3,
  },
  {
    id: 4,
    productName: "jacket",
    price: 130,
    productimage: Product4,
  },
  {
    id: 5,
    productName: "ledstrips",
    price: 800,
    productimage: Product5,
  },
  {
    id: 6,
    productName: "fullsleeves",
    price: 300,
    productimage: Product6,
  },
  {
    id: 7,
    productName: "t-shirt",
    price: 50,
    productimage: Product7,
  },
  {
    id: 8,
    productName: "cap",
    price: 10,
    productimage: Product8,
  },
];

export default Products;
