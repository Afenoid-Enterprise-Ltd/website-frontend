import { Text } from "../../../ui";
import { Link } from "react-router-dom";
import { caseStudy } from "../caseStudy";

interface Case {
  title: string;
  description: string;
  imgUrl: string;
  segment: string;
}

const ISO22301 = () => {
  const bcmsCases = caseStudy.filter((item: Case) => item.segment === "ISO 22301");

  return (
    <>
      {bcmsCases.map((study: Case, index: number) => {
        return (
          <div
            className="max-h-[504px] flex flex-col w-[30%]"
            key={index}
          >
            <div className="max-h-[200px] w-full">
              <img src={study.imgUrl} alt="Case Study 1" className="h-full" />
            </div>
            <div className="flex flex-col gap-[18px]">
              <Text
                variant="h5"
                align="left"
                fontFamily="gambetta"
                color="af-green"
                customClassName="font-medium"
              >
                {study.title}
              </Text>

              <Text
                variant="h5"
                align="left"
                fontFamily="proxima-nova"
                color="af-dark-green"
                customClassName="font-normal"
              >
                {study.description}
              </Text>

              <Link
                to={`/case-studies/${study.title
                  .split(" ")
                  .join("-")
                  .toLowerCase()}`}
                className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
              >
                Learn More
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};

export { ISO22301 };