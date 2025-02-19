import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import { ContactDetails, ContactForm, HeroSection } from "./components";
import { RequestConsultation, ScheduleMeeting } from "../../components";
import { useState } from "react";

const ContactUsPage = () => {
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
        <section className="overflow-x-hidden my-48 px-[5rem] msm:px-6 msm:my-0">
          <div className="flex gap-20 msm:flex-col-reverse">
            <div className="flex flex-col gap-16 w-1/2 msm:w-full">
              <div className="block msm:hidden">
                <HeroSection />
              </div>
              <ContactDetails />
            </div>
            <div className="w-1/2 msm:w-full">
            <div className="hidden msm:block">
                <HeroSection />
              </div>
              <ContactForm />
            </div>
          </div>

          <div className="my-20">
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

export { ContactUsPage };
