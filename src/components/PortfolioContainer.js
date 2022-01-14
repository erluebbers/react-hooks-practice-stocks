import React from "react";
import Stock from "./Stock";

function PortfolioContainer( {portfolioStocks, setPortfolioStocks}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map(stock => {
        return <Stock stock={stock} key={stock.id+10}/>
      })}
    </div>
  );
}

export default PortfolioContainer;
