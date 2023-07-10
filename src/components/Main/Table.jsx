import { useContext } from "react";
import StockContext from "../../contexts/StockContext";

const Table = () => {
  const s = useContext(StockContext);
  const stockInfo = s.stockInfo;

  return (
    <div>
      
      <table className="text-white mt-5 shadow-2xl bg-[rgba(22,21,21,0.28)] border border-spacing-2 min-[280px]:w-[250px] min-[360px]:w-[340px] md:w-[360px] md:font-semibold min-[900px]:w-[380px]  min-[900px]:text-xl lg:w-[600px] min-[1080px]:text-3xl   xl:text-base 2xl:w-[400px] border-seperate border-slate-500">
        <caption className="caption-top text-lg font-bold pb-1 min-[900px]:text-xl min-[1080px]:text-3xl xl:text-xl mb-2">
          Table : Days & Predicted Stock-Prices
        </caption>
        <thead>
          <tr className="bg-slate-700 hover:">
            <th className="border border-slate-600 py-4">Day</th>
            <th className="border border-slate-600">Predicted Price</th>
          </tr>
        </thead>
        <tbody>
          {stockInfo.days.map((day, index) => (
            <tr key={index} className="text-center cursor-pointer duration-300 hover:bg-slate-800">
              <td className="py-1">{day}</td>
              <td>
                {parseFloat(stockInfo.predicted_prices[index].toFixed(2))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;