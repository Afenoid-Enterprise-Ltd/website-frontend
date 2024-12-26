import React from "react";
import { Modal, Text, Button } from "../ui";
import { FormCover } from "../assets";

interface ConsultationProps {
  isOpen: boolean;
  onClose: () => void;
  redirectToContactForm: () => void;
}

const RequestConsultation: React.FC<ConsultationProps> = ({
  isOpen,
  onClose,
  redirectToContactForm,
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
          <Button
            label="Continue"
            variant="primary"
            customClassName="mb-8"
            type="button"
            onClick={redirectToContactForm}
          />
        </div>
      </section>
    </Modal>
  );
};

export { RequestConsultation };
