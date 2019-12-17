import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const {portfolioStocks, deleteStockFromPortfolio} = this.props;
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          portfolioStocks.map(stock => <Stock key={stock.id} stock={stock} portfolioStocks={portfolioStocks} deleteStockFromPortfolio={deleteStockFromPortfolio}/>)
        }
      </div>
    );
  }

}

export default PortfolioContainer;
