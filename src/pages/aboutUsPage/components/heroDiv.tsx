import React from "react";
import { Text } from "../../../ui";
import { motion } from "framer-motion";

type HeroText = {
  caption: string;
  description: string;
  identifier: string;
};

type HeroDivProps = {
  heroTexts: HeroText;
  image: string;
  reverse?: boolean;
};

const HeroDiv: React.FC<HeroDivProps> = ({ heroTexts, image, reverse }) => {
  const initialX = reverse ? 300 : -300;
  const imgX = reverse ? -800 : 800;

  return (
    <div
      className={`flex justify-between items-center gap-32 ${
        reverse ? "flex-row-reverse" : ""
      } mlg:flex-col mlg:items-start mlg:gap-12 msm:gap-6`}
      id={heroTexts.identifier}
    >
      <div className="w-1/2 flex flex-col gap-3 mlg:w-full">
        <motion.div
          initial={{ x: initialX, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <Text
            variant="h6"
            color="af-green"
            fontFamily="proxima-nova"
            fontWeight="regular"
            customClassName="uppercase !text-[18px] msm:!text-[12px]"
          >
            {heroTexts.caption}
          </Text>
        </motion.div>
        <motion.div
          initial={{ x: initialX * 2.5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
          className="block"
        >
          <Text
            fontFamily="proxima-nova"
            fontWeight="light"
            align="left"
            customClassName="!text-[28px] leading-[1.4] msm:!text-[20px]"
          >
            {heroTexts.description}
          </Text>
        </motion.div>
      </div>
      <motion.div
        className="w-1/2 h-auto mlg:w-full"
        initial={{ x: imgX * 2.5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <img
          src={image}
          alt="An Image for the Hero Page"
          className="w-full h-full"
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

export { HeroDiv };
