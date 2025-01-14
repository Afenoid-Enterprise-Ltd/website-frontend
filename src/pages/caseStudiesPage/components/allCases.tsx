import { caseStudy } from "../caseStudy";
import { CaseStudyCard } from "../../../components";

const ALLCASES = () => {
  return (
    <section className="grid grid-cols-3 gap-x-10 gap-y-20 px-[5rem] mxxl:grid-cols-3 msm:grid-cols-1 mmd:px-[3rem] mlg:grid-cols-2 mxxl:px-[3rem]">
      {caseStudy.map((card, index) => (
        <CaseStudyCard
          key={index}
          image={card.imgUrl}
          title={card.title}
          description={card.description}
          optionalWidth={true}
          route={`/case-studies/${card.title
            .split(" ")
            .join("-")
            .toLowerCase()}`}
        />
      ))}
    </section>
  );
};

export { ALLCASES };
