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
  const {
    image,
    title,
    description,
    optionalWidth = false,
    route = "",
  } = props;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="flex flex-col justify-start gap-5 msm:w-full"
      data-aos="fade-up"
      data-aos-delay="50"
      data-aos-duration="1000"
    >
      <div className="flex h-[15rem] w-auto mxs:h-[12.5rem] mxxl:w-full">
        <img
          src={image}
          alt="Case Study Image"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="h-auto msm:h-[5rem] mxs:h-auto">
        <Text
          variant="h5"
          color="af-dark-green"
          fontFamily="raleway"
          fontWeight="medium"
          customClassName="!text-[1.25rem] !leading-[1.5rem] mxs:!text-[1.15rem] mxs:!leading-[1.25rem]"
        >
          {title?.split("*").map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < title.split("*").length - 1 && (
                <div className="mxs:hidden">
                  <br />
                </div>
              )}
            </React.Fragment>
          ))}
        </Text>
      </div>

      <div className="h-[8rem] mxl:h-[12.5rem] mxs:h-auto">
        <Text
          variant="body-reg"
          color="af-dark-green"
          fontFamily="proxima-nova"
          fontWeight="light"
          customClassName="!text-[1.15rem]"
          align="justify"
        >
          {description?.split("*").map((part, index) => (
            <React.Fragment key={index}>
              {part}
              {index < description.split("*").length - 1 && (
                <>
                  <br />
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </Text>
      </div>

      <div>
        <Link
          to={route}
          className={`mt-[1.5rem] w-[50%] ${
            optionalWidth ? "mmlg:w-full" : "mmlg:w-[60%]"
          } block mmd:mt-4 mxl:w-[75%] mmd:w-[70%] msm:w-[65%] mxs:w-[65%] `}
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
