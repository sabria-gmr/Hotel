import React from 'react'
import ch1 from '../assets/rest.jpg'



function Restaurant() {
    return (

        <div className='bg-white  flex items-center justify-center  rounded-xl   '>
            
            <div className=' grid grid-cols-1 font-poppins w-72  p-3 bg-white border-x border-y   rounded-xl md:w-16 lg:w-80 '>
                <img className=' object-cover rounded-xl md:w-32 lg:w-80' src={ch1} width={80} alt='pc' />
                {/* <p className='-mt-36 rounded-lg border border-white'>Developpement</p> */}
                <div className='p-2 mt-2'>
                    <h2 className='font-bold tracking-wider dark:text-white  '> Restaurant Panomarique  </h2>
                    <p className='text-gray-500 text-xs mt-1  dark:text-gray-1  dark:text-neutral-400'> 
                    Situé au sommet de l'hôtel, notre restaurant panoramique offre une cuisine exquise et des desserts succulents dans une ambiance cosmopolite. Avec une vue imprenable sur la mer, 
                     découvrez une cuisine fusion alliant saveurs algériennes et française . </p>

                    
                </div>

                
            </div>
        </div >

    )
}

export default Restaurant
