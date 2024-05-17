import React, { useState } from 'react';
import shoe from "../../assets/Home/Home page main shoe.png";
import "react-multi-carousel/lib/styles.css";
import Other_courasal from './Other_courasal';
import Product_Accordination from './Product_Accordination';
import Review_progress from './Review_progress';

const Product_details = () => {
  const [selectedSize, setSelectedSize] = useState(null);


  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-12 mt-20 '>
        
        <div className='col-span-6 flex items-center justify-center'>
          <img src={shoe} alt='shoe' className='items-center justify-center' />
        </div>

        <div className='col-span-6 flex flex-col text-center justify-center px-10'>
          <h1 className='text-3xl font-bold text-blue-500 mb-3'>OXY PRIME S-71</h1>
          <hr className='h-4 mb-3'></hr>
          <p className='mb-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, odit eveniet!
            Dolorem hic aliquid pariatur quis vel iste minus atque sapiente, ratione,
            praesentium aperiam fugiat sequi obcaecati nam iure nobis nostrum. Dolor ullam
            laboriosam quas?</p>

          <div className='text-left mb-3'>
            <p className='text-left text-gray-500'>( MRP includes all taxes )</p>
            <p className='text-lg font-bold'>MRP - 5999 Rs.</p>
          </div>

          <p className='text-left text-'>Select size - </p>

          <div className='flex flex-wrap justify-center gap-3 mb-5'>
            {[6, 7, 8, 9, 10, 11].map(size => (
              <button
                key={size}
                className={`px-3 py-4 rounded-xl border-2 border-black ${selectedSize === size ? 'bg-blue-500 text-white border-none' : ''} hover:border-blue-500`}
                onClick={() => setSelectedSize(size)}
              >
                UK {size}
              </button>
            ))}
          </div>

         <div className='flex flex-col items-center mb-5'>
         <p className='text-md text-left mb-3'>Select quantity</p>
         <input type='number' placeholder='Enter Quantity' className=' w-full md:w-1/2 border-gray-500 border-2 rounded-3xl px-3 py-2'/>
        </div>

        <div className='flex flex-col gap-2 items-center justify-center'>
        <button className='px-5 py-2 block rounded-xl text-white bg-blue-500 hover:scale-110 hover:bg-blue-800 duration-100 '>Buy Now</button>
        <button className='px-5 mb-5 py-2 block rounded-xl bg-yellow-500 hover:scale-x-110 hover:border-2 hover:border-black duration-100'>Add to Cart</button>
        </div>
          
        </div>
      </div>


      <div className='grid grid-cols-1 px-5 md:grid-cols-2'>

          <div className='col-span-1'>
            <Review_progress/>
          </div>

          <div className='col-span-1'>
                <Product_Accordination/>
          </div>

      </div>

        
       <Other_courasal />
    </div>
  );
};

export default Product_details;
