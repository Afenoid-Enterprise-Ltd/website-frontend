import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import { HeroSection } from "./components/heroSection.tsx";
import { MainSection } from "./components/mainSection.tsx";
import { RequestConsultation, ScheduleMeeting } from "../../components";

interface CaseStudiesPageProps {
  openModal: () => void;
}

const CaseStudiesPage: React.FC<CaseStudiesPageProps> = (props) => {
  const { openModal } = props;

  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);

  const openConsultationModal = () => {
    setIsConsultationOpen(true);
  };

  const closeConsultationModal = () => {
    setIsConsultationOpen(false);
  };

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
        <section className="px-[5rem] msm:px-6">
          <div className="my-24 mb-48">
            <ScheduleMeeting openModal={openConsultationModal} />
          </div>
        </section>
      </Outlet>
      {isConsultationOpen && (
        <RequestConsultation
          isOpen={isConsultationOpen}
          onClose={closeConsultationModal}
        />
      )}
    </motion.section>
  );
};

export { CaseStudiesPage };
