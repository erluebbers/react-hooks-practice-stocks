import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [initialStocks, setInitialStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(r => r.json())
      .then(data => setInitialStocks(data))
  }, [])

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            initialStocks={initialStocks}
            portfolioStocks={portfolioStocks} 
            setPortfolioStocks={setPortfolioStocks}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolioStocks={portfolioStocks} 
            setPortfolioStocks={setPortfolioStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
