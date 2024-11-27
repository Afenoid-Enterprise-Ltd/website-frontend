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
    <section className="px-[80px] flex flex-col gap-[64px] items-center">
      <div className="bg-[#E3F0C9] max-h-[204px] py-[37px] pl-[45px] pr-[110px] w-[1270px] flex gap-[42px] items-center">
        <div className="max-w-[60px]">
          <img src={ChallengeIcon} alt="" />
        </div>
        <div className="flex flex-col gap-[12px]">
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
          >
            {challenge}
          </Text>
        </div>
      </div>

      <div className="h-[204px] py-[37px] pl-[45px] pr-[110px] w-[1270px] flex gap-[42px] items-center bg-[#DBEEF4]">
        <div className="max-w-[60px]">
          <img src={MethodologyIcon} alt="" />
        </div>
        <div className="flex flex-col gap-[12px]">
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

      <div className="max-h-[204px] py-[37px] pl-[45px] pr-[110px] w-[1270px] flex gap-[42px] items-center bg-[#FFEBE5]">
        <div className="max-w-[60px]">
          <img src={OutcomeIcon} alt="" />
        </div>
        <div className="flex flex-col gap-[12px]">
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

      <div className="max-h-[204px] py-[37px] pl-[45px] pr-[110px] w-[1270px] flex gap-[42px] items-center bg-[#9BBB59]">
        <div className="max-w-[60px]">
          <img src={RecommendationIcon} alt="" />
        </div>
        <div className="flex flex-col gap-[12px]">
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
