import React, { useState, useEffect, useRef } from "react";
import { animate } from "framer-motion";
import { Text, Button } from "../../../ui";
import { HeroDiv } from "./heroDiv";
import {
  StoryImg,
  AboutUsTeamImg,
  CreditCardIcon,
  PeopleIcon,
  BankIcon,
  GlobeIcon,
} from "../../../assets";
import { ChoiceAfenoid, Slogan, DownloadProfile } from "../../../components";

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

interface InfoSectionProps {
  openModal: () => void;
}

const InfoSection: React.FC<InfoSectionProps> = ({ openModal }) => {
  const heroStaticData = [
    {
      heroTexts: {
        caption: "Our Story",
        description:
          "Afenoid's story is one of innovation and commitment to digital resilience. From our early days, we have collaborated with organizations in both the public and private sectors, helping them secure their digital environments, maintain compliance, and drive sustainable growth. Our comprehensive approach extends beyond technology, but in empowering business professionals with the skills and competencies they need to succeed in a fast-evolving digital space.",
        identifier: "story",
      },
      image: StoryImg,
    },
    {
      heroTexts: {
        caption: "Our Team",
        description:
          "At Afenoid, our diverse and skilled team is dedicated to excellence in IT governance, risk management, and compliance. We have certified security assessors, cybersecurity managers, ISO consultants, project managers, and specialists in risk management and NIST frameworks. In Afenoid, our English and French-speaking consultants ensure we meet the unique needs of our clients, helping them achieve their security and compliance goals.",
        identifier: "team",
      },
      image: AboutUsTeamImg,
    },
  ];

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
      description:  "countries served across the world",
    },
  ];

  return (
    <section className=" bg-white ">
      <div className="grid grid-cols-4 gap-12 my-[4rem] px-4 mlg:grid mlg:grid-cols-2 mmd:mx-[3rem] mmd:my-[4rem] msm:mx-0">
        {numberData.map((number, index) => (
          <Number
            icon={number.icon}
            title={number.title}
            description={number.description}
            key={index}
          />
        ))}
      </div>

      <div>
        <Slogan>
          <div className="w-full h-auto bg-afenoid-light-grey p-[2rem] mxs:p-[1rem]">
            <Text
              variant="body-reg"
              color="af-green"
              fontWeight="regular"
              fontFamily="proxima-nova"
              customClassName="uppercase msm:text-[.8rem] mxs:text-[.5rem]"
            >
              At Afenoid
            </Text>
            <Text
              variant="h2"
              color="af-green"
              fontFamily="raleway"
              customClassName="text-[3rem] msm:text-[1.5rem] mxs:text-[1rem]"
              fontWeight="regular"
            >
              We strengthen organizations and professionals.
            </Text>
          </div>
        </Slogan>

        <div className="w-[60%] mx-auto mmd:w-[80%]">
          <Text
            fontFamily="raleway"
            fontWeight="medium"
            color="af-dark-green"
            align="center"
            customClassName="!text-[40px] mmd:!text-[32px] mxs:!text-[24px] mt-[3rem] mb-[1rem] leading-[1.4]"
          >
            Enterprise Management Within Your Reach
          </Text>
          <Text
            fontFamily="proxima-nova"
            fontWeight="light"
            color="af-dark-green"
            align="center"
            customClassName="!text-[28px] mmd:!text-[20px] mxs:!text-[16px] leading-[1.4]"
          >
            Transform your organization's security posture with Afenoid's
            comprehensive suite of GRC services, making world-class standards
            accessible and achievable.
          </Text>

          <Button
            variant="primary"
            label="Schedule a Meeting"
            customClassName="mx-auto my-8"
            onClick={openModal}
          />
        </div>
      </div>

      <section className="flex flex-col gap-28 my-[10rem] px-[10rem] mmd:px-[3rem] mxs:px-[2rem]">
        {heroStaticData.map((data, index) => (
          <HeroDiv
            heroTexts={data.heroTexts}
            image={data.image}
            key={index}
            reverse={index % 2 === 1}
          />
        ))}
      </section>

      <div id="values" className="px-[5rem] msm:p-[3rem] mxs:px-4">
        <ChoiceAfenoid />
      </div>

      <section id="profile">
        <DownloadProfile />
      </section>
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
    <div className="flex flex-col items-center w-auto">
      <div className="bg-[#9bc73c28] p-4 rounded-full mmd:w-14 mmd:h-14 mmd:p-2">
        <img src={icon} alt="Icon Image" loading="lazy" />
      </div>
      <div>
        <div className="my-[2rem]">
          <CountUp end={title} />
          <span className="text-[4rem] mxl:text-[3rem] mlg:text-[2.5rem] msm:text-[1.5rem] mxs:text-[1rem]">
            +
          </span>
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
