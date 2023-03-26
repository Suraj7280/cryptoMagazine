import React from "react";
import Cryptotable from "../Cryptotable/Cryptotable";
import Header from "../Header/Header";
import "./Cryptoinfo.css";

function Cryptoinfo() {
  return (
    <>
      <div>
        <Header />
      </div>
      <Cryptotable />
    </>
  );
}

export default Cryptoinfo;
