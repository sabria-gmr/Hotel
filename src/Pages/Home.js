import React from 'react';
import Cards from '../components/Cards';
import Chambre from '../components/Chambre';
import Avis from '../components/Avis';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Restaurants from '../components/Restaurants'
import '../Styles/style.css'

function Home() {
    return (
        <div className="home-page">
           
            <Hero/>
            <Chambre/>
            <Cards/>
            <Restaurants/>
            <Avis/>
            <Footer/>
        </div>
    );
}

export default Home;
