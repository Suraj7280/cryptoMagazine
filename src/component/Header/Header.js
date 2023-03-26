import React from "react";
import "./Header.css";
import Sidebar from "../Sidebar/Sidebar";

function Header() {
  
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
