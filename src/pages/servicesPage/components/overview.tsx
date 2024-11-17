
import { OverviewImg1, OverviewImg2, OverviewImg3 } from "../../../assets";
import { Text } from "../../../ui";
import { LearnMoreDiv } from "./learnMoreDiv";

const Overview = () => {

  const dataItems = [
    {
      heroTexts: {
        caption: "",
        title: "Management System Standards",
        description:"We help establish, operate, and improve management system standards such as ISO 27001 (ISMS), ISO 22301 (BCMS), ISO 9001 (QMS), ensuring clarity and efficiency in organizational processes." ,
      },
      image: OverviewImg1
    },
    {
      heroTexts: {
        caption: "",
        title: "Payment Card Industry Data Security Standard (PCI DSS)",
        description: "As a Qualified Security Assessor Company for the Payment Card Industry Data Security Standard, we validate the scope of the card data environment and its compliance against the PCIDSS.",
      },
      image: OverviewImg2
    },
    {
      heroTexts: {
        caption: "",
        title: "SWIFT Cybersecurity Framework",
        description: "Combating fraud is a continuous challenge for the financial industry, requiring constant vigilance and proactive measures from both SWIFT and its customers. SWIFT helps financial institutions implement practices to defend against, detect, and recover from cybercrime.",
      },
      image: OverviewImg3
    }
  ]


  return (
    <section>
      <div className="w-[80%] mx-auto my-[8rem] px-[3rem]">
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
          variant="h4"
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

      <div className="mb-[5rem] px-[15rem]">
        {dataItems.map((dataItem, index) => (
          <LearnMoreDiv
            key={index}
            heroTexts={dataItem.heroTexts}
            image={dataItem.image}
            reverse = {index % 2 === 0}
          />
        ))}
      </div>
    </section>
  );
};

export { Overview };
