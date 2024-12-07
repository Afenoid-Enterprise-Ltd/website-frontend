
import { useState,  } from "react";
import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import {
  HeroSection,
  NumbersSection,
  ChoiceSection,
  ServicesSection,
  CaseStudiesSection,
} from "./components";
import { RequestConsultation} from "../../components";

const HomePage = () => {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const openModal = () => {
    setIsConsultationOpen(true);
  };

  const closeModal = () => {
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
          <HeroSection openModal={openModal} />
          <NumbersSection />
          <ChoiceSection />
          <ServicesSection />
          <CaseStudiesSection />
        </section>
      </Outlet>
      {isConsultationOpen && (
        <RequestConsultation isOpen={isConsultationOpen} onClose={closeModal} />
      )}
    </motion.section>
  );
};

export { HomePage };
