import React from "react";
import { Text } from "../../../ui";

type HeroText = {
  caption: string;
  title: string;
  description: string;
};

type HeroDivProps = {
  heroTexts: HeroText;
  image: string;
  reverse?: boolean;
};

const HeroDiv: React.FC<HeroDivProps> = ({
  heroTexts,
  image,
  reverse,
}) => {
  return (
    <div
      className={`flex justify-between items-center gap-32 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-1/2 flex flex-col gap-3">
        <Text
          variant="h6"
          color="af-green"
          fontFamily="montserrat"
          customClassName="uppercase"
        >
          {heroTexts.caption}
        </Text>
        <Text
          variant="h1"
          color="af-dark-green"
          fontFamily="gambetta"
          fontWeight="medium"
        >
          {heroTexts.title}
        </Text>
        <Text variant="h5" fontFamily="proxima-nova" fontWeight="light">
          {heroTexts.description}
        </Text>
      </div>
      <div className="w-1/2 h-auto">
        <img
          src={image}
          alt="An Image for the Hero Page"
          className="w-full h-full"
        />
      </div>
    </div>
  );
};


export {HeroDiv};