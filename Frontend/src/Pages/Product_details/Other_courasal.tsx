import Carousel from "react-multi-carousel";
import shoe from "../../assets/Home/Home page main shoe.png"
import "react-multi-carousel/lib/styles.css";

const Other_courasal = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1110 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1100, min: 768 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 767, min: 516 },
      items: 3,
    },
    small_mobile: {
      breakpoint: { max: 515, min: 0 },
      items: 2,
    },
  };

  return (
    <>
          <div className="mx-10 mt-10">
          <p className="text-center text-xl mb-5 ">Explore Other Products</p>
          <Carousel
            responsive={responsive}
            infinite={true}
            customTransition="transform 300ms ease-in-out"
            containerClass="carousel-container"
            arrows={true}
          >
            {array.map((index) => (
              <div key={index} className="flex flex-col items-center gap-2 cursor-pointer">
                <img src={shoe} alt="shoe" className="h-52 w-64 hover:rotate-[-16deg] duration-100"/>
                <p className="font-bold">MRP 4988 Rs.</p>
              </div>
            ))}
          </Carousel>


          <p className="text-center text-xl mb-5  mt-20">Explore Other Categories</p>
          <Carousel
            responsive={responsive}
            infinite={true}
            customTransition="transform 300ms ease-in-out"
            containerClass="carousel-container"
            arrows={true}
          >
            {array.map((index) => (
              <div key={index} className="flex flex-col items-center gap-2 cursor-pointer">
                <img src={shoe} alt="shoe" className="h-52 w-64 hover:rotate-[-16deg] duration-100"/>
                <p className="font-bold">MRP 4988 Rs.</p>
              </div>
            ))}
          </Carousel>
          </div>
       
    </>
  );
};

export default Other_courasal;
