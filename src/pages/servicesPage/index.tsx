import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import { HeroSection, MainSection } from "./components";
import { ConsultationForm } from "../../components";

const ServicesPage = () => {
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
          <MainSection />
        </section>
      </Outlet>
      {isConsultationOpen && (
        <ConsultationForm
          isOpen={isConsultationOpen}
          onClose={closeConsultationModal}
        />
      )}
    </motion.section>
  );
};

export { ServicesPage };
