import React, { useEffect } from "react";
import { Text, Button } from "../../../ui";
import { Link } from "react-router-dom";

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
  btnText: string;
};

const LearnMoreDiv: React.FC<HeroDivProps> = ({
  heroTexts,
  image,
  reverse,
  btnText,
}) => {
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className={`flex justify-between items-center gap-32 mb-[10rem] ${
        reverse ? "flex-row-reverse" : ""
      }`}
      data-aos="zoom-in"
      data-aos-delay="50"
      data-aos-duration="700"
    >
      <div className={`w-1/2 flex flex-col gap-3`}>
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

        <div>
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
          <Link to="/" className="w-[32%] block">
            <Button
              variant="secondary"
              label={btnText}
              customClassName="w-full"
            />
          </Link>
        </div>
      </div>
      <div className="w-1/2 h-auto">
        <img
          src={image}
          alt="An Image for the Hero Page"
          className="w-auto h-full bg-cover"
        />
      </div>
    </div>
  );
};

export { LearnMoreDiv };
