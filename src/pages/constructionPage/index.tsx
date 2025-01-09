import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import {
  PageUnderConstruction,
  RequestConsultation,
  ConsultationForm,
} from "../../components";

const ConstructionPage = () => {
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
          <PageUnderConstruction openModal={openConsultationModal}/>
        </section>
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

      </Outlet>
    </motion.section>
  );
};

export { ConstructionPage };
