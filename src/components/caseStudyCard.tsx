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
  route?: string;
};

const CaseStudyCard: React.FC<CaseStudyCardProps> = (props) => {
  const { image, title, description, optionalWidth = false, route = ""} = props;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="flex flex-col justify-between gap-5 msm:w-full"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className=" flex h-[15rem] w-[30rem] mxs:h-[12.5rem] mxxl:w-full">
        <img
          src={image}
          alt="Case Study Image"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <Text
        variant="h5"
        color="af-dark-green"
        fontFamily="gambetta"
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
          to={route}
          className={`mt-[1.5rem] w-[50%] ${
            optionalWidth ? "mmlg:w-full" : "mmlg:w-[60%]"
          } block mmd:mt-4 mmd:w-[70%] msm:w-[65%] mxs:w-[65%] `}
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
