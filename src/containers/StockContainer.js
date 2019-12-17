import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const {allStocks, addStockToPortfolio} = this.props;
    return (
      <div>
        <h2>Stocks</h2>
        {
          allStocks.map(stock => <Stock key={stock.id} stock={stock} addStockToPortfolio={addStockToPortfolio} />)
        }
      </div>
    );
  }

}

export default StockContainer;



