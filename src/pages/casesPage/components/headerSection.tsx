import React from "react";
import { Text } from "../../../ui";

type HeaderSectionProps = {
  title: string | undefined;
  industry: string | undefined;
  duration: string | undefined;
  segment: string | undefined;
  imgUrl: string | undefined;
};

const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  industry,
  segment,
  duration,
  imgUrl,
}) => {
  return (
    <section className="py-[120px] flex flex-col gap-[47px] px-[5rem] msm:px-[3rem] msm:py-[37px] msm:gap-[27px] mxs:px-[2rem]">
      <Text
        variant="h3"
        fontWeight="medium"
        fontFamily="gambetta"
        color="af-dark-green"
        align="center"
      >
        {title}
      </Text>

      <div className="w-full h-[500px] msm:h-[234px]">
        <img src={imgUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="w-full">
        <div className="w-[80%] flex justify-between mx-auto gap-10 msm:w-full mxxssw:flex-col mxxssw:gap-5">
          <div>
            <Text
              variant="h5"
              fontFamily="proxima-nova"
              fontWeight="regular"
              customClassName="!text-[#999590] mb-5 mxs:!text-[12px] mxxssw:mb-2"
              align="left"
            >
              Industry
            </Text>
            <Text
              variant="h4"
              fontFamily="proxima-nova"
              fontWeight="regular"
              customClassName="!text-[#11240F] mxs:!text-caption-reg"
              align="left"
            >
              {industry}
            </Text>
          </div>
          <div>
            <Text
              variant="h5"
              fontFamily="proxima-nova"
              fontWeight="regular"
              customClassName="!text-[#999590] mb-5 mxs:!text-[12px] mxxssw:mb-2"
              align="left"
            >
              Services
            </Text>
            <Text
              variant="h4"
              fontFamily="proxima-nova"
              fontWeight="regular"
              customClassName="!text-[#11240F] mxs:!text-caption-reg"
              align="left"
            >
              {segment} Implementation
            </Text>
          </div>
          <div>
            <Text
              variant="h5"
              fontFamily="proxima-nova"
              fontWeight="regular"
              customClassName="!text-[#999590] mb-5 mxs:!text-[12px] mxxssw:mb-2"
              align="left"
            >
              Project Timeline
            </Text>
            <Text
              variant="h4"
              fontFamily="proxima-nova"
              fontWeight="regular"
              customClassName="!text-[#11240F] mxs:!text-caption-reg"
              align="left"
            >
              {duration}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeaderSection };
