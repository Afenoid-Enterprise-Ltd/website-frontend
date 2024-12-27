import { Outlet } from "../../ui";
import {MainSection} from "./components/mainSection";

const PrivacyPolicyPage = () => {
  return (
    <>
    <Outlet>
      <MainSection />
    </Outlet>
    
    </>

  );
}
 
export {PrivacyPolicyPage};