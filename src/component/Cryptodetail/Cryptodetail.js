import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./Cryptodetail.css";
import { AiOutlineFall, AiOutlineRise } from "react-icons/ai";

const Cryptodetail = () => {
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
    <>
      <Header />
      <div className="cryptodetail">
        <div className="cryptodatas">
          <table class="table">
            <thead>
              <tr>
                <th score="col">Coin</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">price_change_24h: </th>
                <th scope="col">Market Cap:</th>
              </tr>
            </thead>
            {coins.map((user) => (
              <tbody>
                <tr>
                  <th scope="row">
                    <img
                      src={user.image}
                      width={50}
                      height={50}
                      alt="coins"
                    ></img>
                  </th>
                  <td>
                    {user.name} ({user.symbol})
                  </td>
                  <td>${user.current_price}</td>
                  <td>
                    {" "}
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
                  </td>
                  <td>${user.market_cap}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
};

export default Cryptodetail;
