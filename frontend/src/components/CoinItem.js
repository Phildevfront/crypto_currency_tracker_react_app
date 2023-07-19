import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import './CoinItem.css'

const CoinItem = ({ coin }) => {
  return (
	<tr className='item-container'>
		<td className='item-data'><AiOutlineStar /></td>
		<td className='item-data'>{coin.market_cap_rank}</td>
		<td className='item-data'>
			<Link to={`/coin/${coin.id}`}>
				<div className='coin-image'>
					<img src={coin.image} alt={coin.id} />
					<p className='coin-name'>{coin.name}</p>
				</div>
			</Link>
		</td>
		<td className='item-data'>{coin.symbol.toUpperCase()}</td>
		<td className='item-data'>{coin.current_price.toLocaleString()} €</td>

		<td className='item-data'>
			{coin.price_change_percentage_24h > 0 ? (
				<p className='green'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
			) : (
				<p className='red'>{coin.price_change_percentage_24h.toFixed(2)}%</p>
			)}
			</td>
		<td className='item-data'>{coin.total_volume.toLocaleString()} €</td>
		<td className='item-data'>{coin.market_cap.toLocaleString()} €</td>
		<td>
		<Sparklines data={coin.sparkline_in_7d.price}>
		    <SparklinesLine color="teal" />
		</Sparklines>
		</td>
	</tr>
  )
}

export default CoinItem