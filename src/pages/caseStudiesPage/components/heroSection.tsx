import { Text } from "../../../ui";
import { CaseStudiesBg } from "../../../assets";

const HeroSection = () => {
  return (
    <section className="h-[90vh] max-h-[1600px] relative flex items-center justify-center flex-col bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${CaseStudiesBg})` }}>
      <div>
        <Text
          variant="h1"
          align="center"
          fontWeight="medium"
          fontFamily="raleway"
          color="af-white"
        >
          Security Success Stories
        </Text>
        <Text
          variant="h4"
          align="center"
          fontWeight="light"
          fontFamily="proxima-nova"
          customClassName="text-center w-[75%] mt-2 px-4 mxxl:w-[75%] mxxl:mx-auto msm:w-[90%] msm:px-2 place-self-center"
          color="af-white"
        >
          Discover how organisations have transformed their security posture and
          achieved excellence with Afenoid's guidance.
        </Text>
      </div>
      {/* <div className="absolute bottom-0">
        <img src={SkylineImg} alt="Skyline Pattern" loading="lazy"/>
      </div> */}
    </section>
  );
};

export { HeroSection };