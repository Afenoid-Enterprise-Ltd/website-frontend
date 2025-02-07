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
  btnText?: string;
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
            fontFamily="raleway"
            fontWeight="medium"
            customClassName="!text-[2.5rem]"
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
          {btnText ? (
            <Link to="/" className="w-[45%] mt-6 block mxs:w-[60%] mxxss:w-full">
              <Button
                variant="secondary"
                label={btnText}
                customClassName="w-full"
              />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="w-[60%] h-[25rem] mlg:w-full mxs:h-[12.5rem]">
        <img
          src={image}
          alt="An Image for the Hero Page"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="hidden self-start mlg:block">
        <Text
          variant="h3"
          color="af-dark-green"
          fontFamily="raleway"
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
