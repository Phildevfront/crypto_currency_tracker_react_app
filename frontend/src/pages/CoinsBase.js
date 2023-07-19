import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CoinItem from '../components/CoinItem';
import './CoinsBase.css'

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
        <th className='cell'>#</th>
        <th className='cell'>Coin</th>
        <th className='cell'>Symbol</th>
        <th className='cell'>Price</th>
        <th className='cell'>24h</th>
        <th className='cell'>24h Volume</th>
        <th className='cell'>Mkt</th>
        <th className='cell'>Last 7 Days</th>
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