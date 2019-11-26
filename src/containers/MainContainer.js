import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const STOCKS_URL = 'http://localhost:3000/stocks';

class MainContainer extends Component {

  state = {
    allStocks: [],
    portfolioStocks: [],
    filteredStocks: [],
    sortedStocks: []
  }

  componentDidMount() {
    fetch(STOCKS_URL)
    .then(res => res.json())
    .then(stocksData => {
      this.setState({
        allStocks: stocksData,
        filteredStocks: stocksData,
      })
    })
  }

  addStockToPortfolio = (stock) => {
    this.setState({
      portfolioStocks: [...this.state.portfolioStocks, stock]
    })
  }

  deleteStockFromPortfolio = (stock) => {
    this.setState({
      portfolioStocks: this.state.portfolioStocks.filter(portfolio => portfolio !== stock)
    })
  }

  filterStocks = (filterType) => {
    filterType
    ? this.setState({
      filteredStocks: this.state.allStocks.filter(chosenStocks => chosenStocks.type === filterType )
    })
    : this.setState({
      filteredStocks: this.state.allStocks
    })
  }

  sortStocks = (sortType) => {
    if (sortType === "Alphabetically") {
      this.setState({
        sortedStocks: this.state.allStocks.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
        }) 
      })
    } else if (sortType === "Price") {
      this.setState({
        sortedStocks: this.state.allStocks.sort((a, b) => a.price - b.price)
      })
    } else {
      this.setState({
        sortedStocks: this.state.allStocks
      })
    }
  }

  render() {
    return (
      <div>
        <SearchBar filterStocks={this.filterStocks} sortStocks={this.sortStocks} />

          <div className="row">
            <div className="col-8">

              <StockContainer addStockToPortfolio={this.addStockToPortfolio} allStocks={this.state.filteredStocks} />

            </div>
            <div className="col-4">

              <PortfolioContainer portfolioStocks={this.state.portfolioStocks} deleteStockFromPortfolio={this.deleteStockFromPortfolio} />

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
