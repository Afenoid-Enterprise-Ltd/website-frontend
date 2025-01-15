import React from "react";
import { Text, Button } from "../../../ui";
import { LearnMoreDiv } from "./learnMoreDiv";
import { CallToAction, CaseStudyCard } from "../../../components";
import {
  TrainingImg1,
  TrainingImg2,
  TrainingImg3,
  CaseStudyImg1,
  CaseStudyImg2,
  CaseStudyImg3,
  SkillsDevImg2,
  SkillsDevImg3,
  ServicesImg3,
  NeuroscienceImg
} from "../../../assets";

interface TrainingProps {
  openModal: () => void
}

const Training: React.FC<TrainingProps> = (props) => {
  const {openModal} = props;
  
  const dataItem = {
    heroTexts: {
      caption: "",
      title: "Training",
      description:
        "Our courses focus on developing skills and competencies in corporate governance of information and technology, service management, risk management, information security, cybersecurity, data privacy, and audit and assurance.",
    },
    image: ServicesImg3,
  };

  const cardData = [
    {
      title: "Certified in Risk and Information Systems Control (CRISC)",
      description:
        "This course provides the skills to identify, assess, and manage IT and enterprise risks while designing effective information systems controls to achieve business objectives.",
      image: TrainingImg3,
      route: "/services/crisc",
    },
    {
      title: "DORA Lead Manager",
      description:
        "The PECB Certified DORA Lead Manager course equips you to lead digital resilience strategies, ensuring compliance with the EU's Digital Operational Resilience Act (DORA).",
      image: SkillsDevImg2,
      route: "/services/dora-lead-manager",
    },
    {
      title: "Federated IT Service Management (FitSM) Foundation Certification",
      description:
        "Struggling with complex IT service management frameworks? The PECB Certified FitSM course simplifies processes, helping you streamline workflows, enhance service quality, and align IT services with business goals.",
      image: CaseStudyImg2,
      route: "/services/federated-IT-service-management",
    },
    {
      title: "Neuroscience for Change",
      description:
        "The APMG Certified Neuroscience for Change course delves into how the brain works and reacts to change, offering practical insights and tools to help you lead and sustain meaningful transformations in individuals and organizations.",
      image: NeuroscienceImg,
      route: "/services/neuroscience-for-change",
    },
    {
      title: "Business Relationship Management Professional (BRMP)",
      description:
        "Imagine being the key link between business strategy and execution. The BRMP course equips you with the skills to build strong relationships, drive collaboration, and ensure business goals align with organizational success.",
      image: CaseStudyImg1,
      route: "/services/business-relationship-management-professional",
    },
    {
      title: "APMG Change Management",
      description:
        "Change can bring uncertainty and resistance within an organization. This course provides the strategies to help your team navigate transitions, address resistance, and drive successful, lasting change.",
      image: CaseStudyImg3,
      route: "/services/apmg-change-management",
    },
    {
      title: "Business Continuity Management System (ISO 22301)",
      description:
        "Disruptions can happen at any time. With ISO 22301, you'll develop a Business Continuity Management System (BCMS) that keeps your operations running smoothly, even in the face of unexpected challenges, ensuring resilience and protecting your business's future.",
      image: TrainingImg2,
      route: "/services/business-continuity-management-system",
    },
    {
      title: "Information Security Management System (ISO 27001)",
      description:
        "When sensitive data is at risk, organizations need a plan. This course guides you in creating an Information Security Management System (ISMS) that helps safeguard your data, manage risks, and build trust with customers—ensuring you stay compliant and secure in a digital world.",
      image: TrainingImg1,
      route: "/services/information-security-management-system",
    },
    {
      title: "Service Management System (ISO 20000)",
      description:
        "IT services must be reliable and efficient. ISO 20000 helps you build an IT Service Management System (SMS) that improves operations, enhances service delivery, and ensures customer satisfaction, creating a foundation for consistent, high-quality IT support.",
      image: SkillsDevImg3,
      route: "/services/service-management-system",
    },
  ];

  return (
    <section>
      <div className="px-[15rem] mxxl:px-[10rem] mxl:px-[5rem] msm:px-[3rem] mxs:px-4">
        <LearnMoreDiv heroTexts={dataItem.heroTexts} image={dataItem.image} />
      </div>

      <div className="w-[80%] mx-auto my-[8rem] px-[3rem] mlg:w-[90%] mmd:my-[4rem] ">
        <Text
          variant="h2"
          fontFamily="gambetta"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
        >
          Build Your Team's Security Excellence
        </Text>
        <div className="w-[70%] mx-auto msm:w-full">
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

      <div className="grid grid-cols-3 gap-x-10 gap-y-20 px-[5rem] mxxl:grid-cols-3 mxxl:gap-x-8 msm:grid-cols-1 mmd:px-[3rem] mxs:px-4 mlg:grid-cols-2 mxxl:px-[3rem]">
        {cardData.map((card, index) => (
          <CaseStudyCard
            title={card.title}
            description={card.description}
            image={card.image}
            key={index}
            optionalWidth={true}
            route={card.route}
          />
        ))}
      </div>

      <CallToAction
        title="Ready to have a conversation with us?"
        explanation="Contact a service support representative right away."
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

export { Training };
