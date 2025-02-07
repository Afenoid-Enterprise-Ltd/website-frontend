import React from "react";
import { DownloadProfile } from "../../../components/downloadProfile.tsx";
import { Text } from "../../../ui";
import { ResourcesGrid } from "./resourcesGrid.tsx";
import { CaseStudiesGrid } from "./caseStudiesGrid.tsx";

interface CaseStudyProps {
  openConsultationModal: () => void;
}

const CaseStudySection: React.FC<CaseStudyProps> = () => {
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

      <DownloadProfile />

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

        <div></div>
      </div>
    </section>
  );
};

export { CaseStudySection };
