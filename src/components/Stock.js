import React from 'react'

const Stock = (props) => (
  <div>
    <div className="card">
        <div className="card-body" key={props.stock.id} onClick={() => props.addStockToPortfolio ? props.addStockToPortfolio(props.stock) : props.deleteStockFromPortfolio(props.stock)} >
        <h5 className="card-title">{props.stock.name}</h5>
        <p className="card-text">{props.stock.ticker}: {props.stock.price}</p>
      </div>
    </div>


  </div>
);

export default Stock

