import { HeroDiv } from "./heroDiv";
import { AboutUsMissionImg, AboutUsPurposeImg, AboutUsHeroImg } from "../../../assets";
import { Slogan } from "../../../components";
import { Text } from "../../../ui";

const HeroSection = () => {
  const heroStaticData = [
    {
      heroTexts: {
        caption: "Our Mission",
        description:
          'To become a global brand of African origin, that is trusted, respected, and preferred in every market we serve in the 2020s.',
        identifier: "mission",
      },
      image: AboutUsMissionImg,
    },
    {
      heroTexts: {
        caption: "Our Purpose",
        description:
          "To help digital-age organisations become more resilient and equip their professionals everywhere to become more competent.",
        identifier: "purpose",
      },
      image: AboutUsPurposeImg,
    },
  ];

  return (
    <section className=" bg-white">
      <section
        className="w-screen 2xl:w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center "
        style={{ backgroundImage: `url(${AboutUsHeroImg})` }}
      >
        <Text
          variant="h5"
          fontWeight="medium"
          fontFamily="raleway"
          align="center"
          color="floral-white"
          customClassName="text-[42px]"
        >
          About Afenoid
        </Text>
        <Text
          variant="h5"
          fontWeight="regular"
          fontFamily="proxima-nova"
          align="center"
          color="floral-white"
          customClassName="text-[24px]"
        >
          Let's explore opportunities that meet your organizational needs
        </Text>
      </section>
      <section className="px-[5rem] flex flex-col gap-28 py-4 my-[5rem] mlg:gap-14 msm:px-[3rem] mxs:px-[2rem]">
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
