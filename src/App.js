import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Chambre from './components/Chambre'
import Avis from './components/Avis'
import Footer from './components/Footer'
import ReservationForm from './components/ReservationForm'
import PortfolioHotel from './Pages/PortfolioHotel'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import './Styles/style.css'
import './App.css'
import Restaurants from './components/Restaurants'



const App = () => {
  return (
    <Router>
       <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/reservation" element={<ReservationForm />} />
        <Route path='/propos' element={<PortfolioHotel />} />
        <Route path='/chambres' element={<Chambre />} />
        <Route path='/restaurants' element={<Restaurants />} />
        <Route path='/contact' element={<Footer />} />
        <Route path='/explore' element={<Avis />} />


      </Routes>

    </Router>
  );
};
export default App
