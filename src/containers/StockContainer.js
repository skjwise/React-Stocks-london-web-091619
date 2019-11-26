import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          this.props.allStocks.map(stock => <Stock stock={stock} addStockToPortfolio={this.props.addStockToPortfolio} />)
        }
      </div>
    );
  }

}

export default StockContainer;



