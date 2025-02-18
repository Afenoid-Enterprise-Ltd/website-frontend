import React, { useState } from "react";
import { LearnMoreDiv } from "./learnMoreDiv";
import {
  ServicesImg1,
  OverviewDDImg1,
  OverviewDDImg2,
  OverviewDDImg3,
  OverviewDDImg4,
  OverviewDDImg5,
  OverviewDDImg6,
  OverviewDDImg7,
  OverviewDDImg8,
} from "../../../assets";
import { ScheduleMeeting } from "../../../components";
import { DropdownCard } from "./dropdownCard";
import Slider from "react-slick";

interface ConsultingProps {
  openModal: () => void;
}

const Consulting: React.FC<ConsultingProps> = (props) => {
  const { openModal } = props;

  const dataItem = {
    heroTexts: {
      caption: "",
      title: "Digital Transformation Consulting",
      description:
        "Our digital transformation consulting services help to leverage digital technologies, tools, and platforms needful to transform your business operations and processes, improve performance and drive growth.",
    },
    image: ServicesImg1,
  };

  const dropdownData = [
    {
      title: "Digital Strategy Development",
      description:
        "We partner with our clients to ensure their good standing against myriads of standards and frameworks. These standards and frameworks provide a set of best practices and guidelines for organizations to use when implementing security and privacy measures. By adhering to these standards, organizations can improve their overall digital trust and provide a more secure and reliable digital experience for their customers. ",
      image: OverviewDDImg1,
    },
    {
      title: "Payment Card Industry Data Security Standard ",
      description:
        "Afenoid is a Qualified Security Assessor Company for the Payment Card Industry Data Security Standard. We validate the scope of the card data environment and its compliance against the PCIDSS. We have a team of Qualified Security Assessors with decades of combined experience. The Payment Card Industry Data Security Standard (PCI DSS) is applicable to all organizations that accept credit and debit card payments. It helps protect sensitive financial information and prevent credit card fraud.",
      image: OverviewDDImg2,
    },
    {
      title: "Management System Standards",
      description:
        "We help organizations establish, operate, and improve management systems, ensuring clear objectives, defined processes, proper resource allocation, and effective performance feedback. Partnering with certification bodies, we verify compliance after addressing gaps and corrective actions. Our expertise spans information security to protect sensitive data, business continuity to prepare for and recover from disruptions, IT service management to enhance service delivery, risk management to identify and mitigate potential threats, and quality management to ensure consistent and efficient operations.",
      image: OverviewDDImg3,
    },
    {
      title: "NIST Cybersecurity Framework",
      description:
        "The NIST Cybersecurity Framework (NCSF) is a comprehensive, voluntary guide for organizations seeking to enhance their cybersecurity risk management. It provides a flexible, common language to identify, assess, and address cybersecurity risks. Designed for organizations of all sizes and sectors, it consists of core components like identifying assets, protecting systems, detecting threats, responding to incidents, and recovering operations. It supports building a strong cybersecurity foundation.",
      image: OverviewDDImg4,
    },
    {
      title: "SOC 2",
      description:
        "SOC 2 is a set of standards designed to help service providers demonstrate their commitment to managing data securely. It focuses on five key principles: security, availability, processing integrity, confidentiality, and privacy. SOC 2 reports are tailored to assess an organization's controls and their effectiveness, helping to build trust with clients. These reports are critical for addressing risks associated with outsourcing IT systems, ensuring data protection, and meeting compliance requirements.",
      image: OverviewDDImg5,
    },
    {
      title: "SWIFT Customer Cybersecurity Framework",
      description:
        "SWIFT, the backbone of global financial transactions is increasingly being targeted by cyber criminals, as the recent SWIFT cyber hacking sprees have made abundantly clear. The Customer Security Programme (CSP), launched by SWIFT in 2016, is designed to help customers implement the practices that  are critical to help defend against, detect and recover from cybercrime. Combating fraud is a challenge for the entire financial industry. The threat landscape adapts and evolves daily, and both SWIFT and its customers have to remain vigilant and proactive over the long term.",
      image: OverviewDDImg6,
    },
    {
      title: "General Data Protection Regulation (GDPR)",
      description:
        "The GDPR is a landmark regulation that governs the protection and processing of personal data of EU citizens, applying to any organization handling such data, regardless of location. It empowers individuals with rights like data access, correction, and deletion while holding organizations accountable for transparency and data security. Non-compliance can result in severe penalties, making GDPR a key standard for ensuring robust data protection and fostering trust in the digital age.",
      image: OverviewDDImg7,
    },
    {
      title: "Cybersecurity Maturity Model Certification (CMMC)",
      description:
        "The Cybersecurity Maturity Model Certification (CMMC) is a structured framework developed to safeguard sensitive government information, particularly within the Defense Industrial Base (DIB). It establishes a tiered system of certification levels that require organizations to implement and maintain specific security controls and practices. By focusing on cyber hygiene, process maturity, and compliance,",
      image: OverviewDDImg8,
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

      <div className="w-full mx-auto my-[8rem] px-[5rem] grid grid-cols-3 gap-16 mxl:gap-6 mmlg:grid-cols-2 mmd:hidden msm:px-[3rem] msm:grid-cols-1 mxs:px-[1rem]">
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

      <div className="px-[5rem] msm:px-[3rem] mxs:px-4">
        <div className="my-24 mb-48">
          <ScheduleMeeting openModal={openModal} />
        </div>
      </div>
    </section>
  );
};

export { Consulting };
