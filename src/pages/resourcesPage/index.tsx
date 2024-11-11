import { Outlet } from "../../ui";
import { HeroSection, CaseStudySection, AccordionSection } from "./components";


const ResourcesPage = () => {
  return (
    <Outlet>
      <HeroSection/>
      <CaseStudySection/>
      <AccordionSection/>
     </Outlet>
  );
}
 
export {ResourcesPage};