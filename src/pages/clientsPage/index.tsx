import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet, Text } from "../../ui";
import { RequestConsultation, ScheduleMeeting } from "../../components";

const ClientsPage = () => {
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
        <section className="overflow-x-hidden my-24 px-[5rem] msm:px-6 msm:my-0">
          <div className="flex flex-col items-center gap-7 py-40">
            <Text
              variant="h2"
              fontFamily="raleway"
              fontWeight="medium"
              align="center"
              color="af-dark-green"
            >
              Empowering Organizations with Digital Trust & Compliance
            </Text>
            <Text
              variant="h4"
              fontFamily="proxima-nova"
              fontWeight="regular"
              align="center"
              color="af-dark-green"
              customClassName="w-3/5"
            >
              Afenoid helps organizations achieve compliance, enhance
              cybersecurity, and build digital trust. Our expertise ensures
              resilience and regulatory success.
            </Text>
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

export { ClientsPage };
