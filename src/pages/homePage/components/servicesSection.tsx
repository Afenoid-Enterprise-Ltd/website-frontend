import { Text } from "../../../ui";
import {
  ServicesImg1,
  ServicesImg2,
  ServicesImg3,
  TrainingImg1,
  TrainingImg2,
  TrainingImg3,
} from "../../../assets";
import { CaseStudyCard, Slogan } from "../../../components";

const ServicesSection = () => {
  const caseStudyData = [
    {
      title: "DIGITAL SKILLS DEVELOPMENT",
      description:
        "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",
      image: ServicesImg1,
    },
    {
      title: "DIGITAL TRUST SERVICES",
      description:
        "The lack of digital trust can lead to a lack of adoption of digital technology, decreased productivity, lost business opportunities and value leakages.",
      image: ServicesImg2,
    },
    {
      title: "TRANSFORMATION CONSULTING",
      description:
        "Our consultation services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations. ",
      image: ServicesImg3,
    },
  ];

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

  return (
    <section>
      <div>
        <Text
          variant="h3"
          fontFamily="gambetta"
          fontWeight="semi-bold"
          align="center"
          customClassName="my-[5rem]"
        >
          Our Services
        </Text>
        <div className="flex justify-between items-start gap-10 px-[5rem] mb-[10rem]">
          {caseStudyData.map((caseStudy, index) => (
            <CaseStudyCard
              title={caseStudy.title}
              description={caseStudy.description}
              image={caseStudy.image}
              key={index}
            />
          ))}
        </div>
      </div>
      <Slogan>
        <div className="w-full h-auto bg-afenoid-light-grey p-[2rem]">
          <Text
            variant="body-reg"
            color="af-green"
            fontFamily="proxima-nova"
            customClassName="uppercase"
          >
            At Afenoid
          </Text>
          <Text
            variant="h2"
            color="af-green"
            fontFamily="gambetta"
            customClassName="text-[3rem]"
            fontWeight="light"
          >
            We <span className="font-bold">strengthen</span> organizations and{" "}
            <span className="font-bold">equip</span> professionals.
          </Text>
        </div>
      </Slogan>
      <div>
        <Text
          variant="h3"
          fontFamily="gambetta"
          fontWeight="semi-bold"
          align="center"
          customClassName="my-[5rem]"
        >
          Our Training
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
    </section>
  );
};

export { ServicesSection };
