import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="dev-e3z5qri2rdlfujao.us.auth0.com"
    clientId="Ew00kTEeZCTlIRObzLqdMo2X1BADIz3l"
    redirect_uri={window.location.origin}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);
