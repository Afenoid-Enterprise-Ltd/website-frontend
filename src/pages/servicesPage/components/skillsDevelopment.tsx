import { Text, Button } from "../../../ui";
import { LearnMoreDiv } from "./learnMoreDiv";
import { DigitalSkillsDevImg } from "../../../assets";
import { CallToAction, CaseStudyCard } from "../../../components";
import {
  TrainingImg1,
  TrainingImg2,
  TrainingImg3,
  CaseStudyImg1,
  CaseStudyImg2,
  CaseStudyImg3,
  SkillsDevImg1,
  SkillsDevImg2,
  SkillsDevImg3,
} from "../../../assets";

const SkillsDevelopment = () => {
  const dataItem = {
    heroTexts: {
      caption: "",
      title: "Digital Skills Development",
      description:
        "Our courses focus on developing skills and competencies in corporate governance of information and technology, service management, risk management, information security, cybersecurity, data privacy, and audit and assurance.",
    },
    image: DigitalSkillsDevImg,
  };

  const cardData = [
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
    {
      title: "Business Relationship Management Professional (BRMP)",
      description:
        "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",
      image: CaseStudyImg1,
    },
    {
      title:
        "Federated IT Service Management (FitSM) Foundation Certification ",
      description:
        "The lack of digital trust can lead to a lack of adoption of digital technology, decreased productivity, lost business opportunities and value leakages.",
      image: CaseStudyImg2,
    },
    {
      title: "APMG Change Management",
      description:
        "Our consultation services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations.",
      image: CaseStudyImg3,
    },
    {
      title: "Neuroscience for Change",
      description:
        "The lack of digital trust can lead to a lack of adoption of digital technology, decreased productivity, lost business opportunities and value leakages.",
      image: SkillsDevImg1,
    },
    {
      title: "Quality Management System (ISO 27001)",
      description:
        "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",
      image: SkillsDevImg2,
    },
    {
      title: "How ISMS compliance is influence corporate information",
      description:
        "Our consultation services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations. ",
      image: SkillsDevImg3,
    },
  ];

  return (
    <section>
      <div className="px-[15rem]">
        <LearnMoreDiv
          heroTexts={dataItem.heroTexts}
          image={dataItem.image}
          btnText="Contact Us"
        />
      </div>

      <div className="w-[80%] mx-auto my-[8rem] px-[3rem]">
        <Text
          variant="h2"
          fontFamily="gambetta"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
        >
          Build Your Team's Security Excellence
        </Text>
        <div className="w-[70%] mx-auto">
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            align="center"
            color="af-dark-green"
            fontWeight="light"
            customClassName="text-[1.5rem]"
          >
            Empower your workforce with industry-recognized certifications and
            practical training programs designed for real-world application.
          </Text>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-x-10 gap-y-20 px-[5rem]">
        {cardData.map((card, index) => (
          <CaseStudyCard
            title={card.title}
            description={card.description}
            image={card.image}
            key={index}
          />
        ))}
      </div>

      <CallToAction
        title="Ready to have a conversation with us?"
        explanation="Contact a service support representative right away."
        button={
          <Button
            variant="primary"
            label="Book a Consultation"
            customClassName="mt-[2rem]"
          />
        }
      />
    </section>
  );
};

export { SkillsDevelopment };
