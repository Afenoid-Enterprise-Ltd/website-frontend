import { Text, } from "../../../ui";
import {
  ServicesImg1,
  ServicesImg2,
  ServicesImg3,
} from "../../../assets";
import { CaseStudyCard, } from "../../../components";

const ServicesSection = () => {

  const caseStudyData = [
    {
      title: "DIGITAL TRANSFORMATION CONSULTING",
      description:
        "Our consultation services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations. ",
      image: ServicesImg1,
      route: "/services#consulting",
    },
    {
      title: "DIGITAL TRUST SERVICES",
      description:
        "Lack of auditing erodes digital trust, hindering tech adoption, productivity, and business opportunities. It ensures compliance, mitigates risks, and builds trust.",
      image: ServicesImg2,
      route: "/services#auditing",
    },
    {
      title: "DIGITAL SKILLS DEVELOPMENT",
      description:
        "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",
      image: ServicesImg3,
      route: "/services#training",
    },
  ];

  return (
    <section className="w-screen 2xl:w-full px-[5rem] msm:px-8">
      <div>
        <Text
          variant="h3"
          fontFamily="raleway"
          fontWeight="medium"
          align="center"
          customClassName="text-[32px] my-[5rem] msm:text-h4 msm:mb-[3.3rem] msm:mt-[5rem]"
        >
          Our Services
        </Text>
        <div className="flex justify-between items-start gap-10 mb-[5rem] mmlg:grid mmlg:grid-cols-2 msm:grid-cols-1 ">
          {caseStudyData.map((caseStudy, index) => (
            <CaseStudyCard
              title={caseStudy.title}
              description={caseStudy.description}
              image={caseStudy.image}
              key={index}
              route={caseStudy.route}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ServicesSection };
