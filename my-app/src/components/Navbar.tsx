import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "../components/navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import Signout from "./Signout";
function Navbar() {
  return (
    <div className="nav-bar">
      <div className="link">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Signout />
      </div>
    </div>
  );
}

export default Navbar;
