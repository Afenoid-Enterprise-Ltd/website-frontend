import React from "react";
import { Modal, Text, Button } from "../ui";
import { FormCover } from "../assets";
import { Link } from "react-router-dom";

interface ConsultationProps {
  isOpen: boolean;
  onClose: () => void;
}

const RequestConsultation: React.FC<ConsultationProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section>
        <div className="h-[13rem] w-full">
          <img
            src={FormCover}
            alt="Cover Image for Form"
            className="h-full w-full"
            loading="lazy"
          />
        </div>
        <Text
          variant="h2"
          fontFamily="gambetta"
          align="left"
          color="af-dark-green"
          fontWeight="medium"
          customClassName="my-8"
        >
          Request Your Consultation
        </Text>

        <div className="w-full">
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            align="left"
            color="af-dark-green"
            fontWeight="light"
            customClassName="my-8"
          >
            You’re being redirected to our consultation booking form. Click the
            button below to continue to the form and share your needs with us.
          </Text>
        </div>

        <div>
          <Link to = "https://outlook.office365.com/owa/calendar/AfenoidEnterpriseLimited1@afenoid.com/bookings/" target="_blank">
            <Button
              label="Continue"
              variant="primary"
              customClassName="mb-8"
              type="button"
            />
          </Link>
        </div>
      </section>
    </Modal>
  );
};

export { RequestConsultation };
