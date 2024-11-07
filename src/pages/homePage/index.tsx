import { motion } from "framer-motion";
import { Outlet } from "../../ui";

const HomePage = () => {
  return (
    <motion.section
      initial={{ x: 2500 }}
      animate={{ x: 1 }}
      exit={{ x: 2500 }}
      transition={{ duration: 0.3 }}
    >
      <Outlet>This is the Home Page</Outlet>
    </motion.section>
  );
};

export { HomePage };
