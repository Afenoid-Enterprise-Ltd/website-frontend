// import { useState } from "react";
import { motion } from "framer-motion";
import { Outlet} from "../../ui";
import { HeroSection, BodySection } from "./components"


const SiteMapPage = () => {
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
          <BodySection/>
        </section>
      </Outlet>
    </motion.section>
  );
}
 
export {SiteMapPage};