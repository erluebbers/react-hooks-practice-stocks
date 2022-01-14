import React from "react";
import Stock from "./Stock";

function StockContainer( {initialStocks, portfolioStocks, setPortfolioStocks} ) {


  return (
    <div>
      <h2>Stocks</h2>
      {initialStocks.map(stock => {
        return (
        <Stock 
          stock={stock} 
          key={stock.id}
          portfolioStocks={portfolioStocks} 
          setPortfolioStocks={setPortfolioStocks}
        />
        )
      })}
    </div>
  );
}

export default StockContainer;
