import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CoinItem from '../components/CoinItem';
import './CoinBase.css'

const CoinsBase = () => {

  const [searchText, setSearchText] = useState('');
  const [coins, setCoins] = useState([]);

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=true&locale=fr'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      console.log(response.data)
    })
  },[url])

  return (
	<div className='container'>
    <div className='search-wrapper'>
      <h5>Search Crypto</h5>
      <form>
        <input
        onChange={(e) => setSearchText(e.target.value)}
        className='search-data'
        type='text'
        placeholder='Search a coin' />
      </form>
    </div>
   <table className='table'>
    <thead>
      <tr className='row'>
        <th className='cell'></th>
        <th>#</th>
        <th>Coin</th>
        <th>Symbol</th>
        <th>Price</th>
        <th>24h</th>
        <th>24h Volume</th>
        <th>Mkt</th>
        <th>Last 7 Days</th>
      </tr>
    </thead>
    <tbody>
      {coins
        // eslint-disable-next-line array-callback-return
        .filter((value) => {
          if(searchText === '') {
            return value;
          } else if (
            value.name.toLowerCase().includes(searchText.toLowerCase())
          ) {
            return value
          }
        })
          .map((coin) => (
          <CoinItem key={coin.id} coin={coin} />
        ))
      }
    </tbody>
   </table>
  </div>
  );
};

export default CoinsBase