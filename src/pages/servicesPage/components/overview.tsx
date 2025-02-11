import { useEffect, useState } from "react";
import { Slogan, ConsultationForm } from "../../../components";
import {
  OverviewImg1,
  OverviewImg2,
  OverviewImg3,
  CardMoney,
  CardAcceleration,
  CardChart,
  CardRoute,
  CardHouse,
  CardFace,
} from "../../../assets";
import { Text } from "../../../ui";
import { OverviewCard } from "./overviewCard";
import { LearnMoreDiv } from "./learnMoreDiv";
import { MinorSection } from "./minorSection";
import AOS from "aos";
import "aos/dist/aos.css";

const Overview = () => {
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const dataItems = [
    {
      heroTexts: {
        caption: "",
        title: "Management System Standard",
        description:
          "We help establish, operate, and improve management system standards such as ISO 27001 (ISMS), ISO 22301 (BCMS), ISO 9001 (QMS), ISO 20000 (IT Service Management), ensuring clarity, efficiency, and compliance in organizational processes.",
      },
      image: OverviewImg1,
    },
    {
      heroTexts: {
        caption: "",
        title: "Payment Card Industry Data Security Standard (PCI DSS)",
        description:
          "As a Qualified Security Assessor Company for the Payment Card Industry Data Security Standard, we validate the scope of the card data environment and its compliance against the PCIDSS.",
      },
      image: OverviewImg2,
    },
    {
      heroTexts: {
        caption: "",
        title: "SWIFT Cybersecurity Framework",
        description:
          "Combating fraud is a continuous challenge for the financial industry, requiring constant vigilance and proactive measures from both SWIFT and its customers. SWIFT helps financial institutions implement practices to defend against, detect, and recover from cybercrime.",
      },
      image: OverviewImg3,
    },
  ];

  const cardData = [
    {
      icon: CardMoney,
      title: "Value Realization",
      description:
        "We orchestrate and catalyze your digital transformation investments from conceptualization to value realization.",
    },
    {
      icon: CardAcceleration,
      title: "Acceleration",
      description:
        "We accelerate your cybersecurity maturity and help to minimize your breach likelihood.",
    },
    {
      icon: CardMoney,
      title: "Trustworthiness",
      description:
        "We improve the trustworthiness of your business processes and digital controls.",
    },
    {
      icon: CardRoute,
      title: "Capability & Strategy",
      description:
        "We help to crystallize organizational digital capabilities and strategic opportunities.",
    },
    {
      icon: CardHouse,
      title: "Enterprise Strength",
      description:
        "We help to eliminate enterprise weaknesses caused by people, practices, and digital technology.",
    },
    {
      icon: CardChart,
      title: "Optimization",
      description:
        "We supply capabilities required to effectively adopt, adapt, and optimize regulatory frameworks and to comply with industry standards.",
    },
    {
      icon: CardFace,
      title: "Training",
      description:
        "We train and mentor personnel to adopt and adapt myriads of governance, information technology, cybersecurity, & privacy requirements in multiple markets.",
    },
  ];

  return (
    <section>
      <div
        className="w-[80%] mx-auto my-[8rem] px-[3rem] mxs:w-full mxxs:px-[2rem]"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Text
          variant="h2"
          fontFamily="raleway"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
          customClassName="!text-[2.25rem]"
        >
          How We Serve Our Clients
        </Text>
        <div className="w-[75%] mx-auto">
          <Text
            variant="h2"
            fontFamily="proxima-nova"
            align="center"
            color="af-dark-green"
            fontWeight="light"
            customClassName="!text-[1.5rem]"
          >
            Implement sustainable security practices that protect your
            organization today while preparing for tomorrow's challenges.
          </Text>
        </div>
      </div>
      <div className="w-[90%] mx-auto flex justify-start gap-4 my-16 overflow-x-scroll no-scrollbar">
        {cardData.map((card, index) => (
          <OverviewCard
            icon={card.icon}
            title={card.title}
            description={card.description}
            reverse={index % 2 === 0}
            key={index}
          />
        ))}
      </div>

      <div
        className="w-[80%] mx-auto my-[8rem] px-[3rem] mxs:w-full mxxs:px-[2rem]"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Text
          variant="h2"
          fontFamily="raleway"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
          customClassName="text-[2.25rem]"
        >
          How We Serve Our Clients
        </Text>
      </div>

      <div className="mb-[5rem] px-[15rem] mxxl:px-[10rem] mxl:px-[5rem] mxs:px-[2rem] mxxs:px-4">
        {dataItems.map((dataItem, index) => (
          <LearnMoreDiv
            key={index}
            heroTexts={dataItem.heroTexts}
            image={dataItem.image}
            reverse={index % 2 === 0}
            // btnText="Learn More"
          />
        ))}
      </div>

      <Slogan>
        <div className="w-full h-auto bg-afenoid-light-grey p-[2rem] mxs:p-[1rem]">
          <Text
            variant="body-reg"
            color="af-green"
            fontFamily="proxima-nova"
            customClassName="uppercase msm:text-[.8rem] mxs:text-[.5rem]"
          >
            At afenoid
          </Text>
          <Text
            variant="h2"
            color="af-green"
            fontFamily="raleway"
            customClassName="!text-[2.75rem] msm:!text-[1.5rem] mxs:!text-[1rem]"
            fontWeight="regular"
          >
            We mitigate enterprise weaknesses caused by practices, personnel and
            technologies.
          </Text>
        </div>
      </Slogan>

      <MinorSection openModal={openContactModal} />
      {isContactOpen && (
        <ConsultationForm isOpen={isContactOpen} onClose={closeContactModal} />
      )}
    </section>
  );
};

export { Overview };
