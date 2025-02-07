import React from "react";
import { DownloadProfile } from "../../../components/downloadProfile.tsx";
import { Text } from "../../../ui";
import { ResourcesGrid } from "./resourcesGrid.tsx";
import { CaseStudiesGrid } from "./caseStudiesGrid.tsx";
import { Newsletter, ContactUs } from "../../../components/";

interface CaseStudyProps {
  openConsultationModal: () => void;
}

const CaseStudySection: React.FC<CaseStudyProps> = (props) => {
  const { openConsultationModal } = props;
  
  return (
    <section className="bg-white">
      <div>
        <div className="w-[60%] mx-auto my-[8rem] px-[3rem] msm:w-full mxs:px-4 msm:my-20">
          <Text
            variant="h2"
            fontFamily="raleway"
            align="center"
            color="af-dark-green"
            fontWeight="medium"
            customClassName="msm:text-[24px]"
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
        <div className="w-[60%] mx-auto px-[3rem] msm:w-full mxs:px-4 border">
            <Text
              variant="h2"
              fontFamily="raleway"
              align="center"
              color="af-dark-green"
              fontWeight="medium"
              customClassName="msm:text-[24px]"
            >
              Case Studies
            </Text>
        </div>
        <div className="my-[4rem]">
          <CaseStudiesGrid />
        </div>

        <div className="mt-[13rem] msm:mt-20">
        <Newsletter />
        <ContactUs openConsultationModal={openConsultationModal} />
        </div>
      </div>
    </section>
  );
};

export { CaseStudySection };
