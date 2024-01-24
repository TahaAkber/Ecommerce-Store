import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShopContextProvider } from "./pages/context/shop-context";
import Login from "./components/Login";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          {isAuthenticated && <Navbar />}
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
