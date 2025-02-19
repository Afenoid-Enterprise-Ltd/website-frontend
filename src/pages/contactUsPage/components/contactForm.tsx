import { useState } from "react";
import {
  Button,
  Text,
  Dropdown,
  Input,
  ButtonLoader,
  Textarea,
} from "../../../ui";
import { consultationFormSchema } from "../../../schema";
import { useCountries } from "use-react-countries";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { SCRIPT_DETAILS } from "../../../utils/constants";

const ContactForm = () => {
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
      console.log(data);
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
        customClassName="msm:text-xl msm:font-medium"
      >
        Kindly fill this form
      </Text>

      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-12 mt-9 msm:gap-7"
          onSubmit={handleSubmit(bookConsultation)}
        >
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

          <Textarea label="Message" name="Message" placeholder="Hello" />

          <div>
            <Button
              label={loading ? <ButtonLoader /> : "Submit"}
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
