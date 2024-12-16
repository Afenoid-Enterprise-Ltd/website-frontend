import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Outlet } from "../../ui";
import { useParams, useNavigate } from "react-router-dom";
import { Text } from "../../ui";
import { MainSection, TableSection } from "./components";
import { CallToAction } from "../../components";
import { skillsData } from "./components/skillsData";

const validSkills = [
  "information-security-management-system",
  "business-continuity-management-system",
  "crisc",
  "business-relationship-management-professional",
  "federated-IT-service-management",
  "apmg-change-management",
  "neuroscience-for-change",
  "quality-management-system",
  "isms-compliance",
];

const ServiceSkillsPage = () => {
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
        <section className="overflow-x-hidden px-[5rem]">
          <p>Services Skills - {skills}</p>
          <MainSection
            title={selectedSkill?.title}
            image={selectedSkill?.image}
            subtitle={selectedSkill?.subtitle}
            description={selectedSkill?.description}
          />
          <div className="w-full flex items-center justify-center my-[5rem]">
            <div className="w-[60%]">
              <Text
                variant="h3"
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
            title="Navigate Your Compliance Journey"
            explanation="From ISO certifications to PCI DSS assessments, we guide you through every step of your security and compliance transformation with expert training and support."
            button={
              <Button
                variant="secondary"
                label="Contact Us"
                customClassName="mt-[2rem] mb-[150px]"
              />
            }
          />
        </section>
      </Outlet>
    </motion.section>
  );
};

export { ServiceSkillsPage };
