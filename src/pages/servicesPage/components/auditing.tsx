import React, { useState } from "react";
import {
  ServicesImg2,
  DropdownImg1,
  DropdownImg2,
  DropdownImg3,
  DropdownImg4,
  DropdownImg5,
  DropdownImg6,
  DropdownImg7,
  DropdownImg8,
  DropdownImg9,
  DropdownImg10,
  DropdownImg11,
} from "../../../assets";
import { ScheduleMeeting } from "../../../components";
import { LearnMoreDiv } from "./learnMoreDiv";
import { DropdownCard } from "./dropdownCard";
import Slider from "react-slick";

interface AuditingProps {
  openModal: () => void;
}

const Auditing: React.FC<AuditingProps> = (props) => {
  const { openModal } = props;

  const dataItem = {
    heroTexts: {
      caption: "",
      title: "Digital Trust Services",
      description:
        "Lack of auditing undermines digital trust, reducing tech adoption, productivity, business opportunities, & exposing value leakages. This ensures compliance, mitigate risks, & foster trust.",
    },
    image: ServicesImg2,
  };

  const dropdownData = [
    {
      title: "Compliance and Certification Readiness Consulting",
      description:
        "We partner with our clients to ensure their good standing against myriads of standards and frameworks. These standards and frameworks provide a set of best practices and guidelines for organizations to use when implementing security and privacy measures. By adhering to these standards, organizations can improve their overall digital trust and provide a more secure and reliable digital experience for their customers. ",
      image: DropdownImg1,
    },
    {
      title: "Design and Development of Governance and Management Systems",
      description:
        "We design governance systems that align with an organization’s unique needs, ensuring value creation through benefit realization, risk optimization, and resource optimization. Using the COBIT framework, we adapt governance for enterprise IT, addressing factors like strategy, goals, risk profile, and compliance requirements. Our tailored capabilities include policies, processes, and competencies to bridge the gap between the current and desired state, fostering sustainable and effective governance systems. ",
      image: DropdownImg2,
    },
    {
      title: "Digital Capability Assessments",
      description:
        "Our digital capability assessments identify the strengths, weaknesses, and opportunities within an organization’s services, infrastructures, and applications. Using toolkits for self-assessments and facilitated evaluations by consultants, we provide actionable insights into key questions like effectiveness, efficiency, and benefit realization. The process ensures organizations not only understand their current capabilities but also track improvement initiatives over time, driving consistent growth and enhanced digital performance.",
      image: DropdownImg3,
    },
    {
      title: "Risk Management Consulting",
      description:
        "We guide organizations in identifying, assessing, and mitigating IT risks while developing strategies to manage these risks effectively. Our consulting service ensures organizations are proactive in addressing vulnerabilities and building resilience, aligning IT risk management with broader business objectives to protect operations and assets.",
      image: DropdownImg4,
    },
    {
      title: "IT Security Consulting",
      description:
        "IT security consulting services safeguard organizations from cyber threats, securing networks, applications, and data. We help implement robust defenses and strategies to mitigate risks, ensuring a secure IT environment that protects critical information and enhances trust among stakeholders.",
      image: DropdownImg5,
    },
    {
      title: "IT Audit & Assessment Consulting",
      description:
        "We evaluate IT systems and processes to identify gaps and areas for improvement, providing actionable recommendations to enhance efficiency, security, and compliance. Our audits ensure organizations meet regulatory requirements while optimizing IT operations for better performance. ",
      image: DropdownImg6,
    },
    {
      title: "IT Policy and Procedure Consulting",
      description:
        "We assist organizations in developing and implementing effective IT policies and procedures to mitigate risks and ensure compliance. Our service focuses on creating comprehensive guidelines that protect against vulnerabilities while aligning with industry standards and regulations.",
      image: DropdownImg7,
    },
    {
      title: "Business continuity and disaster recovery consulting",
      description:
        "Our business continuity and disaster recovery consulting services ensure that organizations are prepared to handle unexpected disruptions and maintain operational resilience. We help develop comprehensive plans to identify critical business functions, establish recovery time objectives (RTOs), and design fail-safe systems for minimizing downtime. Our experts guide organizations in conducting risk assessments, creating redundancy strategies, and testing response plans through simulated exercises.",
      image: DropdownImg8,
    },
    {
      title: "Incident Response & Management Consulting",
      description:
        "Our incident response and management consulting services equip organizations with the expertise and tools to detect, respond to, and recover from security breaches effectively. We develop incident response plans tailored to your organization’s unique risks and regulatory requirements, ensuring a rapid and structured response to mitigate damage. Additionally, we offer training programs to enhance staff awareness and readiness, conduct post-incident reviews to identify root causes, and provide actionable insights for improvement.",
      image: DropdownImg9,
    },
    {
      title: "Cloud Security Consulting",
      description:
        "Our cloud security consulting services help organizations secure their cloud environments by addressing vulnerabilities and implementing best practices for data protection. We assess existing cloud architectures to identify risks, enforce compliance with regulatory requirements, and develop strategies to safeguard sensitive information. From setting up identity and access management controls to implementing encryption and disaster recovery solutions, we ensure your cloud infrastructure is secure and resilient.",
      image: DropdownImg10,
    },
    {
      title: "Cybersecurity Maturity Assessment",
      description:
        "Our cybersecurity maturity assessment service provides organizations with a comprehensive evaluation of their security posture, identifying strengths, vulnerabilities, and areas for improvement. We use established frameworks, such as NIST, ISO 27001, and CMMC, to benchmark your organization’s cybersecurity practices and ensure alignment with industry standards. Our experts help organizations design tailored roadmaps to address gaps, prioritize investments, and achieve incremental improvements in threat detection, prevention, and response capabilities.",
      image: DropdownImg11,
    },
  ];

  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const handleCardToggle = (cardId: number) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
  };

  const settings = {
    dots: true,
    infinite: true,
    classname: "center",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: true,
  };

  return (
    <section >
      <div className="px-[15rem] mxxl:px-[10rem] mxl:px-[5rem] mmd:my-[4rem] msm:px-[3rem] mxs:px-4">
        <LearnMoreDiv heroTexts={dataItem.heroTexts} image={dataItem.image} />
      </div>
      <div className="w-full mx-auto my-[8rem] px-[5rem] grid grid-cols-3 gap-16 mxl:gap-6 mmlg:grid-cols-2 mmd:hidden msm:grid-cols-1 mxs:px-[1rem]">
        {dropdownData.map((dropdown, index) => (
          <DropdownCard
            image={dropdown.image}
            title={dropdown.title}
            description={dropdown.description}
            reverse={index % 2 === 0}
            isExpanded={expandedCardId === index}
            onToggle={() => handleCardToggle(index)}
          />
        ))}
      </div>

      <div className="hidden mmd:block mmd:px-[5rem] msm:px-[3rem] mxs:px-4">
        <Slider {...settings}>
          {dropdownData.map((dropdown, index) => (
            <DropdownCard
              key={index}
              image={dropdown.image}
              title={dropdown.title}
              description={dropdown.description}
              reverse={index % 2 === 0}
              isExpanded={expandedCardId === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </Slider>
      </div>

      <div className="px-[5rem] msm:p-6 mxs:p-4">
        <div className="my-24 mb-48">
          <ScheduleMeeting openModal={openModal} />
        </div>
      </div>
    </section>
  );
};

export { Auditing };
