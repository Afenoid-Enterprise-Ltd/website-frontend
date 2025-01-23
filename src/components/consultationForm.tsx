import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, Button, Dropdown, Modal, Input, ButtonLoader} from "../ui";
import { FormCover } from "../assets";
import { consultationFormSchema } from "../schema";
import { useCountries } from "use-react-countries";
import { toast } from "sonner";
import { SCRIPT_DETAILS } from "../utils/constants";

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConsultationForm: React.FC<FormProps> = ({ isOpen, onClose }) => {
  const [loading, setLoading] = useState<boolean>(false);

  const methods = useForm<z.infer<typeof consultationFormSchema>>({
    resolver: zodResolver(consultationFormSchema),
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  const bookConsultation = async (
    data: z.infer<typeof consultationFormSchema>
  ) => {
    try {
      setLoading(true);
      const formData = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });

      const url = `${SCRIPT_DETAILS.link}?${formData.toString()}`;

      await fetch(url, {
        method: "GET",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
      });

      // Handle success case
      reset();
      toast.success(
        "Thank you! Your consultation request has been submitted successfully."
      );
      onClose();
    } catch (e: any) {
      // Handle error case
      console.error("Error submitting form:", e);
      toast.error("Unable to submit your request. Please try again later.");
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  const servicesData = [
    { label: "Trust Services", value: "Trust Services" },
    {
      label: "Transformation Consulting",
      value: "Transformation Consulting",
    },
    {
      label: "Skills Development",
      value: "Skills Development",
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
        <div className="h-[13rem] w-full msm:h-[234px]">
          <img
            src={FormCover}
            alt="Cover Image for Form"
            className="h-full w-full object-cover"
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
              name="Firstname"
              placeholder="Enter your first name"
            />
            <Input
              label="Last Name"
              type="text"
              name="Lastname"
              placeholder="Enter your last name"
            />
            <Input
              label="Email"
              type="email"
              name="Email"
              placeholder="Enter your email address"
            />
            <Input
              label="Phone Number"
              type="text"
              name="Phone"
              placeholder="Enter your mobile number with its country code"
            />
            <Dropdown
              label="Service"
              name="Service"
              options={servicesData}
              placeholder="Select a service"
            />
            <Dropdown
              label="Country"
              name="Country"
              options={formattedCountriesData}
              placeholder="Select a country"
            />
            <Input
              label="Company"
              type="text"
              name="Company"
              placeholder="Enter your company name"
            />

            <Button
              label={loading ? <ButtonLoader/> : "Submit"}
              variant="primary"
              customClassName="mb-8"
              type="submit"
              disabled={loading}
            />
          </form>
        </FormProvider>
      </section>
    </Modal>
  );
};

export { ConsultationForm };