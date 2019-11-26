import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          this.props.portfolioStocks.map(stock => <Stock stock={stock} portfolioStocks={this.props.portfolioStocks} deleteStockFromPortfolio={this.props.deleteStockFromPortfolio}/>)
        }
      </div>
    );
  }

}

export default PortfolioContainer;
