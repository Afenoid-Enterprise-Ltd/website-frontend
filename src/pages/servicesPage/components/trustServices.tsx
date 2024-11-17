import { DigitalTrustImg } from "../../../assets";
import { Text } from "../../../ui";
// import { Accordion, AccordionItem } from "../../../components/accordion";
import { LearnMoreDiv } from "./learnMoreDiv";


const TrustServices = () => {
  const dataItem = {
    heroTexts: {
      caption: "",
      title: "Management System Standards",
      description:
        "We help establish, operate, and improve management system standards such as ISO 27001 (ISMS), ISO 22301 (BCMS), ISO 9001 (QMS), ensuring clarity and efficiency in organizational processes.",
    },
    image: DigitalTrustImg,
  };

  return (
    <section>
      <div className="px-[15rem]">
        <LearnMoreDiv heroTexts={dataItem.heroTexts} image={dataItem.image} />
      </div>
      <div className="w-[80%] mx-auto my-[8rem] px-[3rem]">
        <Text
          variant="h2"
          fontFamily="gambetta"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
        >
          Build Your Team's Security Excellence
        </Text>
        <Text
          variant="h4"
          fontFamily="proxima-nova"
          align="center"
          color="af-dark-green"
          fontWeight="light"
          customClassName="text-[1.5rem] mt-[2rem]"
        >
          Empower your workforce with industry-recognized certifications and practical training programs designed for real-world application.
        </Text>
      </div>
      <div>

      </div>
    </section>
  );
};

export { TrustServices };
