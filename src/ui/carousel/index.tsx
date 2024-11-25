import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  category: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Next = (props: { onClick?: React.MouseEventHandler<HTMLDivElement> }) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-[-3.5rem] z-10 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <SlArrowRight style={{ color: "black", fontSize: "24px" }} />
    </div>
  );
};

const Previous = (props: {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}) => {
  const { onClick } = props;
  

  return (
    <div
      className="absolute top-1/2 left-[-3.5rem] z-10 transform -translate-y-1/2 cursor-pointer"
      onClick={onClick}
    >
      <SlArrowLeft style={{ color: "black", fontSize: "24px" }} />
    </div>
  );
};

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const numOfSlides = isSmallDevice ? 1 : 3;
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: numOfSlides,
    slidesToScroll: numOfSlides,
    nextArrow: <Next />,
    prevArrow: <Previous />,
  };

  return (
    <div className="py-10 w-[60%]">
      <div className="px-3"> {/* Add padding to container to prevent cut-off */}
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-3"> {/* Add horizontal padding for spacing */}
              <div className="bg-white shadow-md flex flex-col justify-between h-full">
                <div>
                  <img src={item.image} alt={item.title} className="w-full" />
                </div>
                <div className="flex flex-col justify-between gap-[5rem] px-[1rem] py-[1rem]">
                  <h3 className="text-lg font-gambetta text-afenoid-dark-green text-left">
                    {item.title}
                  </h3>
                  <div className="flex justify-between">
                    <p className="uppercase text-sm font-proxima-nova text-afenoid-dark-green">
                      {item.category}
                    </p>
                    <Link to="/" className="hover:underline underline-offset-4">
                      <p className="text-sm font-proxima-nova text-afenoid-green">
                        Read More
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export { Carousel };