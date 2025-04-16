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
      style={{ backgroundImage: `url(${ServicesHeroImg})` }}
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
          Prioritizing the{" "}
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
        <div className="flex justify-start items-center gap-7 mmlg:flex-col mmlg:items-start mmlg:w-[45%] mmd:w-[65%] mxs:w-[75%]">
          <button
            className="bg-afenoid-green/75 border-white border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-white text-center text-base h-auto w-auto font-proxima-nova font-normal transition delay-150 duration-300 ease-in-out  hover:bg-afenoid-lemon/75 hover:border-transparent mmlg:w-[85%] mxs:w-[90%] mxs:text-[14px]"
            onClick={modalProp}
          >
            Schedule a Meeting
          </button>
          <button className="bg-transparent border-white border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-white text-center text-base h-auto w-auto font-proxima-nova font-normal transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-afenoid-lemon mmlg:w-[85%] mxs:w-[90%]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

const HSMobile: React.FC<HeroMobileProps> = (props) => {
  const { modalProp } = props;

  return (
    <section
      className="w-screenbg-[#214d1e98] bg-blend-overlay bg-cover bg-center h-[82.5vh] flex justify-center items-center px-[3rem] mxs:px-[2rem] mxxs:px-4"
      style={{ backgroundImage: `url(${ServicesHeroImg})` }}
    >
      <div className="w-full flex flex-col justify-center items-start gap-4">
        <Text
          variant="h3"
          fontWeight="semi-bold"
          fontFamily="raleway"
          align="left"
          color="af-white"
          customClassName="!text-[32px] leading-[116%]"
        >
          Prioritizing the security and reliability of digital systems,
          services, and transactions.
        </Text>
        <Text
          variant="h5"
          fontWeight="thin"
          fontFamily="proxima-nova"
          align="left"
          color="af-white"
          customClassName="!text-base leading-[140%]"
        >
          We specialize in providing managed services in IT governance, risk
          management, and compliance.
        </Text>
        <div className="flex flex-col gap-4">
          <Button
            variant="secondary"
            label="Schedule a Meeting"
            customClassName="w-full !bg-afenoid-green/80 text-white border-white "
            onClick={modalProp}
          />
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
