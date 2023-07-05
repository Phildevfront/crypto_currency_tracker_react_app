import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './CoinItem.css'

const CoinItem = ({ coin }) => {
  return (
	<tr className='item-container'>
		<td className='cell'><AiOutlineStar /></td>
		<td className='cell'>{coin.market_cap_rank}</td>
		<td className='cell'>
		  <div className='coin-image'>
		    <img src={coin.image} alt={coin.id} />
		    <p className='cell'>{coin.name}</p>
		  </div>
		</td>
		<td className='cell'>{coin.symbol}</td>
		<td className='cell'>{coin.current_price}</td>
		<td className='cell'>{coin.price_change_24h}</td>
		<td className='cell'>{coin.total_volume}</td>
		<td className='cell'>{coin.market_cap}</td>
		<td>
		<Sparklines data={coin.sparkline_in_7d.price}>
		    <SparklinesLine color="teal" />
		</Sparklines>
		</td>
	</tr>
  )
}

export default CoinItem