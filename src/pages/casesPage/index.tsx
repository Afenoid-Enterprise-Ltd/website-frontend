import { motion } from "framer-motion";
import { Outlet } from "../../ui";

const CasesPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
            This is the case page
      </Outlet>
    </motion.section>
  );
};

export { CasesPage };