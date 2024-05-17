import React from "react";
import avatar from "../../assets/Navbar/avatar.png";
import { FaStar } from "react-icons/fa";

const Product_Accordination = () => {
  return (
    <div>
      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
        <div className="py-5 border-b-2">
          <details className="group">
            <summary className="flex duration-200 justify-between items-center font-medium cursor-pointer list-none">
              <span className="text-lg"> Product description </span>
              <span className="transition group-open:rotate-180 duration-200">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="flex flex-col text-neutral-600 mt-3 duration-100 group-open:animate-fadeIn">
              <p className="flex gap-5 ">
                <span>Material</span>
                <span>:</span>
                <span>Leather</span>
              </p>
              <p className="flex gap-5">
                <span>Company</span>
                <span>:</span>
                <span>OXY</span>
              </p>
              <p className="flex gap-5 ">
                <span>Category</span>
                <span>:</span>
                <span>PRIME</span>
              </p>
              <p className="flex gap-5">
                <span>Origin</span>
                <span>:</span>
                <span>India</span>
              </p>
            </p>
          </details>
        </div>
      </div>

      <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto ">
        <div className="py-5 border-b-2 mb-10">
          <details className="group">
            <summary className="flex duration-200 justify-between items-center font-medium cursor-pointer list-none">
              <span className="text-lg"> Shoe Reviews </span>
              <span className="transition group-open:rotate-180 duration-200">
                <svg
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="flex gap-3 h-96 overflow-y-scroll  flex-col text-neutral-600 mt-3 duration-100 group-open:animate-fadeIn">
              
              <div className="flex items-center gap-2">
                <img src={avatar} className="h-8 rounded-full" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam commodi nulla iure aut quidem modi sed delectus velit ad?</p>
              <hr></hr>

              <div className="flex items-center gap-2">
                <img src={avatar} className="h-8 rounded-full" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam commodi nulla iure aut quidem modi sed delectus velit ad?</p>
              <hr></hr>



              <div className="flex items-center gap-2">
                <img src={avatar} className="h-8 rounded-full" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam commodi nulla iure aut quidem modi sed delectus velit ad?</p>
              <hr></hr>

              <div className="flex items-center gap-2">
                <img src={avatar} className="h-8 rounded-full" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam commodi nulla iure aut quidem modi sed delectus velit ad?</p>
              <hr></hr>

              <div className="flex items-center gap-2">
                <img src={avatar} className="h-8 rounded-full" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam commodi nulla iure aut quidem modi sed delectus velit ad?</p>
              <hr></hr>

              <div className="flex items-center gap-2">
                <img src={avatar} className="h-8 rounded-full" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam commodi nulla iure aut quidem modi sed delectus velit ad?</p>
              <hr></hr>
              
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Product_Accordination;
