import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Signout from "./Signout";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  return !isAuthenticated ? (
    <button
      onClick={() => {
        loginWithRedirect();
      }}
    >
      Login
    </button>
  ) : (
    <div>
      <img src={user?.picture} alt="PhotoMissing" />
      <div>{user?.name}</div>
    </div>
  );
};

export default Login;
