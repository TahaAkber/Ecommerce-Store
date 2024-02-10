import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Signout from "./Signout";
import { useNavigate } from "react-router-dom";
import "../components/navbar.css";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();
  const navigate = useNavigate();

  return (
    <div
      className="full-page"
      style={{
        backgroundColor: "royalblue",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="loginbox"
        style={{ textAlign: "center", color: "white ", fontSize: 30 }}
      >
        <h1>Welcome to Ecommerce Store</h1>
        {!isAuthenticated ? (
          <>
            <h2 style={{ fontSize: "larger" }}>Please log in to continue</h2>
            <button
              onClick={() => {
                loginWithRedirect();
              }}
              className="login"
            >
              Click Here To Login
            </button>
          </>
        ) : (
          <div>
            <img
              src={user?.picture}
              alt="PhotoMissing"
              style={{ borderRadius: 100 }}
            />
            <div>{user?.name}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
