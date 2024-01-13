import React from "react";
import { productprops } from "../pages/shop/product";
const Product1 = require("../assets/products/1.png") as string;
const Product2 = require("../assets/products/2.png") as string;
const Product3 = require("../assets/products/3.png") as string;
const Product4 = require("../assets/products/4.png") as string;
const Product5 = require("../assets/products/5.png") as string;
const Product6 = require("../assets/products/6.webp") as string;
const Product7 = require("../assets/products/7.webp") as string;
const Product8 = require("../assets/products/8.webp") as string;

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
    productName: "fullslieves",
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
