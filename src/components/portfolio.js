import React from 'react';
import group24 from "../assets/Group142.png"
const Portfolio = () => {
  return (
  <div className='grid grid-cols-2'>
   <div >
   <img src={group24} alt='Group24' className='w-full h-auto' />
   </div>
   <div className=' pl-24 text-justify pt-32 pb-36'>
   <h1 className='text-4xl font-semibold  text-blue text-center'> <i>MARIAGES & CÉLÉBRATIONS</i> </h1>
   <p>&nbsp;</p>
   <p className='text-xm text-neutral-500'>L'Hôtel RaYa est un lieu idéal pour les mariages et les célébrations spéciales. Situé à environ vingt kilomètres de Bejaia, il offre un cadre moins encombré que les espaces événementiels du centre-ville. Avec son ambiance unique, ses intérieurs sobres et élégants, l'hôtel propose un espace événementiel imprégné d'une authentique atmosphère locale.</p>
   
   <p className='text-xm text-neutral-500'>Des forfaits et des expériences spéciaux sont disponibles pour créer un séjour de mariage vraiment mémorable. L'établissement offre la possibilité de rassembler votre famille pour une journée de détente au spa ou de dire au revoir à vos invités avec un petit-déjeuner d'adieu. Pour en savoir plus sur ces offres spéciales, vous pouvez contacter l'équipe de l'hôtel.</p>
   
    
  
   </div>
  </div>
  );
}

export default Portfolio;