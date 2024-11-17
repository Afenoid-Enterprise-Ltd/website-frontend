import { Outlet } from "../../ui";
import { HeroSection, MainSection, MinorSection } from "./components";

const ServicesPage = () => {
  return (
    <Outlet>
      <HeroSection/>
      <MainSection/>
      <MinorSection/>
     </Outlet>
  );
}
 
export {ServicesPage};