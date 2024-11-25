import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import { HeroSection, InfoSection, AccordionSection } from "./components";

const AboutUsPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <HeroSection />
        <InfoSection />
        <AccordionSection />
      </Outlet>
    </motion.section>
  );
};

export { AboutUsPage };
