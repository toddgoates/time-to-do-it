import React from "react";
import { render } from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./styles.css";
import App from "./components/App";

render(
  <Auth0Provider
    domain="q90.us.auth0.com"
    clientId="AF8AuuW9zINYLsaAfS6kA3gmDZNV6onL"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.querySelector("#root")
);
