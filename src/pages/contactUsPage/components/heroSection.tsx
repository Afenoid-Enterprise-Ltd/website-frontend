import { Text } from "../../../ui";

const HeroSection = () => {
  return (
    <section>
      <div className="">
        <Text
          fontFamily="raleway"
          color="af-dark-green"
          variant="h1"
          fontWeight="medium"
        >
          Contact Details
        </Text>

        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          variant="h5"
          color="af-dark-green"
          customClassName="w-3/5 mt-9"
        >
          Thank you for your interest in Afenoid. <br />Please complete this form to
          discuss how we can help you.
        </Text>
      </div>
    </section>
  );
};

export { HeroSection };
