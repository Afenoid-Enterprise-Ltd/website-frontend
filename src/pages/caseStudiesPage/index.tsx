import { motion } from "framer-motion";
import { Button, Outlet } from "../../ui";
import { CallToAction } from "../../components/callToAction.tsx";
import { HeroSection } from "./components/heroSection.tsx";
import { MainSection } from "./components/mainSection.tsx";

const CaseStudiesPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <HeroSection />
        <MainSection />
        <CallToAction
          title="Ready to have a conversation with us?"
          explanation="Schedule a meeting with a consultant right away"
          button={
            <Button
              variant="primary"
              label="Book a Consultation"
              customClassName="mt-[2rem] mb-[150px]"
            />
          }
        />
      </Outlet>
    </motion.section>
  );
};

export { CaseStudiesPage };
