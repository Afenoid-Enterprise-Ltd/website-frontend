import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../ui";
import { ChoiceAfenoid } from "../../../components";
import { HeroDivs } from "./heroDivs";

interface ChoiceSectionProps {
  openContactModal: () => void;
  openConsultationModal: () => void;
}

const ChoiceSection: React.FC<ChoiceSectionProps> = (props) => {
  const { openContactModal, openConsultationModal } = props;

  return (
    <section className="my-[3.5rem] px-[5rem] msm:px-[3.5rem]">
      <HeroDivs
        openContactModal={openContactModal}
        openConsultationModal={openConsultationModal}
      />
      <div className="px-[3rem] flex flex-col mmlg:px-0">
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
