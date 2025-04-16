import { Text } from "../../../ui";

const HeroSection = () => {
  return (
    <section>
      <div className="w-full msm:my-24">
        <Text
          fontFamily="raleway"
          color="af-dark-green"
          variant="h1"
          fontWeight="medium"
          align="left"
          customClassName="msm:!text-center"
        >
          Contact Us
        </Text>

        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          variant="h5"
          color="af-dark-green"
          align="left"
          customClassName="w-3/5 mt-8 msm:w-full msm:!text-center msm:!px-14"
        >
          Thank you for your interest in Afenoid. <br />Please complete this form to
          discuss how we can help you.
        </Text>
      </div>
    </section>
  );
};

export { HeroSection };
