import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";
import Historychart from "../Historychart/Historychart";
import "./Detailinfo.css";

const Detailinfo = () => {
  const { id } = useParams();
  const [coins, setCoins] = useState([]);

  const fetchCoinData = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
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
      <div>
        <Header />
      </div>
      <div>
        
        <div className="detailcontainer">
          <img
            className="iconimage"
            src={coins.image?.small}
            width={90}
            height={90}
            alt={coins?.name}
          />
        </div>
        <div>
          <div className="coinname">{coins.name}</div>
        </div>
        <div>
          <p
            className="description"
            dangerouslySetInnerHTML={{ __html: coins.description?.en }}
          ></p>
        </div>
        <Historychart />
      </div>
    </>
  );
};

export default Detailinfo;
