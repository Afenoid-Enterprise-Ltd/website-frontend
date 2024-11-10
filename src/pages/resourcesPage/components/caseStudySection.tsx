import { Text, Button } from "../../../ui";
import { CaseStudyCard, ArticleCard } from "../../../components";
import {
  CaseStudyImg1,
  CaseStudyImg2,
  CaseStudyImg3,
  ArticleImg1,
} from "../../../assets";

const CaseStudySection = () => {
  const caseStudyData = [
    {
      title: "How ISMS compliance is influence corporate information",
      description:
        "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",
      image: CaseStudyImg1,
    },
    {
      title: "Fintech Payment Processing Platform",
      description:
        "The lack of digital trust can lead to a lack of adoption of digital technology, decreased productivity, lost business opportunities and value leakages.",
      image: CaseStudyImg2,
    },
    {
      title: "How ISMS compliance is influence corporate information",
      description:
        "Our consultation services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations. ",
      image: CaseStudyImg3,
    },
  ];

  const articleData = {
    title: "Dive Deeper into Digital Trust",
    description:
      "Explore insightful articles on the latest trends and best practices in digital trust, cybersecurity, and compliance. Our content is designed to inform and inspire, helping you navigate the digital landscape.",
    image: ArticleImg1,
  };

  return (
    <section className="bg-afenoid-white">
      <div className="w-[80%] mx-auto my-[8rem] px-[3rem]">
        <Text
          variant="h2"
          fontFamily="gambetta"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
        >
          Managing Change to Drive Organizational Transformation
        </Text>
        <Text
          variant="h4"
          fontFamily="proxima-nova"
          align="center"
          color="af-dark-green"
          fontWeight="light"
          customClassName="text-[1.5rem] mt-[2rem]"
        >
          At Afenoid, we enhance organizational security and operational
          resilience through robust standards implementation. Our case studies
          showcase successful collaborations across sectors, demonstrating how
          we help businesses achieve compliance and drive growth.{" "}
        </Text>
      </div>
      <div className="bg-afenoid-light-grey p-10">
        <div className="my-4">
          <Text
            variant="h2"
            fontFamily="gambetta"
            align="center"
            color="af-dark-green"
            fontWeight="medium"
          >
            Case Studies
          </Text>
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            align="center"
            color="af-dark-green"
            fontWeight="light"
          >
            Our case studies showcase our expertise and approach to ensuring
            organizational resilience.
          </Text>
        </div>

        <div className="flex justify-between items-start gap-10">
          {caseStudyData.map((caseStudy, index) => (
            <CaseStudyCard
              title={caseStudy.title}
              description={caseStudy.description}
              image={caseStudy.image}
              key={index}
            />
          ))}
        </div>

        <div className="mx-auto flex justify-center items-center my-[4rem]">
          <Button label="View More" variant="primary" />
        </div>
      </div>

      <div className="p-10">
        <ArticleCard
          title={articleData.title}
          image={articleData.image}
          description={articleData.description}
        />
      </div>
    </section>
  );
};

export { CaseStudySection };
