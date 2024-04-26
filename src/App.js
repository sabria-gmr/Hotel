import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Chambre from './components/Chambre'
import Avis from './components/Avis'
import Footer from './components/Footer'
import Hero from './components/Hero'
import PortfolioHotel from './Pages/PortfolioHotel'



function App() {

  return (
    <Router>
      <div className='bg-white dark:bg-black'>
        <PortfolioHotel/>
      </div>
      </Router>



  )
}

export default App
