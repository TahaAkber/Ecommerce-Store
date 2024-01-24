import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
const Logic = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  return (
    !isAuthenticated && (
      <button
        onClick={() => {
          loginWithRedirect();
          navigate("/shop");
        }}
      >
        Login
      </button>
    )
  );
};

export default Logic;
