import { AboutUs } from "./aboutUs";
import { Home } from "./home";
import { Services } from "./services";
import { Resources } from "./resources";
import {CaseStudies} from "./caseStudies";

const BodySection = () => {
  return (
    <section className="p-[5rem] mxs:p-[3rem]">
      <Home />
      <Services />
      <Resources />
      <AboutUs />
      <CaseStudies />
    </section>
  );
};

export { BodySection };
