import { Text } from "../../../ui";
import ChallengeIcon from "../../../assets/challengeIcon.svg";
import MethodologyIcon from "../../../assets/methodologyIcon.svg";
import OutcomeIcon from "../../../assets/outcomeIcon.svg";
import RecommendationIcon from "../../../assets/recommendationIcon.svg";

const DataSection = () => {
  return (
    <section className="px-[80px] flex flex-col gap-[64px] items-center">
      <div className="bg-[#E3F0C9] h-[204px] py-[37px] pl-[45px] pr-[110px] w-[1270px] flex gap-[42px] items-center">
        <div className="w-[60px]">
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
            customClassName="w-[80]"
          >
            A fintech company providing peer-to-peer payment services faced
            growing concerns over data breaches and regulatory compliance in
            multiple markets.
          </Text>
        </div>
      </div>

      <div className="h-[204px] py-[37px] pl-[45px] pr-[110px] w-[1270px] flex gap-[42px] items-center bg-[#DBEEF4]">
        <div className="w-[60px]">
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
            customClassName="w-[80]"
          >
            A fintech company providing peer-to-peer payment services faced
            growing concerns over data breaches and regulatory compliance in
            multiple markets.
          </Text>
        </div>
      </div>

      <div className="h-[204px] py-[37px] pl-[45px] pr-[110px] w-[1270px] flex gap-[42px] items-center bg-[#FFEBE5]">
        <div className="w-[60px]">
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
            customClassName="w-[80]"
          >
            A fintech company providing peer-to-peer payment services faced
            growing concerns over data breaches and regulatory compliance in
            multiple markets.
          </Text>
        </div>
      </div>

      <div className="h-[204px] py-[37px] pl-[45px] pr-[110px] w-[1270px] flex gap-[42px] items-center bg-[#9BBB59]">
        <div className="w-[60px]">
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
            customClassName="w-[80]"
          >
            A fintech company providing peer-to-peer payment services faced
            growing concerns over data breaches and regulatory compliance in
            multiple markets.
          </Text>
        </div>
      </div>
    </section>
  );
};

export { DataSection };
