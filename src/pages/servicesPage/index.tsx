import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import { HeroSection, MainSection } from "./components";
import { ConsultationForm, RequestConsultation } from "../../components";

const ServicesPage = () => {
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

  const redirectToContactForm = () => {
    closeConsultationModal();
    openContactModal();
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
        <RequestConsultation
          isOpen={isConsultationOpen}
          onClose={closeConsultationModal}
          redirectToContactForm={redirectToContactForm} 
        />
      )}
      {isContactOpen && (
        <ConsultationForm isOpen={isContactOpen} onClose={closeContactModal} />
      )}
    </motion.section>
  );
};

export { ServicesPage };
