import React, { useState, useEffect } from "react";
import "./HistoryChart.css";
import { useParams } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);



const Historychart = () => {
  const { id } = useParams();
  const [coins, setCoins] = useState([]);

  const fetchCoinData = () => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`
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

  const coinChartData = coins.prices?.map((value) => ({
    x: value[0],
    y: value[1].toFixed(2)
  }));
  console.log(coinChartData);

  const options = {
    responsive: true,
    
  };

  const data = {
    labels: coinChartData?.map(value => value.x),
    datasets: [
      {
        fill: true,
        label: id,
        data: coinChartData?.map(value => value.y),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="chart">
      <Line options={options} data={data} redraw />
    </div>
  );
};

export default Historychart;
