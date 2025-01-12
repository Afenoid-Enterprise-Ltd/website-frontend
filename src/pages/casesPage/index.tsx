import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet, Button } from "../../ui";
import { caseStudy } from "../caseStudiesPage/caseStudy.ts";
import { useParams } from "react-router-dom";
import { HeaderSection } from "./components/headerSection.tsx";
import { DataSection } from "./components/dataSection.tsx";
import { CallToAction } from "../../components/callToAction.tsx";
import { RelatedSection } from "./components/relatedSection.tsx";
import { HomeHeroImage } from "../../assets";
import { ConsultationForm, RequestConsultation } from "../../components";

const CasesPage = () => {
  const { title } = useParams();

  const item = caseStudy.find((study) => {
    return study.title.toLowerCase().split(" ").join("-") === title;
  });

  const relateditems = caseStudy.filter(study =>{
    return study.segment === item?.segment
  }).filter(study => {
    return study.title !== item?.title
  })

  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const openConsultationModal = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationOpen(false);
  };

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <HeaderSection
          title={item?.data.title}
          industry={item?.data.industry}
          duration={item?.data.duration}
          segment={item?.segment}
          imgUrl={item?.imgUrl}
        />
        <DataSection
          challenge={item?.data.challenge}
          methodology={item?.data.methodology}
          outcome={item?.data.outcome}
          recommendation={item?.data.recommendation}
        />

        <CallToAction
          title="Ready to have a conversation with us?"
          explanation="Schedule a meeting with a consultant right away"
          button={
            <Button
              variant="primary"
              label="Book a Consultation"
              customClassName="mt-[2rem]"
              onClick={openConsultationModal}
            />
          }
        />

        <RelatedSection relatedCases={relateditems}/>

        <div className="max-w-[530px] mx-auto mt-[150px] msm:mx-6">
          <img src={HomeHeroImage} alt="" />
        </div>

        <CallToAction
          title="Our journey with you starts here"
          explanation="Looking to implement digital trust solutions, assess your organization's resilience, or enhance your professional expertise?"
          button={
            <Button
              variant="secondary"
              label="Contact Us"
              customClassName="mt-[2rem]"
              onClick={openContactModal}
            />
          }
        />
      </Outlet>
      {isConsultationOpen && (
        <RequestConsultation
          isOpen={isConsultationOpen}
          onClose={closeConsultationModal}
        />
      )}
      {isContactOpen && (
        <ConsultationForm isOpen={isContactOpen} onClose={closeContactModal} />
      )}
    </motion.section>
  );
};

export { CasesPage };
