import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function Header() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <header className="bg-transparent">
      <div>
        {isAuthenticated ? (
          <div className="flex items-center justify-between gap-4">
            <img
              src="https://www.q90.com/images/Q-LOGO.svg"
              alt="Q90 Logo"
              className="w-12 ml-2"
            />
            <div>
              <span className="mr-6 italic">Hello, {user.name}</span>
              <LogoutButton />
            </div>
          </div>
        ) : (
          <div className="text-right">
            <LoginButton />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
