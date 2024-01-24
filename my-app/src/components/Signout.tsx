import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Signout = () => {
  const { logout, isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <button
      onClick={() => {
        logout();
      }}
    >
      Signout
    </button>
  ) : (
    <div>""</div>
  );
};

export default Signout;
