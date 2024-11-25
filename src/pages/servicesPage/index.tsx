import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import { HeroSection, MainSection } from "./components";

const ServicesPage = () => {
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
      </Outlet>
    </motion.section>
  );
};

export { ServicesPage };
