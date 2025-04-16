import { Text } from "../ui";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import {
  useState,
  FormEvent,
  KeyboardEvent,
  ChangeEvent,
  useEffect,
} from "react";
import { sanitize } from "../utils/constants";
import { toast } from "sonner";

// Define the types for MailchimpSubscribe render props
interface MailchimpRenderProps {
  subscribe: (formData: { EMAIL: string }) => void;
  status: "sending" | "success" | "error" | null;
  message: string | Error | null;
}

// Define props for our NewsletterForm component
interface NewsletterFormProps {
  status: "sending" | "success" | "error" | null;
  message: string | null;
  onValidated: (formData: { EMAIL: string }) => boolean | void;
}

const Newsletter = () => {
  const MAILCHIMP_URL = import.meta.env.VITE_MAILCHIMP_URL || '';

  return (
    <MailchimpSubscribe
      url={MAILCHIMP_URL}
      render={(props: MailchimpRenderProps) => {
        const { subscribe, status, message } = props || {};
        return (
          <div>
            <NewsletterForm
              status={status}
              message={message instanceof Error ? message.message : message}
              onValidated={(formData) => subscribe(formData)}
            />
          </div>
        );
      }}
    />
  );
};

export { Newsletter };

export const NewsletterForm = ({
  status,
  message,
  onValidated,
}: NewsletterFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");

  const handleFormSubmit = () => {
    setError(null);
    if (!email || email.indexOf("@") === -1) {
      setError("Please enter a valid email address");
      return;
    }

    const isFormValidated = onValidated({ EMAIL: email });
    if (isFormValidated) {
      setEmail("");
    }
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  

  const handleInputKeyEvent = (event: KeyboardEvent<HTMLInputElement>) => {
    setError(null);

    if (event.key === "Enter") {
      event.preventDefault();
      handleFormSubmit();
    }
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value || "";
    setEmail(value);
  };

  const handleBlur = () => {
    if (email && !isValidEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      setError(null);
    }
  };

  const getMessage = (message: string | null) => {
    if (!message) {
      return null;
    }
    const result = message.split("-");
    if ("0" !== result[0]?.trim()) {
      return sanitize(message);
    }
    const formattedMessage = result[1]?.trim() || null;
    return formattedMessage ? sanitize(formattedMessage) : null;
  };

  useEffect(() => {
    if (status === "success") {
      toast.success("Thank you for subscribing to our newsletter");
      setEmail("");
    } else if (status === "error") {
      toast.error(
        "An error occurred while trying to subscribe to our newsletter"
      );
    } else if (status === "sending") {
      toast.info("Subscribing to our newsletter...");
    }
  }, [status]);

  return (
    <div className="bg-afenoid-dark-green mx-[5rem] mmd:mx-[2rem]">
      <div className="w-full flex justify-between items-center p-[4rem] mlg:flex-col mlg:items-start mxs:px-4">
        <div className="w-[40%] mmd:w-full">
          <Text
            variant="h2"
            align="left"
            color="af-white"
            fontFamily="raleway"
            fontWeight="bold"
            customClassName="text-[40px] mmd:!text-[32px] mmd:!font-medium mxs:!text-[28px]"
          >
            Newsletter
          </Text>
          <Text
            variant="h6"
            align="left"
            color="af-white"
            fontFamily="proxima-nova"
            fontWeight="regular"
            customClassName="text-[24px] mxs:!text-[16px] my-4"
          >
            Sign up to receive the <br /> Comformeter Newsletter
          </Text>
        </div>
        <div className="w-[60%] mt-4 mlg:w-full">
          <form
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              handleFormSubmit();
            }}
          >
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="uppercase text-white font-proxima-nova text-base font-semibold"
              >
                Email Address <span className="text-red-700 text-2xl">*</span>
              </label>
              <div className="w-full flex justify-start items-center gap-4 mmd:flex-col mmd:items-start">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  className="w-[80%] h-full p-4 outline-none border-none placeholder:text-gray-300 placeholder:font-proxima-nova mmd:w-full"
                  placeholder="ndubuisi@afenoid.com"
                  onChange={handleEmailChange}
                  onBlur={handleBlur}
                  onKeyUp={handleInputKeyEvent}
                />
                <button
                  type="button"
                  className="text-white font-proxima-nova border-white border-2 py-3.5 px-[2.5rem] hover:bg-afenoid-lemon hover:border-afenoid-lemon disabled:border-none disabled:bg-slate-100 disbaled:text-gray-200 disabled:cursor-not-allowed"
                  onClick={handleFormSubmit}
                  disabled={status === "sending"}
                >
                  Submit
                </button>
              </div>
              {(status === "error" || error) && (
                <div
                  className="text-red-500 pt-2 font-proxima-nova text-sm"
                  dangerouslySetInnerHTML={{
                    __html: error || getMessage(message),
                  }}
                />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
