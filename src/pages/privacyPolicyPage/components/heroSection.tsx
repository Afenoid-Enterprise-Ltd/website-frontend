import { Text } from "../../../ui";
import { SkylineWhite } from "../../../assets";

const HeroSection = () => {
  return (
    <section className="relative bg-[#224D20] w-screen h-[90vh] flex justify-center items-center mx-auto">
      <div className="flex flex-col justify-center items-center">
        <Text
          variant="h1"
          color="af-white"
          fontFamily="gambetta"
          fontWeight="medium"
        >
          Privacy Policy
        </Text>
        <Text
          variant="body-reg"
          color="af-white"
          fontFamily="proxima-nova"
          fontWeight="light"
          customClassName="mb-1 mt-4"
        >
          Updated
        </Text>
        <Text
          variant="h6"
          color="af-white"
          fontFamily="proxima-nova"
          fontWeight="light"
        >
          January 2025
        </Text>
      </div>
      <div className="w-full absolute bottom-0">
        <img src={SkylineWhite} alt="Skyline Pattern" loading="lazy" />
      </div>
    </section>
  );
};

export { HeroSection };
