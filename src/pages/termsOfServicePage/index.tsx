import { useState } from "react";
import {
  PageUnderConstruction,
  RequestConsultation,
} from "../../components";
import { motion } from "framer-motion";
import { Outlet } from "../../ui";

const TermsOfServicePage = () => {
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
          <PageUnderConstruction openModal={openConsultationModal} />
        </section>
        {isConsultationOpen && (
          <RequestConsultation
            isOpen={isConsultationOpen}
            onClose={closeConsultationModal}
          />
        )}
      </Outlet>
    </motion.section>
  );
};

export { TermsOfServicePage };