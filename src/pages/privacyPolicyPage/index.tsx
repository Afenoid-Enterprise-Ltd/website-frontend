import { useState } from "react";
import {
  RequestConsultation,
  CallToAction,
} from "../../components";
import { HeroSection, PolicySection } from "./components"
import { motion } from "framer-motion";
import { Outlet, Button } from "../../ui";

const PrivacyPolicyPage = () => {
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
          <HeroSection/>
          <PolicySection/>
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

export { PrivacyPolicyPage };
