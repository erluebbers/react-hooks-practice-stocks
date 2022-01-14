import React, {useState} from "react";

function Stock( {stock, portfolioStocks, setPortfolioStocks} ) {
  const { name, price, ticker } = stock

  function handlePortfolioClick() {
    console.log(portfolioStocks)
  }

  return (
    <div>
      <div className="card" onClick={handlePortfolioClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
