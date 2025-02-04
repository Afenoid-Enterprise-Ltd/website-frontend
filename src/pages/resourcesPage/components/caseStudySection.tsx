import React from "react";
import { Text, Button } from "../../../ui";
import { ArticleImg1, HomePageCaseStudiesImg } from "../../../assets";
import { ResourcesGrid } from "./resourcesGrid.tsx";
import { ProfileCard } from "./profileCard.tsx";
import { CaseStudiesGrid } from "./caseStudiesGrid.tsx";

interface CaseStudyProps {
  openConsultationModal: () => void;
}

const CaseStudySection: React.FC<CaseStudyProps> = (props) => {
  const { openConsultationModal } = props;

  return (
    <section className="bg-white">
      <div>
        <div className="w-[60%] mx-auto my-[8rem] px-[3rem] msm:w-full mxs:px-4">
          <Text
            variant="h2"
            fontFamily="gambetta"
            align="center"
            color="af-dark-green"
            fontWeight="medium"
          >
            Managing Change to Drive Organizational Transformation
          </Text>
        </div>
        <div className="">
          <ResourcesGrid />
        </div>
      </div>

      <div className="px-[5rem] py-[5rem] msm:px-[3rem] mxs:px-[2rem]">
        <ProfileCard />
      </div>

      <div>
        <div className="w-[60%]  mx-auto px-[3rem] msm:w-full mxs:px-4">
            <Text
              variant="h2"
              fontFamily="gambetta"
              align="center"
              color="af-dark-green"
              fontWeight="medium"
            >
              Case Studies
            </Text>
        </div>
        <div className="my-[4rem]">
          <CaseStudiesGrid />
        </div>

        <div>

        </div>

      </div>
    </section>
  );
};

export { CaseStudySection };
