import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import { ContactDetails, ContactForm, HeroSection } from "./components";

const ContactUsPage = () => {

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <section className="overflow-x-hidden my-48 px-[5rem] flex gap-20">
          <div className="flex flex-col gap-16 w-1/2">
            <HeroSection />
            <ContactDetails />
          </div>
          <div className="w-1/2">
            <ContactForm />
          </div>
        </section>
      </Outlet>
    </motion.section>
  );
};

export { ContactUsPage };
