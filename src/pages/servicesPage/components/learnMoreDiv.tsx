import React, { useEffect } from "react";
import { Text } from "../../../ui";

import AOS from "aos";
import "aos/dist/aos.css";

type HeroText = {
  caption?: string;
  title: string;
  description: string;
};

type HeroDivProps = {
  heroTexts: HeroText;
  image: string;
  reverse?: boolean;
};

const LearnMoreDiv: React.FC<HeroDivProps> = ({
  heroTexts,
  image,
  reverse,
}) => {
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className={`flex justify-between items-center gap-32 mb-[10rem] ${
        reverse ? "flex-row-reverse" : ""
      } mlg:flex-col-reverse mlg:gap-8 mlg:mb-[5rem]`}
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="700"
    >
      <div className={`w-1/2 flex flex-col gap-3 mlg:w-full`}>
        <div>
          <Text
            variant="h6"
            color="af-green"
            fontFamily="montserrat"
            customClassName="uppercase"
          >
            {heroTexts.caption}
          </Text>
        </div>

        <div className="block mlg:hidden">
          <Text
            variant="h3"
            color="af-dark-green"
            fontFamily="gambetta"
            fontWeight="medium"
          >
            {heroTexts.title}
          </Text>
        </div>
        <div>
          <Text variant="h5" fontFamily="proxima-nova" fontWeight="light">
            {heroTexts.description}
          </Text>
        </div>
        <div>
          {/* <Link to="/" className="w-[45%] block mxs:w-[60%] mxxss:w-full">
            <Button
              variant="secondary"
              label={btnText}
              customClassName="w-full"
            />
          </Link> */}
        </div>
      </div>
      <div className="w-1/2 h-auto mlg:w-full">
        <img
          src={image}
          alt="An Image for the Hero Page"
          className="w-auto h-full bg-cover"
        />
      </div>
      <div className="hidden self-start mlg:block">
          <Text
            variant="h3"
            color="af-dark-green"
            fontFamily="gambetta"
            fontWeight="medium"
            align="left"
          >
            {heroTexts.title}
          </Text>
        </div>
    </div>
  );
};

export { LearnMoreDiv };
