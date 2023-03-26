import React from "react";
import Craousel from "../carousel/Craousel";
import { useAuth0 } from "@auth0/auth0-react";

import "./Homepage.css";

function Homepage() {
  const { loginWithPopup } = useAuth0();

  return (
    <div className="Homepagecontainer">
      <div className="cryptoverse">
        <h1 className="cryptotext">CryptoMagazine</h1>
      </div>
      <div className="cryptotextcontainer">
        <p className="cryptocontent">
          An overview of the top cryptocurrencies in terms of market
          capitalization, including Bitcoin, Ethereum, Ripple etc.
        </p>
      </div>
      <div className="start">
        <button className="Started" onClick={loginWithPopup}>
          Lets Started
        </button>
      </div>
      <div className="bitcoincontainer">
        <div className="bitsubcoincontainer">
          <Craousel />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
