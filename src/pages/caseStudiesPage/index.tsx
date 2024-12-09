import { motion } from "framer-motion";
import { Outlet } from "../../ui";
import { Button } from "../../ui";
import { CallToAction } from "../../components/callToAction.tsx";
import { HeroSection } from "./components/heroSection.tsx";
import { MainSection } from "./components/mainSection.tsx";

const CaseStudiesPage = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const [selectedCaseStudy, setSelectedCaseStudy] = useState(
    isSmallDevice ? "PCI DSS" : caseStudyButtons[0]
  );

  useEffect(() => {
    if (isSmallDevice) {
      setSelectedCaseStudy("PCI DSS");
    }
  }, [isSmallDevice]);


  const pciCases = caseStudy.filter((item: Case) => item.segment === "PCI DSS");

  const ismsCases = caseStudy.filter(
    (item: Case) => item.segment === "ISO 27001"
  );
  const bcmsCases = caseStudy.filter(
    (item: Case) => item.segment === "ISO 22301 (BCMS)"
  );
  const qmsCases = caseStudy.filter(
    (item: Case) => item.segment === "ISO 9001 (QMS)"
  );

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
