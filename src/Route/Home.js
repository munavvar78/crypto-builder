import axios from "axios";
import React, { useEffect,useState } from "react";
import Coin from "../Component/Coin";


const Home = () => {
  const [cryptos, setcryptos] = useState([])
  const [searchTerm, setsearchTerm] = useState('');
  const [isLoading, setisLoading] = useState(false)

  useEffect(()=>{
    refreshPage()
  },[])

  const filterCoins=cryptos.filter((coin)=>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const handleSearch=(event)=>{
    setsearchTerm(event.target.value)
  }
    const refreshPage = async () => {
      setisLoading(true)
      const response = await axios
        .get("https://api.coingecko.com/api/v3/coins")
        .catch((err) => {
          console.log("Err", err);
        });
        console.log(response.data)
        setisLoading(false)
      setcryptos(response.data)
       } ;

  return (
    <div className="App">
      <div className="headerContainer">
        <h1>Welcome To The CryptoChecker</h1>
        <div className="buttonContainer">
        <input
        style={{
          textTransform:"lowercase"
        }}
            placeholder="Search for a Coin"
            type="text"
            autoCapitalize = 'none'
            onChange={handleSearch}
          />
          <img onClick={refreshPage} src='https://raw.githubusercontent.com/colinpereira/crypto-app/master/src/Images/refresh.png' alt=""></img>

        </div>
      </div>
      <div className="coinContainer"></div>
      {isLoading && <h1 className="loadingMsg">Data Loading...</h1>}
      {filterCoins.map((coins)=>{
        return(
          <Coin
          key={coins.id}
          id={coins.id}
          icon={coins.image.thumb}
          coinName={coins.name}
          coinSymbol={coins.symbol}
          price={coins.market_data.current_price.inr}
          marketCap={coins.market_cap}
          priceChange={coins.market_data.price_change_percentage_24h_in_currency.inr}
        />
      );
      })}
    </div>
  );
};

export default Home;
