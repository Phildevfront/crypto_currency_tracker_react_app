import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa';
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom';
import './CoinPage.css'

const CoinPage = () => {
	const [coin, setCoin] = useState({});
	const params = useParams();

	const url =
	`https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&sparkline=true`;

	useEffect(() => {
		axios.get(url).then((response) => {
			setCoin(response.data);
			console.log(response.data);
		});
	}, [url])

  return (
	<div className='container'>
		<div className='wrapper'>
			<div className='coin-name'>
				{/* <img src={coin.image.large} alt='/'/> */}
				<div>
					<p className='coin-name_text'>{coin?.name} price</p>
					<p className='coin-name_symbol'>({coin.symbol?.toUpperCase()} / EUR)</p>
				</div>
			</div>

			<div className='market-data'>
				<div>
					<div className='market-data_wrapper_current_price'>
						{coin.market_data?.current_price ? (
							<p className='market-data_wrapper_current_price_price'>{coin.market_data.current_price.eur.toLocaleString()} €</p>
						) : null}
						<p>7 Day</p>
					</div>
					<div>
						<Sparklines data={coin.market_data?.sparkline_7d.price}>
							<SparklinesLine color='teal' />
						</Sparklines>
					</div>
					<div className='market-data_wrapper_market_cap'>
						 <div>
							<p className='market-data_text'>Market Cap</p>
							{coin.market_data?.market_cap ? (
							<p>{coin.market_data.market_cap.eur.toLocaleString()}€</p>
							) : null}
						 </div>
						 <div>
							<p className='market-data_text'>Volume (24h)</p>
							{coin.market_data?.market_cap ? (
							<p>{coin.market_data.total_volume.eur.toLocaleString()}€</p>
							) : null}
						 </div>
					</div>
					{/* <div className='market-data_wrapper_market_cap'>
						<div>
							<p className='market-data_wrapper_market_cap_text'>24h High</p>
							{coin.market_data?.high_24h ? (
							<p>{coin.market_data.high_24.eur.toLocaleString()}€</p>
							) : null}
						</div>
						<div>
							<p className='market-data_wrapper_market_cap_text'>24h Low</p>
							{coin.market_data?.low_24h ? (
							<p>{coin.market_data.low_24.eur.toLocaleString()}€</p>
							) : null}
						</div>
					</div> */}
				</div>
				<div>
					<p className='market-data_market_stats_text'>Market Stats</p>
					<div className='market-data_wrapper_market_stats_data'>
						<div>
							<p className='market-data_text'>Market Rank</p>
							{coin.market_cap_rank}
						</div>
						<div>
							<p className='market-data_text'>Hashing Algrithm</p>
							{coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
						</div>
						<div>
							<p className='market-data_text'>Trust Score</p>
							{coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
						</div>
					</div>
					<div className='market-data_wrapper_market_stats_data'>
						<div>
							<p className='market-data_text'>Price Change (24h)</p>
							{coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</p>) : null}
						</div>
						<div>
							<p className='market-data_text'>Price Change (7d)</p>
							{coin.market_data ? (<p>{coin.market_data.price_change_percentage_7d.toFixed(2)}%</p>) : null}
						</div>
						<div>
							<p className='market-data_text'>Price Change (14d)</p>
							{coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d.toFixed(2)}%</p>) : null}
						</div>
					</div>
					<div className='market-data_wrapper_market_stats_data'>
						<div>
							<p className='market-data_text'>Price Change (30d)</p>
							{coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d.toFixed(2)}%</p>) : null}
						</div>
						<div>
							<p className='market-data_text'>Price Change (60d)</p>
							{coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d.toFixed(2)}%</p>) : null}
						</div>
						<div>
							<p className='market-data_text'>Price Change (1y)</p>
							{coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y.toFixed(2)}%</p>) : null}
						</div>
					</div>
					<div className='socials'>
						<FaTwitter />
						<FaFacebook />
						<FaGithub />
					</div>
				</div>
			</div>
				{/* Description */}
			<div className='market-data_description'>
				<p className='market-data_description_name'>About {coin.name}</p>
				<p dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),}}></p>
			</div>
		</div>
	</div>
  )
}

export default CoinPage