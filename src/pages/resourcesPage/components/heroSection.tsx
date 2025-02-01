import { Text } from "../../../ui";
import { ResourcesPageHeroImg } from "../../../assets";

const HeroSection = () => {
  return (
    <section
      className="w-screen h-[90vh] bg-[#214d1e98] bg-blend-overlay bg-cover bg-center flex justify-center items-center 2xl:w-full"
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
        <div className="flex justify-center items-center">
          <a href="/Afenoid Brochure.pdf" download="Company Brochure.pdf">
            <button className="bg-afenoid-green/75 border-white border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-white text-center text-base h-auto w-auto font-proxima-nova font-normal mt-8 transition ease-in-out delay-150 duration-300 hover:bg-afenoid-lemon/75">
              Download Brochure
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
