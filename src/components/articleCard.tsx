import React from "react";
import { Text } from "../ui";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  caseStudy?: boolean;
  reverse?: boolean;
  profile: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const {
    image,
    title,
    description,
    caseStudy = false,
    reverse,
    profile,
  } = props;

  return (
    <div
      className={`flex justify-between items-center gap-28 mmlg:grid mmlg:gap-16 ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="w-1/2 flex flex-col gap-4 mmlg:w-full">
        <div>
          <Text
            variant="h3"
            color="af-dark-green"
            fontFamily="gambetta"
            fontWeight="medium"
            customClassName="msm:text-h4"
          >
            {title}
          </Text>
        </div>
        <div>
          <Text
            color="af-dark-green"
            fontFamily="proxima-nova"
            fontWeight="light"
            customClassName="text-[1.5rem]"
          >
            {description}
          </Text>
        </div>
        <div>
          {profile ? (
            <a href="/Company Brochure.pdf" download="Company Brochure.pdf">
              <button className="bg-transparent border-afenoid-dark-green border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-afenoid-dark-green text-center text-base h-auto w-auto font-proxima-nova font-regular mt-8 hover:bg-afenoid-lemon hover:text-afenoid-white hover:border-afenoid-lemon ">
                Download Company Profile
              </button>
            </a>
          ) : (
            <>
              {!caseStudy ? (
                <Link
                  to="/under-construction"
                  className="text-[1.5rem] text-afenoid-green font-proxima-nova font-semibold underline underline-offset-4 hover:text-afenoid-lemon"
                >
                  Read Our Articles
                </Link>
              ) : (
                <Link
                  to="/case-studies"
                  className="text-[1.5rem] text-afenoid-green font-proxima-nova font-semibold underline underline-offset-4 hover:text-afenoid-lemon"
                >
                  Read Our Case Studies
                </Link>
              )}
            </>
          )}
        </div>
      </div>

      <div className="w-[45%] mmlg:w-full">
        <img
          src={image}
          alt="Article Card Image"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export { ArticleCard };
