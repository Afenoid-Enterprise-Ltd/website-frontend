import React from "react";
import { Link } from "react-router-dom";
import { Text, Button } from "../../../ui";
import { HandShakeImg } from "../../../assets";

interface ConsultationProps {
  openConsultationModal: () => void;
}

const CaseStudiesSection: React.FC<ConsultationProps> = (props) => {
  const { openConsultationModal } = props;

  return (
    <section className="p-[5rem] my-[5rem]">
      <div
        className=" w-full h-[500px] bg-cover bg-no-repeat bg-center flex justify-start items-center"
        style={{ backgroundImage: `url(${HandShakeImg})` }}
      >
        <div className="w-full px-[4rem]">
          <div className="flex flex-col w-[50%]">
            <Text
              variant="h2"
              align="left"
              color="af-white"
              fontFamily="raleway"
              fontWeight="bold"
              customClassName="!text-[40px]"
            >
              How can we help you?
            </Text>
            <Text
              variant="h6"
              align="left"
              color="af-white"
              fontFamily="proxima-nova"
              fontWeight="regular"
              customClassName="!text-[24px] my-4"
            >
              Need to make an inquiry? Reach out to us today and let’s discuss
              how we can support your organization.
            </Text>
            <div>
              <Button
                variant="secondary"
                label="Contact Us"
                onClick={openConsultationModal}
                customClassName="border-white text-white"
              />
            </div>
          </div>
        </div>
      </div>
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
