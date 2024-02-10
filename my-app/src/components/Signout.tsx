import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "../components/navbar.css";
const Signout = () => {
  const { logout, isAuthenticated } = useAuth0();
  return (
    <div className="logoutdiv">
      <button
        onClick={() => {
          logout();
        }}
        className="logout"
      >
        Signout
      </button>
    </div>
  );
};

export default Signout;
