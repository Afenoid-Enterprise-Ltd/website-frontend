import React, { useState, useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { Text, } from "../../../ui";
import { HeroDiv } from "./heroDiv";
import {
  StoryImg,
  TeamImg,
  CreditCardIcon,
  PeopleIcon,
  BankIcon,
  GlobeIcon,
} from "../../../assets";
import { ChoiceAfenoid } from "../../../components";

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

const InfoSection = () => {
  const heroStaticData = [
    {
      heroTexts: {
        caption: "",
        title: "Our Story",
        description:
          "Afenoid's story is one of innovation and commitment to digital resilience. From our early days, we have collaborated with organizations in both the public and private sectors, helping them secure their digital environments, maintain compliance, and drive sustainable growth. Our comprehensive approach extends beyond technology, but in empowering business professionals with the skills and competencies they need to succeed in a fast-evolving digital space.",
          identifier: "story",
      },
      image: StoryImg,
    },
    {
      heroTexts: {
        caption: "",
        title: "Our Team",
        description:
          "At Afenoid, our diverse and skilled team is dedicated to excellence in IT governance, risk management, and compliance. We have certified security assessors, cybersecurity managers, ISO consultants, project managers, and specialists in risk management and NIST frameworks. In Afenoid, our English and French-speaking consultants ensure we meet the unique needs of our clients, helping them achieve their security and compliance goals.",
          identifier: "team",
      },
      image: TeamImg,
    },
  ];

  const numberData = [
    {
      icon: CreditCardIcon,
      title: 120,
      description: "PCI DSS assessments carried out over the past 10 years.",
    },
    {
      icon: PeopleIcon,
      title: 200,
      description: "Training sessions in the last 5 years",
    },
    {
      icon: BankIcon,
      title: 40,
      description: "ISO implementation conducted in the last 10year",
    },
    {
      icon: GlobeIcon,
      title: 50,
      description: "Countries reached in the last decade.",
    },
  ];

  return (
    <section className="p-[5rem] bg-white msm:p-[3rem] mxs:px-4">
      <div className="flex flex-col items-center gap-4 px-[15rem] mxl:px-[10rem] mmlg:px-[5rem] msm:px-[3rem] mxs:px-0">
        <div className="">
          <Text
            variant="h2"
            align="center"
            color="af-dark-green"
            fontWeight="medium"
            fontFamily="gambetta"
            customClassName="mb-3"
          >
            Enterprise Security Within Your Reach
          </Text>
        </div>
        <div>
          <Text
            variant="h5"
            align="center"
            color="af-dark-green"
            fontWeight="light"
            fontFamily="proxima-nova"
          >
            Transform your organization's security posture with Afenoid's
            comprehensive suite of GRC services, making world-class standards
            accessible and achievable.
          </Text>
        </div>
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

      <section className="flex flex-col gap-28 my-[7rem] px-[10 rem]">
        {heroStaticData.map((data, index) => (
          <HeroDiv
            heroTexts={data.heroTexts}
            image={data.image}
            key={index}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <div id="values">
        <ChoiceAfenoid />
      </div>
    </section>
  );
};

export { InfoSection };

type NumberProps = {
  icon: string;
  title: number;
  description: string;
};

export const Number: React.FC<NumberProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-[#9bc73c28] p-4 rounded-full">
        <img src={icon} alt="Icon Image" loading="lazy"/>
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
