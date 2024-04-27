import React from 'react';
import group134 from "../assets/Group143.png"

const Portfolio2 = () => {
 return (
  <div className='grid grid-cols-2'>
   
   <div className=' p-24'>
   <h1 className='ml-24 text-4xl text-blue justify-center font-semibold'><i>MEETINGS</i> </h1>
   <p>&nbsp;</p>
   <p className='text-xm text-neutral-500 text-justify'>L'Hôtel RaYa propose également des installations pour les réunions professionnelles. Que ce soit pour une retraite d'entreprise, une réunion d'affaires ou une conférence, l'établissement offre un cadre professionnel et organisé. Des services de restauration sont disponibles, ainsi que des pauses-rafraîchissements et une assistance à la planification pour donner vie à votre vision.</p>
   
   <p className='text-xm text-neutral-500 text-justify' >  Pour répondre à vos besoins techniques, l'hôtel met à disposition un projecteur LCD, des systèmes de sonorisation et d'autres équipements audiovisuels. Avec des forfaits à valeur ajoutée, il se classe parmi les meilleures destinations de réunion près de Béjaia.</p>
   
   <p className='text-xm text-neutral-500 text-justify'> La planification des réunions est conçue pour soutenir les objectifs spécifiques de chaque événement. Vous avez le choix entre des réunions entièrement préparées ou des collations rapides pour vous dynamiser pendant les pauses.

L’hotel RaYa saura répondre à toutes vos exigences.</p>
   </div>
   
   <div >
   <img src={group134} alt='Group134'  />
   </div>
  
  
  </div>
 );
};

export default Portfolio2;