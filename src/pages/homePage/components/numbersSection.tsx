import React, { useState, useEffect, useRef } from "react";
import { animate } from "framer-motion";
import Marquee from "react-fast-marquee";
import {
  CreditCardIcon,
  PeopleIcon,
  BankIcon,
  GlobeIcon,
} from "../../../assets";
import { Text } from "../../../ui";
import {
  CenBankLogo,
  EcobankLogo,
  GalaxyBackboneLogo,
  KeystoneBankLogo,
  MTNLogo,
  PremiumPensionLogo,
  StandardCharteredLogo,
  SterlingBankLogo,
  BankOfAmericaLogo,
  BankOfBotswana,
  FidelityBankLogo,
  GTCOLogo,
  AXAInsurance,
  FIRSLogo,
  IsacaLogo,
  EtranzactLogo,
  ShellLogo,
  SkylineImg,
  HomeHeroImage,
} from "../../../assets";

interface CountUpProps {
  start?: number;
  end: number;
}

const CountUp: React.FC<CountUpProps> = ({ start = 0, end }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 } // Adjust as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const controls = animate(start, end, {
        duration: 3,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toString();
          }
        },
      });

      return () => controls.stop();
    }
  }, [inView, start, end]);

  return (
    <span
      ref={ref}
      className="text-[4rem] font-medium font-raleway text-afenoid-dark-green mmd:text-[2rem]"
    >
      0
    </span>
  );
};

const NumbersSection = () => {
  const numberData = [
    {
      icon: CreditCardIcon,
      title: 200,
      description: "IT GRC services carried out in 2024",
    },
    {
      icon: PeopleIcon,
      title: 1000,
      description: "professionals trained in 2024",
    },
    {
      icon: BankIcon,
      title: 13,
      description: "years of continuous IT GRC service delivery",
    },
    {
      icon: GlobeIcon,
      title: 50,
      description: "countries served across the world",
    },
  ];

  const clients = [
    StandardCharteredLogo,
    GalaxyBackboneLogo,
    EcobankLogo,
    CenBankLogo,
    MTNLogo,
    KeystoneBankLogo,
    PremiumPensionLogo,
    SterlingBankLogo,
    BankOfAmericaLogo,
    GTCOLogo,
    BankOfBotswana,
    AXAInsurance,
    FidelityBankLogo,
    FIRSLogo,
    IsacaLogo,
    ShellLogo,
    EtranzactLogo,
  ];

  return (
    <section className="w-screen 2xl:w-full bg-white">
      <div className="p-[5rem] mmd:px-[3rem] msm:px-6">
        <div className="flex flex-col items-center gap-4 px-[15rem] mlg:px-[8rem]  mmd:px-[4rem] msm:px-0 msm:gap-[0.7rem] msm:w-full">
          <Text
            variant="h2"
            align="center"
            color="af-dark-green"
            fontWeight="medium"
            fontFamily="raleway"
            customClassName="mb-3 msm:text-h4 msm:mb-0 "
          >
            Optimize Your Digital Posture
          </Text>
          <Text
            variant="h5"
            align="center"
            color="af-dark-green"
            fontWeight="light"
            fontFamily="proxima-nova"
          >
            We transform complex compliance requirements into clear, actionable
            strategies. Our proven expertise helps you create robust IT systems
            that set new standards for security and performance.
          </Text>
        </div>

        <div className="w-[60%] my-[3rem] mx-auto mxs:w-[80%]">
          <img src={HomeHeroImage} alt="Hero Image" loading="lazy" />
        </div>

        <div className="my-20">
          <Text
            variant="h5"
            align="center"
            color="af-dark-green"
            fontWeight="medium"
            fontFamily="raleway"
            customClassName="text-[36px] mxs:text-[20px]"
          >
            Our Experience on a global scale
          </Text>
          <div className="grid grid-cols-4 gap-12 my-[4rem] mlg:grid mlg:grid-cols-2 mmd:mx-[3rem] mmd:my-[4rem] msm:mx-0">
            {numberData.map((number, index) => (
              <Number
                icon={number.icon}
                title={number.title}
                description={number.description}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <img src={SkylineImg} alt="Skyline Pattern" loading="lazy" />
      <div className="w-full bg-afenoid-light-grey flex justify-between items-center py-[1.5rem] px-[5rem] mb-[5rem] msm:px-[3rem] ">
        <Marquee pauseOnHover={false} speed={250} direction="left">
          {clients.map((client, index) => (
            <img
              src={client}
              alt="Logos of Clients"
              key={index}
              className="max-w-auto mr-24 object-contain mmd:max-w-12 mmd:mr-16"
              loading="lazy"
              style={{ imageRendering: "crisp-edges" }}
            />
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export { NumbersSection };

type NumberProps = {
  icon: string;
  title: number;
  description: string;
};

export const Number: React.FC<NumberProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center w-auto">
      <div className="bg-[#9bc73c28] p-4 rounded-full mmd:w-14 mmd:h-14 mmd:p-2">
        <img
          src={icon}
          alt="Icon Image"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
      <div>
        <div className="my-[2rem]">
          <CountUp end={title} />
          <span className="text-[4rem] mxl:text-[3rem] mlg:text-[2.5rem] msm:text-[1.5rem] mxs:text-[1rem]">+</span>
        </div>
      </div>
      <div>
        <Text
          variant="h6"
          fontFamily="raleway"
          fontWeight="regular"
          align="center"
          customClassName="text-[20px] mxs:!text-[16px]"
        >
          {description}
        </Text>
      </div>
    </div>
  );
};
