
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Special_edition_courasal from "../../assets/Home/Special_edition_courasal";
import "../../App.css"

const Section2 = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 8,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1110 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1100, min: 768 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 516 },
      items: 2,
    },
    small_mobile: {
      breakpoint: { max: 515, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="mx-8 mt-14">
        <div>
          <h3 className="text-center special_edition text-2xl font-bold">- SPECIAL EDITION -</h3>
        </div>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          customTransition="transform 500ms ease-in-out"
          containerClass="carousel-container"
          
        >
         {
            Special_edition_courasal.map((data,index)=>(
                <div key={index} className="flex hover:scale-y-110 hover:bg-gray-200 duration-100 my-5 flex-col items-center gap-2 justify-center mx-3 shadow-xl overflow-hidden rounded-xl">
                         <img src={data.image} alt={data.title} className="h-72 w-full"/>
                         <p className="font-bold text-xl">
                            {data.title}
                         </p>
                         <p>
                            Rs. {data.price}
                         </p>
                         <div className="text-white flex items-center gap-2 py-2">
                         <button className="bg-blue-500 rounded-md px-3 py-1">Buy Now </button>
                         <button className="bg-blue-500  rounded-md px-3 py-1">Add to Cart</button>
                         </div>
              </div>
            ))
         }
        </Carousel>
        <div className="flex gap-5 justify-center items-center">
  <hr className="w-1/2 border-t-2 border-gray-400"></hr>
  <button className="px-4 py-1 my-3 bg-blue-500 text-white rounded-xl hover:bg-blue-900 hover:scale-110 duration-100">More</button>
  <hr className="w-1/2 border-t-2 border-gray-400"></hr>
</div>

    </section>
  );
};

export default Section2;