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
      },
      image: MissionImg,
    },
    {
      heroTexts: {
        caption: "Our Purpose",
        title: "To help digital-age organisations become more resilient",
        description:
          "And equip their professionals everywhere to become more competent",
      },
      image: PurposeImg,
    },
  ];

  return (
    <section className=" bg-afenoid-white">
      <section className="px-[15rem] flex flex-col gap-28 py-40">
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
        <div className="w-full h-auto bg-afenoid-light-grey p-[2rem]">
          <Text
            variant="body-reg"
            color="af-green"
            fontFamily="proxima-nova"
            customClassName="uppercase"
          >
            At Afenoid
          </Text>
          <Text
            variant="h2"
            color="af-green"
            fontFamily="gambetta"
            customClassName="text-[3rem]"
            fontWeight="light"
          >
            We <span className="font-bold">strengthen</span> organizations and{" "}
            <span className="font-bold">equip</span> professionals.
          </Text>
        </div>
      </Slogan>
    </section>
  );
};

export { HeroSection };
