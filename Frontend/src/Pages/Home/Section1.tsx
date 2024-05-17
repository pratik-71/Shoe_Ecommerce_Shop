import { useState } from "react";
import main_shoe from "../../assets/Home/Home page main shoe.png"
import { Home_images } from "../../assets/Home/Home_images"
import { FiShoppingCart } from "react-icons/fi";

import { Link } from 'react-router-dom'

const Section1 = () => {

    const [homeimg,sethomeimg] = useState(Home_images[0])

  return (
    <>
      <div className='md:mx-5 grid grid-cols-1 md:grid-cols-2 my-10 '>
        
           <div className='col-span-1 flex items-center justify-center'>
            <img src={homeimg.image}
                alt="shoe-image"
                className="img-fluid  h-[45vh] w-[450px] md:h-[70vh] md:w-[650px]"/>
            </div>


            <div  className='col-span-1 mt-12
             flex flex-col text-center items-center gap-2 justify-center px-2 md:px-12'>

                <h1 className='text-4xl font-bold text-blue-500'>{homeimg.title}</h1>
                <h4 className='mt-2 italic font-bold' > THIS TIME UNLOCK YOUR TRUE POTENTIAL </h4>
                <p className="px-4 m-4 ">
                    Inspired by the sky's dynamic nature, the AJ1 blends
                    leather, suede, and textiles, creating a harmonious blend of
                    texture and tone. With its celestial blue hue, it embodies
                    the essence of the heavens. Step into these sneakers and
                    embark on a journey where style meets the stormy skies,
                    unlocking your inner celestial elegance.
                  </p>
                  <p className="font-bold">Rs {homeimg.price}</p>
                  <Link  to="">
                    <button 
                    className="bg-blue-500 text-white border-0 rounded-lg px-4 py-1 hover:scale-125 duration-100">Buy Now</button>
                  </Link>

                  <p>Explore more</p>

                  <div >
                        <div className="flex flex-wrap mt-6 justify-center gap-5 items-center">
                            {
                                Home_images.map((shoe,index)=>(
                                    <div key={index} onClick={()=>sethomeimg(shoe)} className="rounded-xl hover:bg-gray-200 hover:border-2 hover:scale-110 duration-100 w-32 h-32 md:w-44 md:h-44 flex flex-col items-center justify-center">
                                        <img src={shoe.image} alt="shoe" className="hover:rotate-[10deg] duration-100"/>
                                        <p className="font-bold">{shoe.title}</p>
                                       <div className="flex items-center gap-2">
                                       <p className="text-sm">Rs. {shoe.price}</p> 
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded-xl "><FiShoppingCart/></button>
                                        </div>
                                          
                                     </div>   
                                ))
                            }
                        </div>
                  </div>  

            </div>

      </div>  
    </>
  )
}

export default Section1
