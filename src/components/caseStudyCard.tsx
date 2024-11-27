import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Text, Button } from "../ui";
import AOS from "aos";
import "aos/dist/aos.css";

type CaseStudyCardProps = {
  image: string;
  title: string;
  description: string;
  optionalWidth?: boolean;
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = (props) => {
  const { image, title, description, optionalWidth = false } = props;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="flex flex-col justify-between gap-5"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className=" flex h-[15rem]">
        <img
          src={image}
          alt="Case Study Image"
          className="h-full w-full object-cover "
        />
      </div>
      <Text
        variant="h5"
        color="af-dark-green"
        fontFamily="playfair-display"
        fontWeight="medium"
      >
        {title}
      </Text>
      <Text
        variant="h5"
        color="af-dark-green"
        fontFamily="proxima-nova"
        fontWeight="light"
      >
        {description}
      </Text>
      <div>
        <Link
          to="/"
          className={`mt-[5rem] w-[50%] ${
            optionalWidth ? "mmlg:w-full" : "mmlg:w-[60%]"
          } block mmd:mt-4 msm:w-[60%] mxs:w-[65%] mxxs:w-full`}
        >
          <Button
            variant="secondary"
            label="Learn More"
            customClassName="w-full"
          />
        </Link>
      </div>
    </div>
  );
};

export { CaseStudyCard };
