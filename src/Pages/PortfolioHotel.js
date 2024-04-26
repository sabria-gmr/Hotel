import React from 'react';
import Navbar from '../components/Navbar';
import group23 from '../assets/Group23.png';
import Portfolio2 from '../components/Portfolio2';

import Portfolio from '../components/portfolio';
import Footer from '../components/Footer';

const PortfolioHotel = () => {
  return (
   <div>
   <Navbar />
   <div className='h-screen' style={{ backgroundImage: `url(${group23})`, backgroundSize: 'cover'}}>
   
   </div>
   <div className='flex-row'>
   <Portfolio/>
   <Portfolio2/>
   </div>
   <Footer/>

   </div>
  );
};

export default PortfolioHotel;