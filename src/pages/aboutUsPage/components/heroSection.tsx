import { HeroDiv } from "./heroDiv";
import { MissionImg, PurposeImg } from "../../../assets";
import { Slogan } from "../../../components";

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
      <section className="px-[5rem] flex flex-col gap-28 py-40">
        {heroStaticData.map((data, index) => (
          <HeroDiv
            heroTexts={data.heroTexts}
            image={data.image}
            key={index}
            reverse={index % 2 === 1}
          />
        ))}
      </section>
      <Slogan/>
    </section>
  );
};

export { HeroSection };
