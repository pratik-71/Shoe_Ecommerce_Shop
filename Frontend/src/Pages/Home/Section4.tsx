import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState } from "react";
import Shoe_card from "../../Components/Shoe_card";

const Section4 = () => {
  const [activeButton, setActiveButton] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 10,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1110 },
      items: 8,
    },
    tablet: {
      breakpoint: { max: 1100, min: 768 },
      items: 6,
    },
    mobile: {
      breakpoint: { max: 767, min: 516 },
      items: 4,
    },
    small_mobile: {
      breakpoint: { max: 515, min: 0 },
      items: 3,
    },
  };

  return (
    <section className="md:mx-8 mt-14">
      <div className="">
        <Carousel
          className="md:mx-8 "
          responsive={responsive}
          infinite={true}
          customTransition="transform 300ms ease-in-out"
          containerClass="carousel-container"
          arrows={true}
          renderButtonGroupOutside={true}
        >
          {array.map((index) => (
            <div key={index}>
              <button
                key={index}
                onClick={() => handleButtonClick(index)}
                className={`px-5 md:px-10 py-2 duration-100 text-center ${
                  activeButton === index
                    ? "bg-blue-500 px-10 text-white rounded-md"
                    : "px-10 bg-blue-100 rounded-3xl py-2 text-blue-700"
                }`}
              >
                Neo
              </button>
            </div>
          ))}
        </Carousel>

        <div className="flex flex-wrap items-center justify-center gap-2">
          {array.map(() => (
            <Shoe_card />
          ))}
        </div>

        <div className="flex gap-5 justify-center items-center mx-10">
          <hr className="w-1/2 border-t-2 border-gray-400"></hr>
          <button className="px-4 py-1 my-3 bg-blue-500 text-white rounded-xl hover:bg-blue-900 hover:scale-110 duration-100">
            More
          </button>
          <hr className="w-1/2 border-t-2 border-gray-400"></hr>
        </div>
      </div>
    </section>
  );
};

export default Section4;
