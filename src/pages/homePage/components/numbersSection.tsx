import React, { useState, useEffect, useRef } from "react";
import { animate } from "framer-motion";
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
      className="text-[3.5rem] font-semibold font-gambetta text-afenoid-dark-green"
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
      description: "PCI DSS assessments carried out over the past 10 years.",
    },
    {
      icon: PeopleIcon,
      title: 300,
      description: "Training sessions in the last 5years",
    },
    {
      icon: BankIcon,
      title: 150,
      description: "Implementation conducted in the last 10 years",
    },
    {
      icon: GlobeIcon,
      title: 50,
      description: "Providing services to clients in nearly 50 countries.",
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
  ];

  return (
    <section className="w-screen bg-afenoid-white">
      <div className=" p-[5rem]">
        <div className="flex flex-col items-center gap-4 px-[15rem]">
          <Text
            variant="h2"
            align="center"
            color="af-dark-green"
            fontWeight="medium"
            fontFamily="gambetta"
            customClassName="mb-3"
          >
            Optimize Your Security
          </Text>
          <Text
            variant="h3"
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
        <div className="flex gap-12 mx-[5rem] my-[8rem]">
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

      <div className="w-full bg-afenoid-light-grey flex justify-between items-center py-[1.5rem] px-[5rem] mb-[5rem]">
        {clients.map((client, index) => (
          <img src={client} alt="Logos of Clients" key={index} />
        ))}
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
      <div className="bg-[#9bc73c28] p-4 rounded-full">
        <img src={icon} alt="Icon Image" />
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