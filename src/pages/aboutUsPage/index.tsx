import { Outlet } from "../../ui";
import { HeroSection, InfoSection } from "./components";

const AboutUsPage = () => {
  return (
    <Outlet>
      <HeroSection/>
      <InfoSection/>
    </Outlet>
  );
}
 
export {AboutUsPage};