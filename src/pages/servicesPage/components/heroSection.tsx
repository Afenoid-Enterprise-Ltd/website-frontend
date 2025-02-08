import React from "react";
import { Text, Button } from "../../../ui";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ServicesHeroImg } from "../../../assets";

interface HeroSectionProps {
  openModal: () => void;
}

interface HeroDesktopProps {
  modalProp: () => void;
}

interface HeroMobileProps {
  modalProp: () => void;
}

const HSDesktop: React.FC<HeroDesktopProps> = (props) => {
  const { modalProp } = props;

  return (
    <section
      className="w-screen 2xl:w-full h-[90vh] bg-[#214d1e98] bg-blend-overlay bg-cover bg-center flex justify-start items-center px-[5rem] "
      style={{ backgroundImage: `url(${ServicesHeroImg })` }}
    >
      <div className="w-[70%] mlg:w-[90%] mxxs:w-full">
        <Text
          variant="h1"
          fontWeight="medium"
          fontFamily="raleway"
          align="left"
          color="floral-white"
          customClassName="!text-[3rem] leading-[140%]"
        >
          Prioritizing the <span className="font-bold">security</span> and{" "}
          <span className="font-bold">reliability</span> of digital systems,
          services, and transactions.
        </Text>
        <Text
          variant="h5"
          fontWeight="thin"
          fontFamily="proxima-nova"
          align="left"
          color="floral-white"
          customClassName="my-4"
        >
          We specialize in providing managed services in IT governance, risk
          management, and compliance.
        </Text>
        <div className="flex justify-start items-center gap-7">
          <button
            className="bg-afenoid-green/75 border-white border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-white text-center text-base h-auto w-auto font-proxima-nova font-normal transition delay-150 duration-300 ease-in-out  hover:bg-afenoid-lemon/75 hover:border-transparent mmlg:w-[80%] mxs:w-[90%]"
            onClick={modalProp}
          >
            Schedule a Meeting
          </button>
          <Button
            variant="secondary"
            label="Contact Us"
            customClassName="border-white text-white"
            // onClick={modalProp}
          />
        </div>
      </div>
    </section>
  );
};

const HSMobile: React.FC<HeroMobileProps> = (props) => {
  const { modalProp } = props;

  return (
    <section className="w-screen h-[82.5vh] px-[3rem] mxs:px-[2rem] mxxs:px-4">
      <div className="w-full">
        <Text
          variant="h2"
          fontWeight="regular"
          fontFamily="gambetta"
          align="left"
          color="af-green"
          customClassName="my-6"
        >
          Prioritizing the <span className="text-afenoid-yellow">security</span>{" "}
          and <span className="text-afenoid-yellow">reliability</span> of
          digital systems, services, and transactions.
        </Text>
        <div className="w-full relative h-auto">
          <img
            src={ServicesHeroImg}
            alt="Services Page Image"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-[#214d1e98] mix-blend-multiply"></div>
        </div>
        <Text
          variant="h5"
          fontWeight="thin"
          fontFamily="proxima-nova"
          align="left"
          color="af-green"
          customClassName="my-6"
        >
          We specialize in providing managed services in IT governance, risk
          management, and compliance.
        </Text>
        <Button
          variant="secondary"
          label="Book a Consultation"
          customClassName="mt-8"
          onClick={modalProp}
        />
      </div>
    </section>
  );
};

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const { openModal } = props;

  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return isSmallDevice ? (
    <HSMobile modalProp={openModal} />
  ) : (
    <HSDesktop modalProp={openModal} />
  );
};

export { HeroSection };
