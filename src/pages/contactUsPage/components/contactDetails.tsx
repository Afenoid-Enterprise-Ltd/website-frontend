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
          customClassName="msm:text-h4"
        >
          Office Address (Nigeria)
        </Text>

        <Text
          fontFamily="proxima-nova"
          fontWeight="light"
          variant="h5"
          color="af-dark-green"
          customClassName="msm:text-h5"
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
              customClassName="msm:text-h4"
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
              customClassName="msm:text-h4"
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
          customClassName="msm:text-h4 msm:border-t-[#9FA39B]"
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
              customClassName="msm:text-h4"
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
              customClassName="msm:text-h4"
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

        <div className="flex gap-4 items-center justify-center mt-14 msm:gap-8">
          <Link to="https://x.com/Afenoid">
            <img src={TwitterGreen} alt="" className="msm:w-[2rem]"/>
          </Link>
          <Link to="https://www.instagram.com/afenoidenterprise">
            <img src={InstagramGreen} alt="" className="msm:w-[2rem]"/>
          </Link>
          <Link to="https://www.linkedin.com/company/afenoid-enterprise">
            <img src={LinkedinGreen} alt="" className="msm:w-[2rem]"/>
          </Link>
          <Link to="/">
            <img src={FacebookGreen} alt="" className="msm:w-[2rem]"/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export { ContactDetails };
