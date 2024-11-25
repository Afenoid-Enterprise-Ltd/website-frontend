import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Modal, Input } from "../ui";
import { Text, Button } from "../ui";
import { FormCover } from "../assets";
import { consultationFormSchema } from "../schema";

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationForm: React.FC<FormProps> = ({ isOpen, onClose }) => {
  const methods = useForm<z.infer<typeof consultationFormSchema>>({
    resolver: zodResolver(consultationFormSchema),
    mode: "onChange",
  });

  const { handleSubmit, formState } = methods;
  const { isValid } = formState;  

  const bookConsultation = async (
    data: z.infer<typeof consultationFormSchema>
  ) => {
    console.log("Submitted Data:", data);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <section className="">
        <div className="h-[13rem] w-full">
          <img
            src={FormCover}
            alt="Cover Image for Form"
            className="h-full w-full"
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
        <div className="w-[90%]">
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            align="left"
            color="af-dark-green"
            fontWeight="light"
            customClassName="my-8"
          >
            Fill in your details below so we can understand your needs and
            prepare a focused discussion.
          </Text>
        </div>

        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(bookConsultation)}>
            <Input label="First Name" type="text" name="firstname" />
            <Input label="Last Name" type="text" name="lastname" />
            <Input label="Email Name" type="email" name="email" />
            <Input label="Phone Number" type="phoneNumber" name="number" />
            <Input label="Country" type="text" name="country" />
            <Input label="Company" type="text" name="company" />
          </form>
        </FormProvider>

        <Button
          label="Submit"
          variant="primary"
          customClassName="mb-8"
          type="submit"
          disabled={!isValid}
        />
      </section>
    </Modal>
  );
};

export { ConsultationForm };
