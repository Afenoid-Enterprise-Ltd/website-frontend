import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import {
  HeroSection,
  NumbersSection,
  ChoiceSection,
  ServicesSection,
  CaseStudiesSection,
} from "./components";
import { RequestConsultation } from "../../components";

const HomePage = () => {
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
        <section className="overflow-x-hidden">
          <HeroSection openModal={openConsultationModal} />
          <NumbersSection />
          <ChoiceSection openModal={openConsultationModal}/>
          <ServicesSection />
          <CaseStudiesSection />
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

export { HomePage };
