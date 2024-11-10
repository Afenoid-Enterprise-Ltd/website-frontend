import React from "react";
import { Text } from "../ui";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  image: string;
  title: string;
  description: string;
}

const ArticleCard: React.FC<ArticleCardProps> = (props) => {
  const { image, title, description } = props;

  return (
    <div className="flex justify-between items-center gap-6">
      <div className="w-1/2 flex flex-col gap-4">
        <div>
          <Text
            color="af-dark-green"
            fontFamily="gambetta"
            fontWeight="medium"
            customClassName="text-[2rem]"
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
          <Link
            to="https://substack.com/"
            className="text-[1.5rem] text-afenoid-green font-proxima-nova font-semibold underline underline-offset-4 hover:text-afenoid-lemon"
          >
            Read Our Articles
          </Link>
        </div>
      </div>

      <div className="w-[45%] ">
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