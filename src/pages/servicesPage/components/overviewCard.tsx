interface CardProps {
  icon: string;
  title: string;
  description: string;
  reverse: boolean;
}

import React from "react";
import { Text } from "../../../ui";

const OverviewCard: React.FC<CardProps> = (props) => {
  const { icon, title, description, reverse } = props;

  return (
    <div
      className={`w-[25rem] min-w-[25rem] min-h-[27rem] px-8 pt-16 msm:min-h-[23rem] ${
        reverse ? "bg-[#224C1F]" : "bg-[#0A2B14]"
      }`}
    >
      <div className="w-8 h-8">
        <img src={icon} alt="Icon Image" loading="lazy" className="w-full" />
      </div>
      <div className="w-full">
        <Text
          variant="h5"
          color="af-white"
          fontFamily="raleway"
          fontWeight="semi-bold"
          align="left"
          customClassName="!text-[2.25rem] mt-6 my-4 leading-[1.2]"
        >
          {title}
        </Text>
        <Text
          variant="h5"
          color="af-white"
          fontFamily="proxima-nova"
          fontWeight="regular"
          align="left"
          customClassName="!text-[1.15rem]"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};

export { OverviewCard };
