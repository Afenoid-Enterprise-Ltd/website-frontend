import React from "react";

import { Text, Button } from "../ui";

type CaseStudyCardProps = {
  image: string;
  title: string;
  description: string;
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = (props) => {
  const { image, title, description } = props;

  return (
    <div className="flex flex-col gap-5 h-full">
      <div className="flex-grow-[4] flex">
        <img src={image} alt="Case Study Image" className="h-full w-full object-cover flex-1" />
      </div>
      <Text
        variant="h5"
        color="af-dark-green"
        fontFamily="playfair-display"
        fontWeight="medium"
      >
        {title}
      </Text>
      <Text
        variant="h5"
        color="af-dark-green"
        fontFamily="proxima-nova"
        fontWeight="light"
      >
        {description}
      </Text>
      <div>
        <Button variant="secondary" label="Learn More" />
      </div>
    </div>
  );
};

export { CaseStudyCard };