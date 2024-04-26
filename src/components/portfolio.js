import React from 'react';
import group24 from "../assets/Group142.png"
const Portfolio = () => {
  return (
  <div className='grid grid-cols-2'>
   <div >
   <img src={group24} alt='Group24' className='w-full h-auto' />
   </div>
   <div className=' p-32'>
   <h1 className='text-4xl'>A propos de nous</h1>
   <p>&nbsp;</p>
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nisl tincidunt urna, id aliquet nunc nisl id nunc. Nulla facilisi. Sed id nunc auctor, aliquet nunc id .</p>
   
   <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl id tincidunt tincidunt, nunc nisl tincidunt urna, id aliquet nunc nisl id nunc. Nulla facilisi. Sed id nunc auctor, aliquet nunc id."</p>
   
    
  
   </div>
  </div>
  );
}

export default Portfolio;