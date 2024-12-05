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
}

const DataSection: React.FC<DataSectionProps> = ({challenge, methodology, outcome, recommendation}) => {
  return (
    <section className="px-[80px] flex flex-col gap-[64px] items-center msm:px-[20px] msm:w-full msm:overflow-x-hidden msm:gap-[24px]">
      {/* <div className="bg-[#E3F0C9] max-h-[204px] py-[37px] pl-[45px] pr-[110px] flex gap-[42px] items-center w-full msm:h-full msm:px-5 msm:py-4 msm:items-start msm:gap-5">
        <div className=" border border-red-500 h-auto flex ">
          <img src={ChallengeIcon} alt="" className="max-w-[60px] msm:max-w-[40px]"/>
        </div>
        <div className="flex flex-col gap-[12px] msm:gap-2 msm:block msm:relative border border-blue-700">
          <Text
            fontFamily="gambetta"
            fontWeight="medium"
            align="left"
            color="af-dark-green"
            variant="h3"
          >
            Challenge
          </Text>
          <Text
            fontFamily="proxima-nova"
            fontWeight="light"
            align="left"
            color="af-dark-green"
            variant="h5"
            customClassName="border border-green-700 mt-8 w-full"
          >
            {challenge}
          </Text>
        </div>
      </div> */}

{/* <div className="bg-[#E3F0C9] max-h-[204px] py-[37px] pl-[45px] pr-[110px] flex gap-[42px]  flex-col items-center w-full msm:flex-col msm:h-full msm:px-5 msm:py-4 msm:items-start msm:gap-5">
  <div className="flex gap-[12px] items-center msm:w-full msm:justify-start">
    <div className="flex-shrink-0">
      <img
        src={ChallengeIcon}
        alt=""
        className="max-w-[60px] msm:max-w-[40px]"
      />
    </div>
    <Text
      fontFamily="gambetta"
      fontWeight="medium"
      align="left"
      color="af-dark-green"
      variant="h3"
      customClassName="msm:text-base"
    >
      Challenge
    </Text>
  </div>
  <Text
    fontFamily="proxima-nova"
    fontWeight="light"
    align="left"
    color="af-dark-green"
    variant="h5"
    customClassName="mt-4 w-full"
  >
    {challenge}
  </Text>
</div> */}


<div className="relative bg-[#E3F0C9] max-h-[204px] py-[37px] pl-[45px] pr-[110px]  w-full msm:h-full msm:px-5 msm:py-4 msm:flex-col msm:gap-5">
  {/* Wrapper for image and h3 */}
  <div className="flex items-center gap-4 msm:w-full msm:justify-start msm:gap-2">
    <div className="flex-shrink-0 border border-red-900 flex items-center absolute top-1/2  -translate-y-1/2 msm:relative msm:translate-y-0">
      <img
        src={ChallengeIcon}
        alt="Challenge Icon"
        className="max-w-[60px] msm:max-w-[40px] text-center"
      />
    </div>
    <Text
      fontFamily="gambetta"
      fontWeight="medium"
      align="left"
      color="af-dark-green"
      variant="h3"
      customClassName="msm:text-base w-full border border-red-900 pl-[70px] msm:pl-0"
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
    customClassName=" w-full pl-16 msm:pl-0"
  >
    {challenge}
  </Text>
</div>





      <div className="h-[204px] py-[37px] pl-[45px] pr-[110px] flex gap-[42px] items-center bg-[#DBEEF4] w-full msm:h-full msm:px-5 msm:py-4 msm:flex-col msm:items-start msm:gap-5">
        <div className="max-w-[60px] msm:max-w-[40px] border border-red-800">
          <img src={MethodologyIcon} alt="" />
        </div>
        <div className="flex flex-col gap-[12px] msm:gap-2">
          <Text
            fontFamily="gambetta"
            fontWeight="medium"
            align="left"
            color="af-dark-green"
            variant="h3"
          >
            Methodology
          </Text>
          <Text
            fontFamily="proxima-nova"
            fontWeight="light"
            align="left"
            color="af-dark-green"
            variant="h5"
          >
            {methodology}
          </Text>
        </div>
      </div>

      <div className="max-h-[204px] py-[37px] pl-[45px] pr-[110px] flex gap-[42px] items-center bg-[#FFEBE5] w-full msm:h-full msm:px-5 msm:py-4 msm:flex-col msm:items-start msm:gap-5">
        <div className="max-w-[60px] msm:max-w-[40px]">
          <img src={OutcomeIcon} alt="" />
        </div>
        <div className="flex flex-col gap-[12px] msm:gap-2">
          <Text
            fontFamily="gambetta"
            fontWeight="medium"
            align="left"
            color="af-dark-green"
            variant="h3"
          >
            Outcome
          </Text>
          <Text
            fontFamily="proxima-nova"
            fontWeight="light"
            align="left"
            color="af-dark-green"
            variant="h5"
          >
            {outcome}
          </Text>
        </div>
      </div>

      <div className="max-h-[204px] py-[37px] pl-[45px] pr-[110px] flex gap-[42px] items-center bg-[#9BBB59] w-full msm:h-full msm:px-5 msm:py-4 msm:flex-col msm:items-start msm:gap-5">
        <div className="max-w-[60px] msm:max-w-[40px]">
          <img src={RecommendationIcon} alt="" />
        </div>
        <div className="flex flex-col gap-[12px] msm:gap-2">
          <Text
            fontFamily="gambetta"
            fontWeight="medium"
            align="left"
            color="af-dark-green"
            variant="h3"
          >
            Recommendation
          </Text>
          <Text
            fontFamily="proxima-nova"
            fontWeight="light"
            align="left"
            color="af-dark-green"
            variant="h5"
          >
            {recommendation}
          </Text>
        </div>
      </div>
    </section>
  );
};

export { DataSection };
