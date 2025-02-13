import { Text } from "../../../ui";
import {
  EnvelopeIcon,
  TelephoneIcon,
  FacebookGreen,
  TwitterGreen,
  InstagramGreen,
  LinkedinGreen,
} from "../../../assets";
import { Link } from "react-router-dom";

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
          <div className="flex gap-2">
            <img src={EnvelopeIcon} alt="" className="text-sm w-6"/>
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
          <div className="flex gap-2">
            <img src={TelephoneIcon} alt="" className="text-sm w-6"/>
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
          <div className="flex gap-2">
            <img src={EnvelopeIcon} alt="" className="text-sm w-6"/>
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
          <div className="flex gap-2">
            <img src={TelephoneIcon} alt="" className="text-sm w-6" />
            <Text
              fontFamily="raleway"
              color="af-dark-green"
              variant="h3"
              fontWeight="medium"
            >
              Office Lines
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

        <div className="flex gap-4 items-center mt-14">
          <Link to="/">
            <img src={TwitterGreen} alt="" />
          </Link>
          <Link to="/">
            <img src={InstagramGreen} alt="" />
          </Link>
          <Link to="/">
            <img src={LinkedinGreen} alt="" />
          </Link>
          <Link to="/">
            <img src={FacebookGreen} alt="" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ContactDetails };
