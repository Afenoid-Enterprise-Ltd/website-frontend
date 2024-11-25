import { Text } from "../../../ui";
import { ResourcesPageHeroImg } from "../../../assets";

const HeroSection = () => {
  return (
    <section
      className="w-screen h-[90vh] bg-[#214d1e98] bg-blend-overlay bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${ResourcesPageHeroImg})` }}
    >
      <div>
        <Text
          variant="h1"
          fontWeight="medium"
          fontFamily="gambetta"
          align="center"
          color="floral-white"
        >
          Want to know more about our services?
        </Text>
        <Text
          variant="h5"
          fontWeight="thin"
          fontFamily="proxima-nova"
          align="center"
          color="floral-white"
        >
          Let’s explore opportunities that meet your organizational needs.
        </Text>
      </div>
    </section>
  );
};

export { HeroSection };
