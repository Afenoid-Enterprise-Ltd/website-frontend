import React, { useState } from "react";
import { Button, Text, Dropdown, Input, ButtonLoader } from "../../../ui";
import { consultationFormSchema } from "../../../schema";
import { useCountries } from "use-react-countries";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { SCRIPT_DETAILS } from "../../../utils/constants"; 

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactForm:React.FC<FormProps> = ({ onClose }) => {
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
    <div className="w-full">
      <Text
        variant="h3"
        color="af-dark-green"
        fontFamily="raleway"
        fontWeight="light"
        customClassName=""
      >
        Kindly fill this form
      </Text>

      <FormProvider {...methods}>
        <form className="flex flex-col gap-12 mt-9" onSubmit={handleSubmit(bookConsultation)}>
          <div className="flex flex-col gap-3">
            <Input
              label="First Name"
              type="text"
              name="Firstname"
              placeholder="Enter your first name"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Input
              label="Last Name"
              type="text"
              name="Lastname"
              placeholder="Enter your last name"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Input
              label="Email"
              type="email"
              name="Email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Dropdown
              label="Service"
              name="Service"
              options={servicesData}
              placeholder="Select a service"
            />
          </div>

          <div className="flex flex-col gap-3">
            <Dropdown
              label="Country"
              name="Country"
              options={formattedCountriesData}
              placeholder="Select a country"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label
              htmlFor="message"
              className="text-xl text-afenoid-dark-green font-bold font-raleway"
            >
              MESSAGE <span className="text-[#F12222] ml-1">*</span>
            </label>
            <textarea
              id="message"
              required
              placeholder="Hello"
              className="border-2  py-4 px-3 bg-[#F8FAF4] text-lg font-proxima-nova font-light h-[17rem] focus:outline-none"
            ></textarea>
          </div>
          <div>
            <Button
              label={loading ? <ButtonLoader/> : "Submit"}
              variant="primary"
              customClassName="mb-8"
              type="submit"
              disabled={loading}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export { ContactForm };
