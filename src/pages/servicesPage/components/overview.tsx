import { useEffect } from "react";
import { Slogan } from "../../../components";
import { OverviewImg1, OverviewImg2, OverviewImg3 } from "../../../assets";
import { Text } from "../../../ui";
import { LearnMoreDiv } from "./learnMoreDiv";
import { MinorSection } from "./minorSection";

import AOS from "aos";
import "aos/dist/aos.css";

const Overview = () => {
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
          "We help establish, operate, and improve management system standards such as ISO 27001 (ISMS), ISO 22301 (BCMS), ISO 9001 (QMS), ensuring clarity and efficiency in organizational processes.",
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

  return (
    <section>
      <div
        className="w-[80%] mx-auto my-[8rem] px-[3rem] mxs:w-full"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <Text
          variant="h2"
          fontFamily="gambetta"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
        >
          Future-Ready Security
        </Text>
        <Text
          variant="h5"
          fontFamily="proxima-nova"
          align="center"
          color="af-dark-green"
          fontWeight="light"
          customClassName="text-[1.5rem] mt-[2rem]"
        >
          Implement sustainable security practices that protect your
          organization today while preparing for tomorrow's challenges.
        </Text>
      </div>

      <div className="mb-[5rem] px-[15rem] mxxl:px-[10rem] mxl:px-[5rem] mxs:px-[3rem]">
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
            WE BELIEVE
          </Text>
          <Text
            variant="h2"
            color="af-green"
            fontFamily="gambetta"
            customClassName="text-[3rem] msm:text-[1.5rem] mxs:text-[1rem]"
            fontWeight="medium"
          >
            We mitigate enterprise weaknesses caused by practices, personnel and
            technologies.
          </Text>
        </div>
      </Slogan>

      <MinorSection />
    </section>
  );
};

export { Overview };
