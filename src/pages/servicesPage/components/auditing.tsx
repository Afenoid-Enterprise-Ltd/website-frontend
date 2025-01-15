import React from "react";
import { ServicesImg2 } from "../../../assets";
import { Text, Button } from "../../../ui";
import { Accordion, AccordionItem, CallToAction } from "../../../components";
import { LearnMoreDiv } from "./learnMoreDiv";

interface AuditingProps {
  openModal: () => void;
}

const Auditing: React.FC<AuditingProps> = (props) => {
  const { openModal } = props;

  const dataItem = {
    heroTexts: {
      caption: "",
      title: "Auditing",
      description:
        "Lack of auditing undermines digital trust, reducing tech adoption, productivity, business opportunities, & exposing value leakages. This ensures compliance, mitigate risks, & foster trust.",
    },
    image: ServicesImg2,
  };

  return (
    <section>
      <div className="px-[15rem] mxxl:px-[10rem] mxl:px-[5rem] msm:px-[3rem] mxs:px-4">
        <LearnMoreDiv heroTexts={dataItem.heroTexts} image={dataItem.image} />
      </div>
      <div className="w-[80%] mx-auto my-[8rem] px-[3rem] mlg:w-[90%] msm:px-[2rem]">
        <Text
          variant="h2"
          fontFamily="gambetta"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
        >
          Build Your Team's Security Excellence
        </Text>
        <div className="w-[70%] mx-auto  msm:w-full ">
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
      <div className="px-[10rem] py-[5rem] mxl:px-[5rem] msm:p-[3rem] mxs:p-4">
        <Accordion>
          <AccordionItem
            value="1"
            trigger="Compliance and Certification Readiness Consulting"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            We partner with our clients to ensure their good standing against
            myriads of standards and frameworks. These standards and frameworks
            provide a set of best practices and guidelines for organizations to
            use when implementing security and privacy measures. By adhering to
            these standards, organizations can improve their overall digital
            trust and provide a more secure and reliable digital experience for
            their customers. 
          </AccordionItem>
          <AccordionItem
            value="2"
            trigger="Payment Card Industry Data Security Standard"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            Afenoid is a Qualified Security Assessor Company for the Payment
            Card Industry Data Security Standard. We validate the scope of the
            card data environment and its compliance against the PCIDSS. We have
            a team of Qualified Security Assessors with decades of combined
            experience. The Payment Card Industry Data Security Standard (PCI
            DSS) is applicable to all organizations that accept credit and debit
            card payments. It helps protect sensitive financial information and
            prevent credit card fraud.
          </AccordionItem>
          <AccordionItem
            value="3"
            trigger="Management System Standards"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            We also help to establish, operate, and improve management system
            standards, MSS. When an organization systemizes how it does things,
            this is known as a management system. This makes sure that nothing
            is left out and that everyone is clear about who needs to do what,
            when, and how. A management system requires several essential
            components for it to function. These are:
            <br />
            <ul className="list-disc">
              <li className="ml-6">Objectives</li>
              <li className="ml-6">Processes</li>
              <li className="ml-6">Organizational structure and resources</li>
              <li className="ml-6">Performance feedback</li>
            </ul>
            We work with Registered Certification Bodies to determine the
            conformity of our clients after gap remediation and corrective
            action have been completed.
            <br />
            <ul className="list-disc">
              <li className="ml-6">
                {" "}
                <span>
                  Information Security Management System, ISO/IEC 27001:2022:{" "}
                </span>
                This international management system standard provides a
                framework that helps organizations to manage sensitive
                information, protect against threats, and ensure business
                continuity.
              </li>
              <li className="ml-6">
                <span>ISO/IEC 22301:</span>What you do before a crisis
                determines how well you do in a crisis. The ability of your
                organization to recover from a disaster is directly related to
                the degree of business continuity planning that has taken place
                BEFORE the disaster.
              </li>
              <li className="ml-6">
                <span>ISO 22301 standard</span> specifies requirements to plan,
                establish, implement, operate, monitor, review, maintain and
                continually improve a documented management system to prepare
                for, respond to and recover from disruptive events when they
                arise. We help to adopt and conform.
              </li>
              <li className="ml-6">
                ISO 20000-1: IT Service Management (now called Service
                Management System, SMS) was formally accepted as an ISO standard
                in the year 2005. The standard reflects an industry-wide
                recognition of the need to establish a system to manage IT
                service delivery and support. Service Management System, SMS,
                requires that organizations establish a formal Plan-Do-check-Act cycle in order to demonstrate their continual improvement in
                service delivery.
              </li>
            </ul>
          </AccordionItem>
          <AccordionItem
            value="4"
            trigger="SWIFT Customer Cybersecurity Framework"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            SWIFT, the backbone of global financial transactions is increasingly
            being targeted by cyber criminals, as the recent SWIFT cyber hacking
            sprees have made abundantly clear. The Customer Security Programme
            (CSP), launched by SWIFT in 2016, is designed to help customers
            implement the practices that  are critical to help defend against,
            detect and recover from cybercrime. Combating fraud is a challenge
            for the entire financial industry. The threat landscape adapts and
            evolves daily, and both SWIFT and its customers have to remain
            vigilant and proactive over the long term. While all customers are
            responsible for protecting their own environments, SWIFT has
            established the Customer Security  Programme (CSP) to support
            customers in the fight against cyber-attacks.
          </AccordionItem>
          <AccordionItem
            value="5"
            trigger="SOC 2"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            SOC 2 is a set of standards for service providers to report on their
            controls related to security, availability, processing integrity,
            confidentiality, and privacy. SOC 2 reports help organizations
            assess and address the risks associated with outsourcing their IT
            systems and data.
          </AccordionItem>
          <AccordionItem
            value="6"
            trigger="NIST Cybersecurity Framework"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            The NIST Cybersecurity Framework (NCSF) is a voluntary framework for
            improving cybersecurity risk management. It provides a common
            language for expressing, assessing, and managing cybersecurity risk,
            and can be used by organizations of any size or type.
          </AccordionItem>
          <AccordionItem
            value="7"
            trigger="Cybersecurity Maturity Model Certification (CMMC)"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            The CMMC is a certification program that helps organizations to
            assess and improve their cybersecurity practices. It includes a set
            of security controls and practices that organizations must implement
            to protect sensitive government information.
          </AccordionItem>
          <AccordionItem
            value="8"
            trigger="General Data Protection Regulation (GDPR)"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            The GDPR is a regulation in the European Union (EU) that applies to
            organizations processing personal data of EU citizens. It
            strengthens data protection rights and imposes significant penalties
            for non-compliance.
          </AccordionItem>
        </Accordion>

        <CallToAction
          title="Ready to have a conversation with us?"
          explanation="Schedule a meeting with a consultant right away"
          button={
            <Button
              variant="secondary"
              label="Contact Us"
              customClassName="mt-[2rem]"
              onClick={openModal}
            />
          }
        />
      </div>
    </section>
  );
};

export { Auditing };
