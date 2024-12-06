import React from "react";
import { Text } from "../ui";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
  caseStudy?: boolean;
  reverse?: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const { image, title, description, caseStudy = false, reverse } = props;

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
          {!caseStudy ? (
            <Link
              to="https://substack.com/"
              className="text-[1.5rem] text-afenoid-green font-proxima-nova font-semibold underline underline-offset-4 hover:text-afenoid-lemon"
            >
              Read Our Articles
            </Link>
          ) : (
            <Link
              to="https://substack.com/"
              className="text-[1.5rem] text-afenoid-green font-proxima-nova font-semibold underline underline-offset-4 hover:text-afenoid-lemon"
            >
              Read Our Case Studies
            </Link>
          )}
        </div>
      </div>

      <div className="w-[45%] mmlg:w-full">
        <img
          src={image}
          alt="Article Card Image"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export { ArticleCard };
