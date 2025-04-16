import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, Outlet } from "../../ui";
import { useParams, useNavigate } from "react-router-dom";
import { Text } from "../../ui";
import { MainSection, TableSection } from "./components";
import { CallToAction } from "../../components";
import { skillsData } from "./components/skillsData";
import { ConsultationForm } from "../../components";

const validSkills = [
  "information-security-management-system",
  "business-continuity-management-system",
  "crisc",
  "business-relationship-management-professional",
  "federated-IT-service-management",
  "apmg-change-management",
  "neuroscience-for-change",
  "service-management-system",
  "dora-lead-manager",
];

const ServiceSkillsPage = () => {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  const { skills } = useParams();
  const navigate = useNavigate();

  const selectedSkill = skillsData.find((skill) => skill.param === skills);

  useEffect(() => {
    if (!skills || !validSkills.includes(skills)) {
      navigate("/404", { replace: true });
    }
  }, [skills, navigate]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <section className="overflow-x-hidden px-[5rem] msm:px-[3rem] mxs:px-[2rem]">
          <MainSection
            title={selectedSkill?.title}
            image={selectedSkill?.image}
            subtitle={selectedSkill?.subtitle}
            description={selectedSkill?.description}
            expectation={selectedSkill?.expectation}
          />
          <div className="w-full flex items-center justify-center my-[5rem]">
            <div className="w-[60%] mlg:w-[70%] mmlg:w-[80%] msm:w-full">
              <Text
                variant="h4"
                align="center"
                fontFamily="gambetta"
                color="af-dark-green"
                fontWeight="regular"
              >
                Unlock greater value in your organization by empowering your
                professionals with the best security courses.
              </Text>
            </div>
          </div>
          <TableSection
            gains={selectedSkill?.gains}
            attendees={selectedSkill?.attendees}
          />
          <CallToAction
            title="Your Next Step Awaits"
            explanation="Imagine mastering the skills that set you and your organization apart and open doors to new opportunities."
            button={
              <Button
                variant="secondary"
                label="Contact Us"
                customClassName="mt-[2rem] mb-[150px]"
                onClick={openContactModal}
              />
            }
          />
        </section>
      </Outlet>
      {isContactOpen && (
        <ConsultationForm isOpen={isContactOpen} onClose={closeContactModal} />
      )}
    </motion.section>
  );
};

export { ServiceSkillsPage };
