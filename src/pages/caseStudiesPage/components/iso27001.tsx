import { caseStudy } from "../caseStudy";
import { CaseStudyCard } from "../../../components";

interface Case {
  title: string;
  description: string;
  imgUrl: string;
  segment: string;
}

const ISO27001 = () => {
  const ismsCases = caseStudy.filter(
    (item: Case) => item.segment === "ISO 27001"
  );

  return (
    <section className="grid grid-cols-3 gap-x-10 gap-y-20 px-[5rem] mxxl:grid-cols-2 msm:grid-cols-1 mmd:px-[3rem]">
      {ismsCases.map((card, index) => (
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

export { ISO27001 };
