import React, { } from "react";
import { Link } from "react-router-dom";
import { Text, Button, Carousel } from "../../../ui";
import { CallToAction } from "../../../components";
import { CaseStudyImg1 } from "../../../assets";


const CaseStudiesSection = () => {
  const carouselItems = [
    {
      id: 1,
      image: CaseStudyImg1,
      title: "How ISMS compliance influences corporate information",
      category: "PCI DSS 1",
    },
    {
      id: 2,
      image: CaseStudyImg1,
      title: "How ISMS compliance is influence corporate information",
      category: "PCI DSS 2",
    },
    {
      id: 3,
      image: CaseStudyImg1,
      title: "How ISMS compliance is influence corporate information",
      category: "PCI DSS 3",
    },
    {
      id: 4,
      image: CaseStudyImg1,
      title: "How ISMS compliance is influence corporate information",
      category: "PCI DSS 4",
    },
  ];

  return (
    <section>
      <div className="bg-afenoid-light-grey">
        <div className="flex flex-col justify-between items-center w-full">
          <Text
            variant="h3"
            fontFamily="playfair-display"
            fontWeight="semi-bold"
            align="center"
            customClassName=""
          >
            Case Studies
          </Text>
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            color="af-dark-green"
            fontWeight="medium"
            align="left"
            customClassName="mb-6"
          >
            We help digital-age organisations to become more resilient and equip
            their professionals to become more competent.
          </Text>
          <Carousel items={carouselItems}/>
        </div>
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
        <img src={image} alt="" />
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
