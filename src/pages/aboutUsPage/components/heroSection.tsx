import { HeroDiv } from "./heroDiv";
import {
  AboutUsMissionImg,
  AboutUsPurposeImg,
  HomeHeroImage,
  NewAboutUsHeroImg
} from "../../../assets";
import { Text } from "../../../ui";

const HeroSection = () => {
  const heroStaticData = [
    {
      heroTexts: {
        caption: "Our Mission",
        description:
          "To become a global brand of African origin, that is trusted, respected, and preferred in every market we serve.",
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
    <section className="bg-white">
      <section
        className="w-screen 2xl:w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-center bg-[#214d1e80] bg-blend-overlay"
        style={{ backgroundImage: `url(${NewAboutUsHeroImg})` }}
      >
        <Text
          variant="h5"
          fontWeight="medium"
          fontFamily="raleway"
          align="center"
          color="floral-white"
          customClassName="!text-[48px] mxs:!text-[36px] mb-4"
        >
          About Afenoid
        </Text>
        <Text
          variant="h5"
          fontWeight="regular"
          fontFamily="proxima-nova"
          align="center"
          color="floral-white"
          customClassName="!text-[24px] mxs:!text-[16px]"
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
      <div className="w-full">
        <Text
          variant="h3"
          fontFamily="raleway"
          fontWeight="medium"
          color="af-dark-green"
          align="center"
          customClassName="text-[36px] msm:!text-[24px] mb-5"
        >
          Strengthening Organizations
        </Text>
        <Text
          variant="h5"
          fontFamily="proxima-nova"
          fontWeight="light"
          color="af-dark-green"
          align="center"
          customClassName="text-[24px] msm:!text-[16px]"
        >
          At Afenoid, we enhance organizational security and operational
          resilience through robust standards implementation
        </Text>

        <div className="w-[60%] my-[3rem] mx-auto">
          <img src={HomeHeroImage} alt="Hero Image" loading="lazy" />
        </div>
      </div>
      
    </section>
  );
};

export { HeroSection };
