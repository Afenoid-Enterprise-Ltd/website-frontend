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
      className="text-[3.5rem] font-semibold font-gambetta text-afenoid-dark-green mmd:text-[2rem]"
    >
      0
    </span>
  );
};

const NumbersSection = () => {
  const numberData = [
    {
      icon: CreditCardIcon,
      title: 120,
      description: "PCI DSS assessments carried out over the past 10 years.",
    },
    {
      icon: PeopleIcon,
      title: 200,
      description: "Training sessions in the last 5years",
    },
    {
      icon: BankIcon,
      title: 40,
      description: "ISO implementation conducted in the last 10years",
    },
    {
      icon: GlobeIcon,
      title: 50,
      description: "Countries reached in the last decade",
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
            fontFamily="gambetta"
            customClassName="mb-3 msm:text-h4 msm:mb-0"
          >
            Optimize Your Security
          </Text>
          <Text
            variant="h5"
            align="center"
            color="af-dark-green"
            fontWeight="light"
            fontFamily="proxima-nova"
          >
            We transform complex compliance requirements into clear, actionable strategies. 
          </Text>
        </div>
        <div className="flex gap-12 mx-[5rem] my-[8rem] mlg:grid mlg:grid-cols-2 mmd:mx-[3rem] mmd:my-[6rem] msm:mx-0">
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

      <img src={SkylineImg} alt="Skyline Pattern" loading="lazy" />
      <div className="w-full bg-afenoid-light-grey flex justify-between items-center py-[1.5rem] px-[5rem] mb-[5rem] msm:px-[3rem] ">
        <Marquee pauseOnHover={false} speed={20} direction="left">
          {clients.map((client, index) => (
            <img
              src={client}
              alt="Logos of Clients"
              key={index}
              className="max-w-auto mr-24 object-contain mmd:max-w-12 mmd:mr-16"
              loading="lazy"
              style={{imageRendering: "crisp-edges"}}
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
    <div className="flex flex-col items-center">
      <div className="bg-[#9bc73c28] p-4 rounded-full mmd:w-12 mmd:h-12 mmd:p-3">
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
          <span className="text-[1.5rem]">+</span>
        </div>
      </div>
      <div>
        <Text
          variant="h6"
          fontFamily="proxima-nova"
          fontWeight="light"
          align="center"
          customClassName=""
        >
          {description}
        </Text>
      </div>
    </div>
  );
};
