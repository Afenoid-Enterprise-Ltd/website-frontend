import { Text } from "../../../ui";
import { EnvelopeIcon, TelephoneIcon } from "../../../assets";

const ContactDetails = () => {
  return (
    <section className="flex flex-col gap-20">
      <div className="flex flex-col gap-3">
        <Text
          fontFamily="raleway"
          color="af-dark-green"
          variant="h3"
          fontWeight="medium"
        >
          Office Address (Nigeria)
        </Text>

        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          variant="h5"
          color="af-dark-green"
        >
          Block B, Ground Floor AUJ Complex, <br /> 564/565 Independence Ave,{" "}
          <br />
          Central Business District, <br />
          900211, <br />
          Abuja
        </Text>

        <div className="flex flex-col my-6">
          <div className="flex">
            <img src={EnvelopeIcon} alt="" />
            <Text
              fontFamily="raleway"
              color="af-dark-green"
              variant="h3"
              fontWeight="medium"
            >
              Email Address
            </Text>
          </div>

          <Text
            fontFamily="proxima-nova"
            fontWeight="bold"
            variant="h5"
            color="af-dark-green"
            customClassName="mt-3"
          >
            Serve@afenoid.com
          </Text>
        </div>

        <div>
          <div className="flex">
            <img src={TelephoneIcon} alt="" />
            <Text
              fontFamily="raleway"
              color="af-dark-green"
              variant="h3"
              fontWeight="medium"
            >
              Office Line
            </Text>
          </div>

          <Text
            fontFamily="proxima-nova"
            fontWeight="light"
            variant="h5"
            color="af-dark-green"
            customClassName="mt-3"
          >
            +2342092911777
          </Text>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Text
          fontFamily="raleway"
          color="af-dark-green"
          variant="h3"
          fontWeight="medium"
        >
          Office Address (England)
        </Text>

        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          variant="h5"
          color="af-dark-green"
        >
          Navigation House Unit 6, <br />
          Town Quay Wharf, Abbey Road, <br />
          Barking, <br />
          Essex, England, <br />
          IG11 7BZ
        </Text>

        <div className="flex flex-col my-6">
          <div className="flex">
            <img src={EnvelopeIcon} alt="" />
            <Text
              fontFamily="raleway"
              color="af-dark-green"
              variant="h3"
              fontWeight="medium"
            >
              Email Address
            </Text>
          </div>

          <Text
            fontFamily="proxima-nova"
            fontWeight="bold"
            variant="h5"
            color="af-dark-green"
            customClassName="mt-3"
          >
            director@afenoid.co.uk
          </Text>
        </div>

        <div>
          <div className="flex">
            <img src={TelephoneIcon} alt="" />
            <Text
              fontFamily="raleway"
              color="af-dark-green"
              variant="h3"
              fontWeight="medium"
            >
              Office Line
            </Text>
          </div>

          <Text
            fontFamily="proxima-nova"
            fontWeight="light"
            variant="h5"
            color="af-dark-green"
            customClassName="mt-3"
          >
            +2342092911777
          </Text>
        </div>
      </div>
    </section>
  );
};

export { ContactDetails };

{
  /* <Text
  fontFamily="proxima-nova"
  fontWeight="light"
  align="left"
  customClassName="!text-[28px] leading-[1.4] msm:!text-[20px]"
>
  {heroTexts.description}
</Text>; */
}
