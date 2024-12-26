import React from "react";
import { Text, Button } from "../../../ui";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ResourcesPageHeroImg } from "../../../assets";

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
      className="w-screen h-[90vh] bg-[#214d1e98] bg-blend-overlay bg-cover bg-center flex justify-start items-center px-[5rem] "
      style={{ backgroundImage: `url(${ResourcesPageHeroImg})` }}
    >
      <div className="w-[70%] mlg:w-[90%]">
        <Text
          variant="h1"
          fontWeight="medium"
          fontFamily="gambetta"
          align="left"
          color="floral-white"
        >
          Prioritizing the <span className="text-afenoid-yellow">security</span>{" "}
          and <span className="text-afenoid-yellow">reliability</span> of
          digital systems, services, and transactions.
        </Text>
        <Text
          variant="h5"
          fontWeight="thin"
          fontFamily="proxima-nova"
          align="left"
          color="floral-white"
        >
          We specialize in providing managed services in IT governance, risk
          management, and compliance.
        </Text>
        <Button
          variant="secondary"
          label="Book a Consultation"
          customClassName="border-white text-white mt-8"
          onClick={modalProp}
        />
      </div>
    </section>
  );
};

const HSMobile: React.FC<HeroMobileProps> = (props) => {
  const { modalProp } = props;

  return (
    <section className="w-screen h-[82.5vh] px-[3rem]">
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
            src={ResourcesPageHeroImg}
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
