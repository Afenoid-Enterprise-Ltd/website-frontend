import { Carousel, Text } from "../../../ui";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import Slider from "react-slick";

type RelatedSectionProps = {
  relatedCases: any;
};
interface RelatedCases {
  title: string;
  description: string;
  imgUrl: string;
}

const RelatedSection: React.FC<RelatedSectionProps> = ({ relatedCases }) => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed (in ms)
    slidesToShow: 1, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Time between slides (in ms)
    pauseOnHover: true, // Pause autoplay when the user hovers over the carousel
  };

  return (
    <section className="px-[80px] msm:px-6 msm:w-full">
      <div className="bg-[#EBEEEB] px-[246px] py-[50px] flex flex-col items-center gap-[48px] w-full msm:px-4">
        <div className="flex flex-col gap-2">
          <Text
            variant="h3"
            fontFamily="gambetta"
            fontWeight="medium"
            align="center"
            color="af-dark-green"
          >
            Explore more case studies
          </Text>
          <Text
            variant="h6"
            fontFamily="proxima-nova"
            fontWeight="light"
            align="center"
            color="af-dark-green"
          >
            Our case studies showcase our expertise and approach to ensuring
            organizational resilience.
          </Text>
        </div>

        <div className="flex gap-[48px] msm:flex-col msm:w-full">
          <>
            {isSmallDevice ? (
              <Slider {...settings}>
              {relatedCases?.map((relatedCase: RelatedCases) => {
                return (
                  <div className="h-[504px] w-[370px] flex flex-col gap-[20px] msm:w-full msm:h-fit msm:mb-3">
                    <div className="h-[180px] w-full">
                      <img src={relatedCase.imgUrl} alt="Case Study 1" className="h-full" />
                    </div>
                    <div className="flex flex-col gap-[18px] items-center msm:items-start">
                      <Text
                        variant="h5"
                        align={isSmallDevice ? "left" : "center"}
                        fontFamily="gambetta"
                        color="af-green"
                        customClassName="font-medium"
                      >
                        {relatedCase.title}
                      </Text>
            
                      <Text
                        variant="h6"
                        align={isSmallDevice ? "left" : "center"}
                        fontFamily="proxima-nova"
                        fontWeight="light"
                        color="af-dark-green"
                        customClassName="font-normal"
                      >
                        {relatedCase.description}
                      </Text>
            
                      <Link
                        to={`/case-studies/${relatedCase.title
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`}
                        className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
            ) : (
              <>
                {relatedCases?.map((relatedCase: RelatedCases) => {
                  return (
                    <div className="h-[504px] w-[370px] flex flex-col gap-[20px] msm:w-full">
                      <div className="h-[180px] w-full">
                        <img
                          src={relatedCase.imgUrl}
                          alt="Case Study 1"
                          className="h-full"
                        />
                      </div>
                      <div className="flex flex-col gap-[18px] items-center msm:items-start">
                        <Text
                          variant="h5"
                          align={isSmallDevice ? "left" : "center"}
                          fontFamily="gambetta"
                          color="af-green"
                          customClassName="font-medium"
                        >
                          {relatedCase.title}
                        </Text>

                        <Text
                          variant="h6"
                          align={isSmallDevice ? "left" : "center"}
                          fontFamily="proxima-nova"
                          fontWeight="light"
                          color="af-dark-green"
                          customClassName="font-normal"
                        >
                          {relatedCase.description}
                        </Text>

                        <Link
                          to={`/case-studies/${relatedCase.title
                            .split(" ")
                            .join("-")
                            .toLowerCase()}`}
                          className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </>
        </div>
      </div>
    </section>
  );
};

export { RelatedSection };

