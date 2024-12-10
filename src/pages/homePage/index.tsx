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
import { ConsultationForm, RequestConsultation } from "../../components";

const HomePage = () => {
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
        <section className="overflow-x-hidden">
          <HeroSection openModal={openConsultationModal} />
          <NumbersSection />
          <ChoiceSection
            openContactModal={openContactModal}
            openConsultationModal={openConsultationModal}
          />
          <ServicesSection />
          <CaseStudiesSection openConsultationModal={openConsultationModal} />
        </section>
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

export { HomePage };
