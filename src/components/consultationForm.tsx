import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text, Button, Dropdown, Modal, Input } from "../ui";
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
  const methods = useForm<z.infer<typeof consultationFormSchema>>({
    resolver: zodResolver(consultationFormSchema),
    mode: "onChange",
  });

  const { handleSubmit, reset } = methods;

  // const bookConsultation = async (
  //   data: z.infer<typeof consultationFormSchema>
  // ) => {
  //   try {
  //     const response = await fetch(SCRIPT_DETAILS.link, {
  //       method: "POST",
  //       mode: "cors",
  //       cache: "no-cache",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(data),
  //     });

  //     const responseData = await response.json();
  //     if (response.ok && responseData.status === "success") {
  //       console.log("Submitted Data:", data);
  //       reset();
  //       toast.success("You have successfully booked for a consultation");
  //       onClose();
  //     } else {
  //       toast.error(
  //         responseData.message || "Failed to submit consultation request"
  //       );
  //       console.log(data)
  //     }
  //   } catch (e: any) {
  //     console.error("Submission error:", e);
  //     toast.error("An unexpected error occurred");
  //   }
  // };

  const bookConsultation = async (
    data: z.infer<typeof consultationFormSchema>
  ) => {
    try {
      const formData = new URLSearchParams();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
  
      const url = `${SCRIPT_DETAILS.link}?${formData.toString()}`;
      
      await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Handle success case
      reset();
      toast.success("Thank you! Your consultation request has been submitted successfully.");
      onClose();
  
    } catch (e: any) {
      // Handle error case
      console.error("Error submitting form:", e);
      toast.error("Unable to submit your request. Please try again later.");
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
