

import { Link } from "react-router-dom";
import { Button } from "../../../ui";
import { ChoiceAfenoid } from "../../../components";
import { HeroDivs } from "./heroDivs";

const ChoiceSection = () => {
  return (
    <section className="my-[3.5rem] px-[5rem]">
      <HeroDivs/>
      <div className="px-[3rem] flex flex-col">
        <ChoiceAfenoid />
        <div className="flex justify-center">
          <Link to="/about-us">
            <Button variant="secondary" label="About Us" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ChoiceSection };
