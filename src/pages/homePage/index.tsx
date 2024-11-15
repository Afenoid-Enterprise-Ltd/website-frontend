import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import {
  HeroSection,
  NumbersSection,
  ChoiceSection,
  ServicesSection,
  CaseStudiesSection,
} from "./components";

const HomePage = () => {
  return (
    <motion.section
      initial={{ x: 2500 }}
      animate={{ x: 1 }}
      exit={{ x: 2500 }}
      transition={{ duration: 0.3 }}
    >
      <Outlet>
        <HeroSection />
        <NumbersSection />
        <ChoiceSection />
        <ServicesSection />
        <CaseStudiesSection />
      </Outlet>
    </motion.section>
  );
};

export { HomePage };
