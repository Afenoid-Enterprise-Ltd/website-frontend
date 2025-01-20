import { HeroDiv } from "./heroDiv";
import { MissionImg, PurposeImg } from "../../../assets";
import { Slogan } from "../../../components";
import { Text } from "../../../ui";

const HeroSection = () => {
  const heroStaticData = [
    {
      heroTexts: {
        caption: "Our Mission",
        title: "To become a global brand of African origin,",
        description:
          'That is more trusted, respected, and preferred than any of the "Big 4" consulting firms in every market we serve in the 2020s',
          identifier: "mission",
      },
      image: MissionImg,
    },
    {
      heroTexts: {
        caption: "Our Purpose",
        title: "To help digital-age organisations become more resilient",
        description:
          "We achieve this by improving an organization’s digital strategy, performance, compliance assurance, and staff competence levels.",
          identifier: "purpose",
      },
      image: PurposeImg,
    },
  ];

  return (
    <section className=" bg-white">
      <section className="px-[5rem] flex flex-col gap-28 py-4 mb-[5rem] mlg:gap-14 msm:px-[3rem] mxs:px-[2rem]">
        {heroStaticData.map((data, index) => (
          <HeroDiv
            heroTexts={data.heroTexts}
            image={data.image}
            key={index}
            reverse={index % 2 === 1}
          />
        ))}
      </section>
      <Slogan>
        <div className="w-full h-auto bg-afenoid-light-grey p-[2rem] mxs:p-[1rem]">
          <Text
            variant="body-reg"
            color="af-green"
            fontFamily="proxima-nova"
            customClassName="uppercase msm:text-[.8rem] mxs:text-[.5rem]"
          >
            At Afenoid
          </Text>
          <Text
            variant="h2"
            color="af-green"
            fontFamily="gambetta"
            customClassName="text-[3rem] msm:text-[1.5rem] mxs:text-[1rem]"
            fontWeight="medium"
          >
            We strengthen organizations and professionals.
          </Text>
        </div>
      </Slogan>
    </section>
  );
};

export { HeroSection };
