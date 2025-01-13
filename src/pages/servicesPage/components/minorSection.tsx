import React from "react";
import { Button, Text } from "../../../ui";
import { CallToAction, CaseStudyCard } from "../../../components";
import {
  TrainingImg1,
  TrainingImg2,
  TrainingImg3,
  IsacaLogo,
  PecbLogo,
  SwiftLogo,
  PciLogo,
  ApmgLogo,
} from "../../../assets";
import { Link } from "react-router-dom";

interface MinorSectionProps {
  openModal: () => void
}

const MinorSection: React.FC<MinorSectionProps> = (props) => {
  const {openModal} = props;

  const trainingData = [
    {
      title: "Information Security Management System (ISO 27001)",
      description:
        "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",
      image: TrainingImg1,
      route: "/services/information-security-management-system"
    },
    {
      title: "Business Continuity Management System (ISO 22301)",
      description:
        "Our consultation services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations.",
      image: TrainingImg2,
      route: "/services/business-continuity-management-system"
    },
    {
      title: "Certified in Risk and Information Systems Control (CRISC)",
      description:
        "The lack of digital trust can lead to a lack of adoption of digital technology, decreased productivity, lost business opportunities and value leakages.",
      image: TrainingImg3,
      route: "/services/crisc"
    },
  ];

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
    <section>
      <div className="flex flex-col items-center">
        <Text
          variant="h3"
          fontFamily="gambetta"
          fontWeight="semi-bold"
          align="center"
          customClassName="mt-[5rem]"
        >
          Partnering for Excellence
        </Text>
        <div className="flex justify-center items-center gap-6 my-[3rem] mlg:px-[5rem] mxs:my-[1rem]">
          <div className="flex justify-center items-center gap-6 my-[3rem] mxs:my-[1.5rem]">
            {partners.map((partner, index) => (
              <Link to={partner.route} target="_blank" className="block transition ease-in-out delay-150 duration-300 hover:-translate-y-4">
                <img src={partner.logo} alt="Our Partners" key={index} loading="lazy" className="mxs:min-w-[55px] object-cover"/>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-[60%] msm:w-[75%] mxs:w-[80%]">
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            fontWeight="medium"
            align="center"
            customClassName="mxxss:text-xs"
          >
            We collaborate with industry-leading technology providers and
            certification bodies to deliver comprehensive services. Our
            partnerships enhance our service delivery, ensuring you receive
            validated expertise for your compliance journey.
          </Text>
        </div>
      </div>
      <div>
        <Text
          variant="h3"
          fontFamily="gambetta"
          fontWeight="semi-bold"
          align="center"
          customClassName="my-[5rem]"
        >
          Our Courses
        </Text>

        <div className="flex justify-between items-start gap-10 px-[5rem] mb-[10rem] mxxl:grid mxxl:grid-cols-3 mxxl:px-[3rem] mlg:grid-cols-2 msm:grid-cols-1 mxs:px-[2rem] mxxs:px-4">
          {trainingData.map((training, index) => (
            <CaseStudyCard
              title={training.title}
              description={training.description}
              image={training.image}
              key={index}
              route={training.route}
            />
          ))}
        </div>
      </div>

      <CallToAction
        title="Our journey with you starts here"
        explanation="Looking to implement digital solutions, assess your organization's resilience, or enhance your professional expertise?"
        button={
          <Button
            variant="secondary"
            label="Contact Us"
            customClassName="mt-[2rem]"
            onClick={openModal}
          />
        }
      />
    </section>
  );
};

export { MinorSection };
