import React, { useEffect, useState } from "react";
import "./Cryptotable.css";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";
import { Link } from "react-router-dom";


function Cryptotable() {
  const [coins, setCoins] = useState([]);

  const fetchCoinData = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
      .then((response) => {
        return response.json();
      })
      .then((coins) => {
        console.log(coins);
        setCoins(coins);
      });
  };

  useEffect(() => {
    fetchCoinData();
  }, []);
  console.log(coins);

  return (
    <><div className="datatext"><Link to="/Cryptodetail" className="unedrli"><button className="button-data">See Only Data</button></Link></div>
      
      {coins.map((user) => (
        <Link to={`/coin/${user.id}`} className="textdeco">
          <div className="tablecontainer">
            <span className="subtablecontainer">
              <span className="tablebox">
                <div className="subtablebox">
                  <div className="imagebox">
                    <img
                      src={user.image}
                      width={90}
                      height={90}
                      alt="coins"
                    ></img>
                  </div>
                  <div className="cryptext">
                    <p className="cryp">
                      <b>Name:&nbsp;&nbsp;</b>
                      {user.name} ({user.symbol})
                    </p>
                    <p className="cryp">
                      <b>Price: &nbsp;&nbsp;</b>${user.current_price}
                    </p>

                    <p className="cryp">
                      <b>price_change_24h: </b>
                      <span
                        className={` ${
                          user.price_change_percentage_24h < 0 ? "red" : "green"
                        }`}
                      >
                        {user.price_change_percentage_24h < 0 ? (
                          <AiOutlineFall />
                        ) : (
                          <AiOutlineRise />
                        )}
                        {user.price_change_percentage_24h}%
                      </span>
                    </p>
                    <p className="cryp">
                      {" "}
                      <b>Market Cap: &nbsp;&nbsp;</b>
                      ${user.market_cap}
                    </p>
                  </div>
                </div>
              </span>
            </span>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Cryptotable;
