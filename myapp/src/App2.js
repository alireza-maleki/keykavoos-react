import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App2.css";
import Logo from "./images/Search.jpg";
import Loader from "./Loader";

const App2 = () => {
  const [apiData, setApiData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [fil, setFil] = useState("");

  const getDataHandler = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false&price_change_percentage=7d"
      );
      setApiData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getDataHandler();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="header">
            <img style={{ width: "40px", height: "40px" }} src={Logo} />{" "}
            <input
              type="search"
              placeholder="Search..."
              className="inputStyle"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <select onChange={(e) => setFil(e.target.value)}>
              <option>Marcket-cap-rank</option>
              <option>Max</option>
              <option>Min</option>
            </select>
          </div>
          <table className="text-center table">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Symbol</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {apiData
                .filter((item, index) => {
                  return item.name.toLowerCase().includes(search.trim()) || item.symbol.toLowerCase().includes(search.trim());
                })
                .sort((a, b) => {
                  switch (fil) {
                    case "Marcket-cap-rank":
                      return a.market_cap_rank - b.market_cap_rank;
                    case "Max":
                      return b.current_price - a.current_price;
                    case "Min":
                      return a.current_price - b.current_price;
                  
                    default:
                      break;
                  }
                }).map((item, index) => (
                  <tr key={index}>
                    <th>
                      <img
                        src={item.image}
                        style={{ width: "40px", height: "40px" }}
                      />
                    </th>
                    <th>{item.symbol}</th>
                    <th>{item.name}</th>
                    <th>{item.current_price}</th>
                  </tr>
                ))}
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default App2;
