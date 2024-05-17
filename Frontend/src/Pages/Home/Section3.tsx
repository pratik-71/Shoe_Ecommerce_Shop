
import shoe_right from "../../assets/Home/shoes_right.png"
import shoe_left from "../../assets/Home/shoes_left.png"

const Section3 = () => {
  return (
    <>
      <div className='md:mx-10 my-5 flex flex-wrap  items-center border-4 justify-center gap-2 shadow-xl rounded-3xl'>

            <img src={shoe_left} alt="shoe" className=" h-52 md:h-80"/>

            <div className="flex flex-col items-center gap-2 px-3">
              <h1 className="text-2xl text-blue-500 font-bold">FEEL THE SUPIORITY</h1>
              <h3 className="text-2xl text-blue-500 font-bold">With OXY</h3>
              <p className="text-center md:w-96">
                Experience the epitome of luxury in every step with our latest
                shoe collection. Meticulously crafted for both style and
                comfort, our shoes redefine elegance and performance. Whether
                you're navigating city streets or commanding the boardroom, our
                footwear ensures you stride with confidence and grace. Elevate
                your look and elevate your game with OXY.
              </p>
              <button className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-800 hover:scale-110 duration-100">Know More</button>
              </div>


              <img src={shoe_right} alt="shoe" className=" h-52 md:h-80"/>

      </div>
    </>
  )
}

export default Section3
