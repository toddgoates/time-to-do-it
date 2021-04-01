import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="px-4 py-3 text-lg font-bold text-white uppercase bg-green-500 hover:bg-green-600"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
}

export default LoginButton;
