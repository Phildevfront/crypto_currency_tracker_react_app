import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinsBase from './pages/CoinsBase';
import Contact from './pages/Contact';



function App() {
  return (
   <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero />}/>
   </Routes>
    <Routes>
      <Route path="/featured" element={<Featured />}/>
   </Routes>
   <Routes>
      <Route path="/coinsbase" element={<CoinsBase />}/>
   </Routes>
   <Routes>
      <Route path="/contact" element={<Contact />}/>
   </Routes>
  </BrowserRouter>
  )
}

export default App;
