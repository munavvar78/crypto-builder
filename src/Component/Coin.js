import React from "react";
import { Link } from "react-router-dom";
import './Coin.css'

const Coin = (props,priceChange) => {

  return (
    <div className="coinContainer">
      <div className="coinRow">
        <div className="coinData">
          <div className="coin">
            
            <img src={props.icon} alt=''/>
            <h1>{props.coinName}</h1>
            <p className="coinSymbol">{props.coinSymbol}</p>
            <p className="coinPrice">{props.price}</p>
            {props.priceChange < 0 ? (
              <p className="priceChange red">{props.priceChange}%</p>
            ) : (
              <p className="priceChange green">{props.priceChange}%</p>
            )}
            <Link to={`/CoinPage/${props.id}`} className="button">coin</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
