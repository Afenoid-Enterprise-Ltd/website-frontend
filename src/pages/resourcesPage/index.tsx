import { Outlet } from "../../ui";
import { HeroSection, CaseStudySection } from "./components";


const ResourcesPage = () => {
  return (
    <Outlet>
      <HeroSection/>
      <CaseStudySection/>
     </Outlet>
  );
}
 
export {ResourcesPage};