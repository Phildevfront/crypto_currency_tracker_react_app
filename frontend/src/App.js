import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
// import Featured from './components/Featured';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinsBase from './pages/CoinsBase';
// import Contact from './pages/Contact';
import CoinPage from './pages/CoinPage'
import Footer from '../src/components/Footer'
import Earn from './components/Earn';
import Register from './components/Register'
import Login from './components/Login'



function App() {
  return (
   <BrowserRouter>
	<Navbar />
	<Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/register" element={<Register />} />
	</Routes>
	<Routes>
		<Route path="/hero" element={<Hero />} />
		<Route path="/earn" element={<Earn />} />
	</Routes>
   <Routes>
	  <Route path="coinsbase" element={<CoinsBase />}/>
	  <Route path="/coin/:coinId" element={<CoinPage />}>
		 <Route path=":coinId" />
	  </Route>
   </Routes>
   {/* <Routes>
	  <Route path="/contact" element={<Footer />}/>
   </Routes> */}
   <Footer />
  </BrowserRouter>
  )
}

export default App;
