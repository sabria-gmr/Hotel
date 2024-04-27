import React from 'react'
import ch1 from '../assets/terasse.jpg'



function Cafeteria() {
    return (

        <div className='bg-white  flex items-center justify-center  rounded-xl   '>
            
            <div className=' grid grid-cols-1 font-poppins w-72  p-3 bg-white border-x border-y   rounded-xl md:w-16 lg:w-80 '>
                <img className=' object-cover rounded-xl md:w-32 lg:w-80' src={ch1} width={70} alt='pc' />
                {/* <p className='-mt-36 rounded-lg border border-white'>Developpement</p> */}
                <div className='p-2 mt-2'>
                    <h2 className='font-bold tracking-wider dark:text-white  '> Caféteria </h2>
                    <p className='text-gray-500 text-xs mt-1  dark:text-gray-1  dark:text-neutral-400'> 
                    Savourer un délicieux petit déjeuner ou une pause café relaxante est un moment privilégié
                     à l'hôtel. Dans un cadre élégant et paisible, profitez de notre sélection de viennoiseries accompagnée d'un café,
                     que ce soit pour une courte pause ou un moment de détente prolongé.
                    
                     </p>

                    
                </div>

                
            </div>
        </div >

    )
}

export default Cafeteria
