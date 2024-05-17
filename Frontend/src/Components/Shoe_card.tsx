import img from "../assets/Home/Home page main shoe.png"

const Shoe_card = () => {
  return (
    <div>
        <div className="hover:scale-110  hover:shadow-lg hover:shadow-cyan-500/50 flex  duration-100 my-5 flex-col items-center gap-2 justify-center mx-3 shadow-xl overflow-hidden rounded-xl">
              <img src={img} className="h-44 w-36    md:h-60  md:w-72 " alt="shoe" />
              <p className="font-bold text-md md:text-xl">OXY PRIME X</p>
              <p>Rs. 3677</p>
              <div className="text-white flex flex-col md:flex-row items-center gap-2 py-2">
                <button className="bg-blue-500 rounded-md px-1 md:px-3 py-1">Buy Now</button>
                <button className="bg-blue-500 rounded-md px-1 md:px-3 py-1">Add to Cart</button>
              </div>
            </div>
    </div>
  )
}

export default Shoe_card
