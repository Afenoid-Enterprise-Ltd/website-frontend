import React from "react";
import { Text } from "../../../ui";
import {
  EnvelopeIcon,
  TelephoneIcon,
  FacebookGreen,
  TwitterGreen,
  InstagramGreen,
  LinkedinGreen,
} from "../../../assets";
import { Link } from "react-router-dom";

const ContactDetails = () => {
  const details = [
    {
      country: "Nigeria",
      address:
        "Block B, Ground Floor AUJ Complex,* 564/565 Independence Ave,* Central Business District,* 900211,* Abuja",
      email: "serve@afenoid.com",
      phone: "+2342092911777",
    },
    {
      country: "England",
      address:
        "Navigation House Unit 6,* Town Quay Wharf, Abbey Road,* Barking,* Essex, England,* IG11 7BZ",
      email: "director@afenoid.co.uk",
      phone: "+2342092911777",
    },
  ];

  const socialLinks = [
    { link: "https://x.com/Afenoid", icon: TwitterGreen },
    {
      link: "https://www.instagram.com/afenoidenterprise",
      icon: InstagramGreen,
    },
    {
      link: "https://www.linkedin.com/company/afenoid-enterprise",
      icon: LinkedinGreen,
    },
    { link: "/", icon: FacebookGreen },
  ];

  return (
    <section className="flex flex-col gap-10">
      {details.map((detail, index) => (
        <ContactDetail key={index} {...detail} />
      ))}
      <div className="flex gap-4 items-center justify-start mt-8 msm:gap-8 msm:justify-center">
        {socialLinks.map((socialLink, index) => (
          <Link key={index} to={socialLink.link}>
            <img src={socialLink.icon} alt="" className="msm:w-[2rem]" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export { ContactDetails };

interface ContactDetailProps {
  country: string;
  address: string;
  email: string;
  phone: string;
}

export const ContactDetail: React.FC<ContactDetailProps> = (props) => {
  const { country, address, email, phone } = props;

  return (
    <div className="msm:border-2 msm:border-b-0 msm:border-r-0 msm:border-l-0 msm:border-t-[#9FA39B]">
      <Text
        fontFamily="raleway"
        color="af-dark-green"
        variant="h3"
        fontWeight="medium"
        customClassName="msm:!text-h4 mt-8"
      >
        Office Address ({country})
      </Text>
      <Text
        fontFamily="proxima-nova"
        fontWeight="light"
        variant="h5"
        color="af-dark-green"
        customClassName="msm:!text-h5"
      >
        {address?.split("*").map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < address.split("*").length - 1 && (
              <>
                <br />
              </>
            )}
          </React.Fragment>
        ))}
      </Text>
      <div className="flex flex-col my-6">
        <div className="flex gap-2">
          <img src={EnvelopeIcon} alt="Envelope Icon" className="text-sm w-6" />
          <Text
            fontFamily="raleway"
            color="af-dark-green"
            variant="h3"
            fontWeight="medium"
            customClassName="msm:!text-h4"
          >
            Email Address
          </Text>
        </div>
        <Text
          fontFamily="proxima-nova"
          fontWeight="bold"
          variant="h5"
          color="af-dark-green"
          customClassName="mt-3"
        >
          {email}
        </Text>
      </div>

      <div className="flex flex-col">
        <div className="flex gap-2">
          <img
            src={TelephoneIcon}
            alt="Telephone Icon"
            className="text-sm w-6"
          />
          <Text
            fontFamily="raleway"
            color="af-dark-green"
            variant="h3"
            fontWeight="medium"
            customClassName="msm:!text-h4"
          >
            Office Line
          </Text>
        </div>
        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          variant="h5"
          color="af-dark-green"
          customClassName="mt-2"
        >
          {phone}
        </Text>
      </div>
    </div>
  );
};
