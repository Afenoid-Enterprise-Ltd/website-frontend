import { Text, Button } from "../../../ui";
import { ArticleCard } from "../../../components";
import { ArticleImg1, HomePageCaseStudiesImg } from "../../../assets";
import { CallToAction } from "../../../components";

const CaseStudySection = () => {
  const articleData = {
    title: "Dive Deeper into Digital Trust",
    description:
      "Explore insightful articles on the latest trends and best practices in digital trust, cybersecurity, and compliance. Our content is designed to inform and inspire, helping you navigate the digital landscape.",
    image: ArticleImg1,
  };

  return (
    <section className="bg-white">
      <div className="w-[80%] mx-auto my-[8rem] px-[3rem] msm:w-full">
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
      <div className="bg-afenoid-light-grey p-[5rem] msm:px-[3rem] mxs:px-[2rem]">
        <ArticleCard
          title="Security Success Stories"
          description="Discover how organisations have transformed their security posture and achieved excellence with Afenoid's guidance."
          image={HomePageCaseStudiesImg}
          caseStudy={true}
          reverse={true}
        />
      </div>

      <div className="px-[5rem] py-[5rem] msm:px-[3rem] mxs:px-[2rem]">
        <ArticleCard
          title={articleData.title}
          image={articleData.image}
          description={articleData.description}
        />
        <CallToAction
          title="Ready to have a conversation with us?"
          explanation="Schedule a meeting with a consultant right away"
          button={
            <Button
              variant="primary"
              label="Book a Consultation"
              customClassName="mt-[2rem]"
            />
          }
        />
      </div>
    </section>
  );
};

export { CaseStudySection };
