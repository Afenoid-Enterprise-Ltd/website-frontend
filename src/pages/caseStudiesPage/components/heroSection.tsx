import { Text } from "../../../ui";
import { SkylineImg } from "../../../assets";

const HeroSection = () => {
  return (
    <section className="h-[90vh] max-h-[1600px] relative flex items-center justify-center flex-col">
      <div>
        <Text
          variant="h1"
          align="center"
          fontWeight="medium"
          fontFamily="gambetta"
          color="af-dark-green"
        >
          Security Success Stories
        </Text>
        <Text
          variant="h4"
          align="center"
          fontWeight="light"
          fontFamily="proxima-nova"
          customClassName="text-center w-[53%] mt-2 w-full px-4 mxxl:w-[75%] mxxl:mx-auto"
          color="af-dark-green"
        >
          Discover how organisations have transformed their security posture and
          achieved excellence with Afenoid's guidance.
        </Text>
      </div>
      <div className="absolute bottom-0">
        <img src={SkylineImg} alt="Skyline Pattern" loading="lazy"/>
      </div>
    </section>
  );
};

export { HeroSection };