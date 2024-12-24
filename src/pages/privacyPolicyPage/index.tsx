import { PageUnderConstruction } from "../../components";
import { motion } from "framer-motion";

const PrivacyPolicyPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <PageUnderConstruction />
    </motion.section>
  );
};

export { PrivacyPolicyPage };
