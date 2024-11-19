import { Outlet } from "../../ui";
import { HeroSection, MainSection, } from "./components";

const ServicesPage = () => {
  return (
    <Outlet>
      <HeroSection/>
      <MainSection/>
     </Outlet>
  );
}
 
export {ServicesPage};