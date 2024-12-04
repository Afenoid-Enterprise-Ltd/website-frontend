import { Text } from "../../../ui";
import { Link } from "react-router-dom";

type RelatedSectionProps = {
  relatedCases: any;
};
interface RelatedCases {
  title: string;
  description: string;
  imgUrl: string;
}

const RelatedSection: React.FC<RelatedSectionProps> = ({ relatedCases }) => {
  return (
    <section className="px-[80px]">
      <div className="bg-[#EBEEEB] px-[246px] py-[50px] flex flex-col items-center gap-[48px] w-full">
        <div className="flex flex-col gap-2">
          <Text
            variant="h3"
            fontFamily="gambetta"
            fontWeight="medium"
            align="center"
            color="af-dark-green"
          >
            Explore more case studies
          </Text>
          <Text
            variant="h6"
            fontFamily="proxima-nova"
            fontWeight="light"
            align="center"
            color="af-dark-green"
          >
            Our case studies showcase our expertise and approach to ensuring
            organizational resilience.
          </Text>
        </div>

        <div className="flex gap-[48px]">
          {relatedCases?.map((relatedCase:RelatedCases) => {
            return (
              <div className="h-[504px] w-[370px] flex flex-col gap-[20px]">
                <div className="h-[180px] w-full">
                  <img src={relatedCase.imgUrl} alt="Case Study 1" className="h-full" />
                </div>
                <div className="flex flex-col gap-[18px] items-center">
                  <Text
                    variant="h5"
                    align="center"
                    fontFamily="gambetta"
                    color="af-green"
                    customClassName="font-medium"
                  >
                    {relatedCase.title}
                  </Text>

                  <Text
                    variant="h6"
                    align="center"
                    fontFamily="proxima-nova"
                    fontWeight="light"
                    color="af-dark-green"
                    customClassName="font-normal"
                  >
                    {relatedCase.description}
                  </Text>

                  <Link
                    to={`/case-studies/${relatedCase.title.split(' ').join('-').toLowerCase()}`}
                    className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { RelatedSection };
