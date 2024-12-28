import React from "react";
import { Link } from "react-router-dom";
import { Text, Button } from "../../../ui";
import { CallToAction, ArticleCard } from "../../../components";
import { HomePageCaseStudiesImg } from "../../../assets";

interface ConsultationProps {
  openConsultationModal: () => void;
}

const CaseStudiesSection: React.FC<ConsultationProps> = (props) => {
  const { openConsultationModal } = props;

  return (
    <section>
      <div className="bg-white px-[10rem] py-[5rem] mlg:px-[5rem] mmd:px-[3rem] mxs:px-[2rem] mxxs:px-4 msm:pt-28">
        <ArticleCard
          title="Security Success Stories"
          description="Discover how organisations have transformed their security posture and achieved excellence with Afenoid's guidance."
          image={HomePageCaseStudiesImg}
          caseStudy={true}
          reverse={true}
        />
      </div>
      <CallToAction
        title="Our journey with you starts here"
        explanation="Looking to implement digital trust solutions, assess your
          organization's resilience, or enhance your professional expertise?"
        button={
          <Button
            variant="secondary"
            label="Book a Consultation"
            customClassName="mt-[2rem]"
            onClick={openConsultationModal}
          />
        }
      />
    </section>
  );
};

export { CaseStudiesSection };

type HomeCaseStudyCardProps = {
  image: string;
  type: string;
  title: string;
};

export const HomeCaseStudyCard: React.FC<HomeCaseStudyCardProps> = ({
  image,
  title,
  type,
}) => {
  return (
    <div className="bg-white w-[30rem]">
      <div>
        <img src={image} alt="Case Study Card" loading="lazy" />
      </div>
      <div className="flex flex-col justify-between gap-[5rem] px-[1rem] pt-[1.5rem] pb-[0.25rem]">
        <Text
          variant="h5"
          fontFamily="gambetta"
          color="af-dark-green"
          fontWeight="regular"
          align="left"
        >
          {title}
        </Text>
        <div className="flex justify-between">
          <Text
            variant="caption-mid"
            fontFamily="proxima-nova"
            color="af-dark-green"
            fontWeight="regular"
            align="left"
            customClassName="uppercase"
          >
            {type}
          </Text>
          <Link to="/" className="hover:underline underline-offset-4">
            <Text
              variant="caption-mid"
              fontFamily="proxima-nova"
              color="af-green"
            >
              Read More
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
};
