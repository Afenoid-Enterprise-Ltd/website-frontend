import { Text, Button } from "../../../ui";
import { ResourcesPageHeroImg } from "../../../assets";

const HeroSection = () => {
  return (
    <section
      className="w-screen h-[90vh] bg-[#214d1e98] bg-blend-overlay bg-cover bg-center flex justify-start items-center px-[5rem]"
      style={{ backgroundImage: `url(${ResourcesPageHeroImg})` }}
    >
      <div className="w-[70%]">
        <Text
          variant="h1"
          fontWeight="medium"
          fontFamily="gambetta"
          align="left"
          color="floral-white"
        >
          Prioritizing the <span className="text-afenoid-yellow">security</span>{" "}
          and <span className="text-afenoid-yellow">reliability</span> of
          digital systems, services, and transactions.
        </Text>
        <Text
          variant="h5"
          fontWeight="thin"
          fontFamily="proxima-nova"
          align="left"
          color="floral-white"
        >
          We specialize in providing managed services in IT governance, risk
          management, and compliance.
        </Text>
        <Button
          variant="secondary"
          label="Book a Consultation"
          customClassName="border-white text-white mt-8"
        />
      </div>
    </section>
  );
};

export { HeroSection };
