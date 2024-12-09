import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, Button, Dropdown, Modal, Input } from "../ui";
import { FormCover } from "../assets";
import { consultationFormSchema } from "../schema";
import { useCountries } from "use-react-countries";
import { toast } from "sonner";

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationForm: React.FC<FormProps> = ({ isOpen, onClose }) => {
  const methods = useForm<z.infer<typeof consultationFormSchema>>({
    resolver: zodResolver(consultationFormSchema),
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  const bookConsultation = async (
    data: z.infer<typeof consultationFormSchema>
  ) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby8lGqxlsEA9mPgpbwLkEgao4COkn3ZkgRlwE5YYpYrmRGxky3qyZMS6sUiPV01BmiK9Q/exec?name=Sheet1",
        {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      if (response.ok && responseData.status === "success") {
        console.log("Submitted Data:", data);
        reset();
        toast.success("You have successfully booked for a consultation");
        onClose();
      } else {
        toast.error(
          responseData.message || "Failed to submit consultation request"
        );
      }
    } catch (e: any) {
      console.error("Submission error:", e);
      toast.error("An unexpected error occurred");
    }
  };

  const servicesData = [
    { label: "Auditing", value: "Auditing" },
    {
      label: "Consulting",
      value: "Consulting",
    },
    {
      label: "Training",
      value: "Training",
    },
  ];

  const { countries } = useCountries();
  const formattedCountriesData = countries
    .map(({ name, emoji }: { name: string; emoji: string }) => ({
      value: name,
      label: `${emoji} ${name}`,
    }))
    .sort((a, b) => a.value.localeCompare(b.value));

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
            <Input
              label="First Name"
              type="text"
              name="firstname"
              placeholder="Enter your first name"
            />
            <Input
              label="Last Name"
              type="text"
              name="lastname"
              placeholder="Enter your last name"
            />
            <Input
              label="Email"
              type="email"
              name="email"
              placeholder="Enter your email address"
            />
            <Input
              label="Phone Number"
              type="text"
              name="phoneNumber"
              placeholder="Enter your mobile number"
            />
            <Dropdown
              label="Service"
              name="service"
              options={servicesData}
              placeholder="Select a service"
            />
            <Dropdown
              label="Country"
              name="country"
              options={formattedCountriesData}
              placeholder="Select a country"
            />
            <Input
              label="Company"
              type="text"
              name="company"
              placeholder="Enter your company"
            />

            <Button
              label="Submit"
              variant="primary"
              customClassName="mb-8"
              type="submit"
            />
          </form>
        </FormProvider>
      </section>
    </Modal>
  );
};

export { ConsultationForm };
