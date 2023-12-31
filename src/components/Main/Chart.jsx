import React, { useContext } from "react";
import { Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Colors,
  Tooltip,
} from "chart.js";
import StockContext from "../../contexts/StockContext";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Colors,
  Tooltip,

);

ChartJS.defaults.color = "#fff";
ChartJS.defaults.borderColor = "#fff";
ChartJS.defaults.scales.category.zeroLineColor = "#fff";

const Chart = () => {
  const context = useContext(StockContext);

  const stockInfo = context.stockInfo;

  const data = {
    labels: stockInfo.days,
    datasets: [

      {
        label: " Stock Price",
        data: stockInfo.predicted_prices,
        backgroundColor: "#14f011",
        borderColor: "#11fa11",
        pointBorderColor: "white",
        tension: 0,
        fill: false,
        pointHoverRadius: 7.5,
        pointBackgroundColor: "white",
      },

    ],
  };

  const options = {
    plugins: {
      legend: true,
    },

    elements: {
      point: {
        pointStyle: "circle",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          color: "rgba(255,0,0,0.1)",
          borderColor: "red",
        },
      },
      y: {
        ticks: {
          maxTicksLimit: 100,
        },
        max: Math.max(...stockInfo.predicted_prices),
        min: Math.min(...stockInfo.predicted_prices),
        grid: {
          display: false,
          color: "rgba(0,255,0,0.9)",
          borderColor: "green",
          zeroLineColor: "#fff",
        },
      },
    },
  };
  return (
    <div className="2xl:h-[700px] 2xl:w-[1100px] min-[360px]:w-[320px] min-[360px]:h-[200px]  min-[390px]:w-[340px] min-[400px]:w-[370px] min-[500px]:w-[500px] min-[500px]:h-[280px] md:w-[690px] md:h-[800px] min-[800px]:w-[750px] min-[900px]:w-[840px] lg:w-[950px] min-[1080px]:w-[850px] ">
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Chart;