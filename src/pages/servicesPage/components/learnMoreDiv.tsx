import React from "react";
import { Text, Button } from "../../../ui";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  const initialX = reverse ? 300 : -300;
  const imgX = reverse ? -800 : 800;

  return (
    <div
      className={`flex justify-between items-center gap-32  mb-12 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className={`w-1/2 flex flex-col gap-3`}>
        <motion.div
          initial={{ x: initialX, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <Text
            variant="h6"
            color="af-green"
            fontFamily="montserrat"
            customClassName="uppercase"
          >
            {heroTexts.caption}
          </Text>
        </motion.div>

        <motion.div
          initial={{ x: initialX * 2.5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <Text
            variant="h3"
            color="af-dark-green"
            fontFamily="gambetta"
            fontWeight="medium"
          >
            {heroTexts.title}
          </Text>
        </motion.div>
        <motion.div
          initial={{ x: initialX * 2.5, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        >
          <Text variant="h5" fontFamily="proxima-nova" fontWeight="light">
            {heroTexts.description}
          </Text>
        </motion.div>
        <motion.div>
          <Link to = "/">
            <Button variant="secondary" label="Learn more" />
          </Link>
        </motion.div>
      </div>
      <motion.div
        className="w-1/2 h-auto"
        initial={{ x: imgX * 2.5, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
      >
        <img
          src={image}
          alt="An Image for the Hero Page"
          className="w-auto h-full bg-cover"
        />
      </motion.div>
    </div>
  );
};

export { LearnMoreDiv };
