import React, { useState, useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { Text, Button } from "../../../ui";
import { HeroDiv } from "./heroDiv";
import {
  StoryImg,
  TeamImg,
  VerifiedIcon,
  MoneyHandIcon,
  SmileyIcon,
  RecycleIcon,
  CreditCardIcon,
  PeopleIcon,
  BankIcon,
  GlobeIcon,
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

const InfoSection = () => {
  const heroStaticData = [
    {
      heroTexts: {
        caption: "",
        title: "Our Story",
        description:
          "Afenoid's story is one of innovation and commitment to digital resilience. From our early days, we have collaborated with organizations in both the public and private sectors, helping them secure their digital environments, maintain compliance, and drive sustainable growth. Our comprehensive approach extends beyond technology, but in empowering business professionals with the skills and competencies they need to succeed in a fast-evolving digital space.",
      },
      image: StoryImg,
    },
    {
      heroTexts: {
        caption: "",
        title: "Our Team",
        description:
          "At Afenoid, our diverse and skilled team is dedicated to excellence in IT governance, risk management, and compliance. We have certified security assessors, cybersecurity managers, ISMS and BCMS experts, project managers, and specialists in risk management and NIST frameworks. In Afenoid, our French-speaking auditors and implementers ensure we meet the unique needs of our clients, helping them achieve their security and compliance goals.",
      },
      image: TeamImg,
    },
  ];

  const solutionData = [
    {
      icon: VerifiedIcon,
      title: "Credible",
      description:
        "We are ethical, competent, proficient, professional, authentic, honest, trust-worthy and reliable.",
    },
    {
      icon: RecycleIcon,
      title: "Agile",
      description:
        "We are responsive, astute, enthusiastic, adaptable, dynamic, diligent and resilient.",
    },
    {
      icon: SmileyIcon,
      title: "Respectful",
      description:
        "We are relationship-centred, kind, compassionate, empathetic and friendly.",
    },
    {
      icon: MoneyHandIcon,
      title: "Enterprising",
      description:
        "We are profitable, resourceful, capable, creative and courageous.",
    },
  ];

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

  return (
    <section className="p-[5rem] bg-afenoid-white">
      <div className="flex flex-col items-center gap-4 px-[15rem]">
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
        <Text
          variant="h3"
          align="center"
          color="af-dark-green"
          fontWeight="light"
          fontFamily="proxima-nova"
        >
          Transform your organization's security posture with Afenoid's
          comprehensive suite of GRC services, making world-class standards
          accessible and achievable.
        </Text>
        <Button
          variant="primary"
          label="Book a Consultation"
          customClassName=""
        />
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

      <section className="flex flex-col gap-28 my-[7rem]">
        {heroStaticData.map((data, index) => (
          <HeroDiv
            heroTexts={data.heroTexts}
            image={data.image}
            key={index}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <div>
        <Text
          variant="h2"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
          fontFamily="gambetta"
          customClassName="mb-3"
        >
          Why choose Afenoid?
        </Text>
        <Text
          variant="h3"
          align="center"
          color="af-dark-green"
          fontWeight="light"
          fontFamily="proxima-nova"
        >
          Here's why we are the best provider for your security solutions
        </Text>

        <div className="flex gap-12 my-12">
          {solutionData.map((solution, index) => (
            <Solution
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              key={index}
            />
          ))}
        </div>

        <div className="w-full flex justify-center items-center my-[10rem]">
          <div className="flex flex-col justify-center items-center gap-3">
            <Text
              variant="h3"
              align="center"
              color="af-dark-green"
              fontWeight="medium"
            >
              Ready to have a conversation with us?
            </Text>
            <Text
              variant="h5"
              color="af-dark-green"
              align="center"
              fontWeight="light"
              fontFamily="proxima-nova"
            >
              Schedule a meeting with a consultant right away.
            </Text>
            <Button
              variant="primary"
              label="Book a Consultation"
              customClassName="mt-[2rem]"
            />
          </div>
        </div>
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

type SolutionProps = {
  icon: string;
  title: string;
  description: string;
};

export const Solution: React.FC<SolutionProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="bg-[#9bc73c28] p-4 rounded-full">
        <img src={icon} alt="Icon Image" />
      </div>
      <div>
        <Text
          variant="h5"
          fontFamily="gambetta"
          fontWeight="semi-bold"
          align="center"
          customClassName="uppercase"
        >
          {title}
        </Text>
      </div>
      <div>
        <Text
          variant="h5"
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
