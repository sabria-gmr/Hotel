import React from 'react';
import Restaurant from './Restaurant'
import '../Styles/style.css';
import Cafeteria from './Cafeteria';


function Restaurants() {
  return (
    <div className="chambre-background h-full  flex flex-col items-center justify-center">
      <div className="text-center  pt-20">
        <h1 className="text-6xl text-white tracking-wider font-medium mb-4">Meilleurs Restaurants </h1>
        <p className="text-xm tracking-wider text-white font-semibold">
        Bienvenue dans notre restaurant, un joyau <br/>gastronomique niché au cœur de notre hôtel.
        </p>
      </div>
      <div className='pb-20 pt-10 grid gap-40 grid-cols-2 items-center justify-between'><Cafeteria/>  <Restaurant/></div>
      
    </div>
  );
}

export default Restaurants;
