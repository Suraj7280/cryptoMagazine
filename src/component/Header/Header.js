import React from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  const { user, logout } = useAuth0();
  return (
    <>
      <div className="header">
        <div className="containerheader">
          <div className="left">
            <h1 className="cryptotexts">CryptoMagazine</h1>
          </div>

          <div className="right">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
