// import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet } from "../../ui";
// import { CallToAction } from "../../components/callToAction.tsx";
import { HeroSection } from "./components/heroSection.tsx";
import { MainSection } from "./components/mainSection.tsx";
import { ScheduleMeeting } from "../../components";

interface CaseStudiesPageProps {
  openModal: () => void;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = (props) => {
  const { openModal } = props;

  // const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  // const openConsultationModal = () => {
  //   setIsConsultationOpen(true);
  // };

  // const closeConsultationModal = () => {
  //   setIsConsultationOpen(false);
  // };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <HeroSection />
        <MainSection />
        {/* <CallToAction
          title="Ready to have a conversation with us?"
          explanation="Schedule a meeting with a consultant right away"
          button={
            <Button
              variant="primary"
              label="Book a Consultation"
              customClassName="mt-[2rem] mb-[150px]"
              onClick={openConsultationModal}
            />
          }
        /> */}

        <div className="px-[5rem] msm:px-6 my-40">
          <ScheduleMeeting openModal={openModal}/>
        </div>
      </Outlet>
      {/* {isConsultationOpen && (
        <RequestConsultation
          isOpen={isConsultationOpen}
          onClose={closeConsultationModal}
        />
      )} */}
    </motion.section>
  );
};

export { CaseStudiesPage };