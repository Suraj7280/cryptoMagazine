import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Cryptoinfo from "../Cryptoinfo/Cryptoinfo";
import Homepage from "../Homepage/Homepage";

export default function Loginredirect() {
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    console.log("authenticated");
  }, [isAuthenticated]);

  return <>{isAuthenticated ? <Cryptoinfo /> : <Homepage />}</>;
}
