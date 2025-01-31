import { Link } from "react-router-dom";
import { Button, Text } from "../../../ui";
import { ChoiceAfenoid } from "../../../components";
import { HeroDivs } from "./heroDivs";
import { ForwardImg } from "../../../assets";
import {
  IsacaLogo,
  PecbLogo,
  SwiftLogo,
  PciLogo,
  ApmgLogo,
} from "../../../assets";

const ChoiceSection = () => {
  const partners = [
    {
      logo: IsacaLogo,
      route: "https://www.isaca.org/search#q=afenoid&sort=relevancy",
    },
    {
      logo: PecbLogo,
      route:
        "https://pecb.com/en/partner/active_partners?Partner%5Bpecb_country_id%5D=156&Partner%5Bpecb_state_id%5D=&Partner%5Bcity%5D=&Partner%5Bcompany_name%5D=Afenoid&yt0=Search",
    },
    { logo: SwiftLogo, route: "" },
    {
      logo: PciLogo,
      route:
        "https://www.pcisecuritystandards.org/assessors_and_solutions/qualified_security_assessors/?search=Afenoid+Enterprise+Limited#searchresult",
    },
    {
      logo: ApmgLogo,
      route: "https://apmg-international.com/ato/afenoid-enterprise-limited",
    },
  ];

  return (
    <section className="my-[3.5rem] px-[5rem] msm:px-6">
      <HeroDivs />
      <div className="px-[3rem] flex flex-col mmlg:px-0">
        <ChoiceAfenoid />
        <div className="flex justify-center">
          <Link to="/about-us">
            <Button variant="secondary" label="About Us" />
          </Link>
        </div>
        <div className="w-full h-auto my-[8rem]">
          <img
            src={ForwardImg}
            alt="Image"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <Text
            align="center"
            variant="h2"
            fontFamily="montserrat"
            color="af-dark-green"
            customClassName="text-[32px] my-[4rem]"
          >
            Partnering for Excellence
          </Text>
          <div className="flex justify-center items-center gap-6 mlg:px-[5rem] mxs:my-[1rem] ">
            <div className="flex justify-center items-center gap-6 my-[3rem] mxs:my-[1.5rem]">
              {partners.map((partner, index) => (
                <Link
                  to={partner.route}
                  target="_blank"
                  className="block transition ease-in-out delay-150 duration-300 hover:-translate-y-4"
                  key={index}
                >
                  <img
                    src={partner.logo}
                    alt="Our Partners"
                    loading="lazy"
                    className="w-[200px] mxs:min-w-[50px] object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-[70%]">
              <Text
                align="center"
                color="af-dark-green"
                fontFamily="proxima-nova"
                fontWeight="regular"
                variant="h5"
                customClassName="text-[20px]"
              >
                We collaborate with industry-leading technology providers and
                certification bodies to deliver comprehensive services. Our
                partnerships enhance our service delivery, ensuring you receive
                validated expertise for your compliance journey.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ChoiceSection };
