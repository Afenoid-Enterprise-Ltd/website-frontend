import React from "react";
import { FooterLogo } from "./footerLogo";
import { Link } from "react-router-dom";
import { Text } from "../ui";
import {
  FaSquareXTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa6";
import { SkylineImg } from "../assets";

type Social = {
  icon: any;
  route: string;
};

type LinkItem = {
  name: string;
  route: string;
};

type FooterLink = {
  title: string;
  array: LinkItem[];
};

const Footer: React.FC = () => {
  const socials: Social[] = [
    { icon: <FaSquareXTwitter color="#FFF9F2" size={30} />, route: "/twitter" },
    { icon: <FaInstagram color="#FFF9F2" size={30} />, route: "/instagram" },
    { icon: <FaLinkedin color="#FFF9F2" size={30} />, route: "/linkedin" },
    { icon: <FaFacebook color="#FFF9F2" size={30} />, route: "/facebook" },
  ];

  const footerLinks: FooterLink[] = [
    {
      title: "Company",
      array: [
        { name: "About Us", route: "/about-us" },
        { name: "Our Services", route: "/services" },
        { name: "Resources", route: "/resources" },
        { name: "Careers", route: "/careers" },
      ],
    },
    {
      title: "Partners",
      array: [
        { name: "PECB", route: "/pecb" },
        { name: "ISACA", route: "/isaca" },
        { name: "PCISSC", route: "/pcissc" },
        { name: "SWIFT", route: "/swift" },
      ],
    },
    {
      title: "Legal",
      array: [
        { name: "Privacy Policy", route: "/privacy-policy" },
        { name: "Terms of Service", route: "/terms-of-service" },
      ],
    },
    {
      title: "Support",
      array: [
        { name: "FAQs", route: "/resources/#faqs" },
        { name: "Contact Us", route: "/contact-us" },
      ],
    },
  ];

  return (
    <footer className="w-screen bg-afenoid-white">
      <img src={SkylineImg} alt="Skyline Pattern" />
      <div className="w-full h-auto bg-afenoid-green flex justify-between items-center p-[5rem] mmlg:p-[3rem] mmd:flex-col-reverse mmd:items-stretch  mxs:p-4">
        <div className="flex flex-col gap-8">
          <FooterLogo customClassName="mmd:hidden" />

          <div className="flex justify-start items-center gap-4 mmd:justify-center mmd:mt-10">
            {socials.map((social, index) => (
              <Link
                to={social.route}
                key={index}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
          <div className="mmd:hidden">
            <Text
              color="floral-white"
              variant="caption-mid"
              fontFamily="playfair-display"
              customClassName="italic"
            >
              Strengthening Organizations, Equipping Professionals.
            </Text>
          </div>
        </div>
        <div className=" ">
          <FooterLogo customClassName="hidden mmd:block" />
          <div className="flex gap-16 mlg:gap-10 mmd:grid mmd:grid-cols-2 mmd:gap-x-[15rem] mmd:mt-6 msm:gap-x-[12rem] mxxs:gap-x-[5rem]">
            {footerLinks.map((footerLink, index) => (
              <div key={index}>
                <Text
                  variant="h6"
                  color="floral-white"
                  fontWeight="semi-bold"
                  fontFamily="proxima-nova"
                  customClassName="uppercase tracking-wide mb-5"
                >
                  {footerLink.title}
                </Text>
                <div>
                  {footerLink.array.map((link) => (
                    <Link to={link.route}>
                      <Text
                        variant="body-reg"
                        color="floral-white"
                        fontWeight="light"
                        fontFamily="proxima-nova"
                        customClassName="mb-3 transition ease-in-out delay-150 duration-300 hover:underline hover:underline-offset-4"
                      >
                        {link.name}
                      </Text>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
