import { motion } from "framer-motion";
import { Outlet, Button } from "../../ui";
import { caseStudy } from "../caseStudiesPage/caseStudy.ts";
import { useParams } from "react-router-dom";
import { HeaderSection } from "./components/headerSection.tsx";
import { DataSection } from "./components/dataSection.tsx";
import { CallToAction } from "../../components/callToAction.tsx";
import { RelatedSection } from "./components/relatedSection.tsx";
import { HomeHeroImage } from "../../assets";

const CasesPage = () => {
  const { title } = useParams();

  const item = caseStudy.find((study) => {
    return study.title.toLowerCase().split(' ').join('-') === title;
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <HeaderSection />
        <DataSection />

        <CallToAction
          title="Ready to have a conversation with us?"
          explanation="Schedule a meeting with a consultant right away"
          button={
            <Button
              variant="primary"
              label="Book a Consultation"
              customClassName="mt-[2rem]"
            />
          }
        />

        <RelatedSection />

        <div className="w-[530px] mx-auto mt-[150px]">
            <img src={HomeHeroImage} alt="" />
        </div>

        <CallToAction
          title="Our journey with you starts here"
          explanation="Looking to implement digital trust solutions, assess your organization's resilience, or enhance your professional expertise?"
          button={
            <Button
              variant="secondary"
              label="Contact Us"
              customClassName="mt-[2rem]"
            />
          }
        />
      </Outlet>
    </motion.section>
  );
};

export { CasesPage };
