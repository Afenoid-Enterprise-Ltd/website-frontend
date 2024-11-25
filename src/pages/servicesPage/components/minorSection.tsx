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
  NistLogo,
} from "../../../assets";

const MinorSection = () => {
  const trainingData = [
    {
      title: "Information Security Management System (ISO 27001)",
      description:
        "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",
      image: TrainingImg1,
    },
    {
      title: "Business Continuity Management System (ISO 22301)",
      description:
        "Our consultation services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations.",
      image: TrainingImg2,
    },
    {
      title: "Certified in Risk and Information Systems Control (CRISC)",
      description:
        "The lack of digital trust can lead to a lack of adoption of digital technology, decreased productivity, lost business opportunities and value leakages.",
      image: TrainingImg3,
    },
  ];

  const partners = [
    IsacaLogo,
    PecbLogo,
    SwiftLogo,
    PciLogo,
    ApmgLogo,
    NistLogo,
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
        <div className="flex justify-center items-center gap-6 my-[3rem]">
          {partners.map((partner, index) => (
            <img src={partner} alt="Our Partners" key={index} />
          ))}
        </div>
        <div className="w-[60%]">
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            fontWeight="medium"
            align="center"
            customClassName=""
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

        <div className="flex justify-between items-start gap-10 px-[5rem] mb-[10rem]">
          {trainingData.map((training, index) => (
            <CaseStudyCard
              title={training.title}
              description={training.description}
              image={training.image}
              key={index}
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
          />
        }
      />
    </section>
  );
};

export { MinorSection };
