import React from "react";
import { Text } from "../../../ui";
import ChallengeIcon from "../../../assets/challengeIcon.svg";
import MethodologyIcon from "../../../assets/methodologyIcon.svg";
import OutcomeIcon from "../../../assets/outcomeIcon.svg";
import RecommendationIcon from "../../../assets/recommendationIcon.svg";

type DataSectionProps = {
  challenge: string | undefined;
  methodology: string | undefined;
  outcome: string | undefined;
  recommendation: string | undefined;
};

const DataSection: React.FC<DataSectionProps> = ({
  challenge,
  methodology,
  outcome,
  recommendation,
}) => {
  return (
    <section className="px-[80px] flex flex-col gap-[64px] items-center msm:px-[20px] msm:w-full msm:overflow-x-hidden msm:gap-[24px]">
      <div className="relative bg-[#E3F0C9] max-h-[204px] py-[37px] pl-[45px] pr-[110px]  w-full msm:h-full msm:px-5 msm:py-4 msm:flex-col msm:gap-5">
        {/* Wrapper for image and h3 */}
        <div className="flex items-center gap-4 msm:w-full msm:justify-start msm:gap-4">
          <div className="flex-shrink-0 flex items-center absolute top-1/2  -translate-y-1/2 msm:relative msm:translate-y-0">
            <img
              src={ChallengeIcon}
              alt="Challenge Icon"
              className="max-w-[60px] msm:max-w-[21px] text-center"
            />
          </div>
          <Text
            fontFamily="gambetta"
            fontWeight="medium"
            align="left"
            color="af-dark-green"
            variant="h3"
            customClassName="msm:text-base w-full  pl-[80px] msm:pl-0"
          >
            Challenge
          </Text>
        </div>
        {/* h5 text */}
        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          align="left"
          color="af-dark-green"
          variant="h5"
          customClassName=" w-full pl-[80px] msm:pl-0  mt-[12px]"
        >
          {challenge}
        </Text>
      </div>

      <div className="relative bg-[#DBEEF4] max-h-[204px] py-[37px] pl-[45px] pr-[110px]  w-full msm:h-full msm:px-5 msm:py-4 msm:flex-col msm:gap-5">
        {/* Wrapper for image and h3 */}
        <div className="flex items-center gap-4 msm:w-full msm:justify-start msm:gap-4">
          <div className="flex-shrink-0  flex items-center absolute top-1/2  -translate-y-1/2 msm:relative msm:translate-y-0">
            <img
              src={MethodologyIcon}
              alt="Methodology Icon"
              className="max-w-[60px] msm:max-w-[21px] text-center"
            />
          </div>
          <Text
            fontFamily="gambetta"
            fontWeight="medium"
            align="left"
            color="af-dark-green"
            variant="h3"
            customClassName="msm:text-base w-full  pl-[80px] msm:pl-0"
          >
            Methodology
          </Text>
        </div>
        {/* h5 text */}
        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          align="left"
          color="af-dark-green"
          variant="h5"
          customClassName=" w-full pl-[80px] msm:pl-0  mt-[12px]"
        >
          {methodology}
        </Text>
      </div>

      <div className="relative bg-[#FFEBE5] max-h-[204px] py-[37px] pl-[45px] pr-[110px]  w-full msm:h-full msm:px-5 msm:py-4 msm:flex-col msm:gap-5">
        {/* Wrapper for image and h3 */}
        <div className="flex items-center gap-4 msm:w-full msm:justify-start msm:gap-4">
          <div className="flex-shrink-0  flex items-center absolute top-1/2  -translate-y-1/2 msm:relative msm:translate-y-0">
            <img
              src={OutcomeIcon}
              alt="Outcome Icon"
              className="max-w-[60px] msm:max-w-[21px] text-center"
            />
          </div>
          <Text
            fontFamily="gambetta"
            fontWeight="medium"
            align="left"
            color="af-dark-green"
            variant="h3"
            customClassName="msm:text-base w-full  pl-[80px] msm:pl-0"
          >
            Outcome
          </Text>
        </div>
        {/* h5 text */}
        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          align="left"
          color="af-dark-green"
          variant="h5"
          customClassName=" w-full pl-[80px] msm:pl-0  mt-[12px]"
        >
          {outcome}
        </Text>
      </div>

      <div className="relative bg-[#9BBB59] max-h-[204px] py-[37px] pl-[45px] pr-[110px]  w-full msm:h-full msm:px-5 msm:py-4 msm:flex-col msm:gap-5">
        {/* Wrapper for image and h3 */}
        <div className="flex items-center gap-4 msm:w-full msm:justify-start msm:gap-4">
          <div className="flex-shrink-0  flex items-center absolute top-1/2  -translate-y-1/2 msm:relative msm:translate-y-0">
            <img
              src={RecommendationIcon}
              alt="Recommendation Icon"
              className="max-w-[60px] msm:max-w-[21px] text-center"
            />
          </div>
          <Text
            fontFamily="gambetta"
            fontWeight="medium"
            align="left"
            color="af-dark-green"
            variant="h3"
            customClassName="msm:text-base w-full  pl-[80px] msm:pl-0"
          >
            Recommendation
          </Text>
        </div>
        {/* h5 text */}
        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          align="left"
          color="af-dark-green"
          variant="h5"
          customClassName=" w-full pl-[80px] msm:pl-0  mt-[12px]"
        >
          {recommendation}
        </Text>
      </div>
    </section>
  );
};

export { DataSection };
