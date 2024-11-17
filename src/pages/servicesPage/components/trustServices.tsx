import { DigitalTrustImg } from "../../../assets";
import { Text } from "../../../ui";
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
    </section>
  );
};

export { TrustServices };
