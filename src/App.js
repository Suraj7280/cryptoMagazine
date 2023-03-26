import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cryptodetail from "./component/Cryptodetail/Cryptodetail";
import Cryptoinfo from "./component/Cryptoinfo/Cryptoinfo";
import Detailinfo from "./component/Detailinfo/Detailinfo";
import Homepage from "./component/Homepage/Homepage";
import Loginredirect from "./component/Loginredirect/Loginredirect";
import Relogin from "./component/Relogin/Relogin";

import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <BrowserRouter>
        {isAuthenticated ? (
          <Routes>
            <Route path="/" element={<Cryptoinfo />} />
            <Route path="Cryptodetail" element={<Cryptodetail />} />
            <Route path="/coin/:id" element={<Detailinfo />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Homepage />} />
            {/* <Route path="Relogin" element={<Relogin />} /> */}
            {/* <Route path="Loginredirect" element={<Loginredirect />} /> */}
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
