import { ServicesImg2 } from "../../../assets";
import { Text, Button } from "../../../ui";
import { Accordion, AccordionItem, CallToAction } from "../../../components";
import { LearnMoreDiv } from "./learnMoreDiv";

const Auditing = () => {
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
        <LearnMoreDiv
          heroTexts={dataItem.heroTexts}
          image={dataItem.image}
        />
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            asperiores corporis perferendis voluptatibus delectus iste eos
            eveniet consequatur et! Voluptates ex minima magni dolorem inventore
            voluptas iste laboriosam odit quia?
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            asperiores corporis perferendis voluptatibus delectus iste eos
            eveniet consequatur et! Voluptates ex minima magni dolorem inventore
            voluptas iste laboriosam odit quia?
          </AccordionItem>
          <AccordionItem
            value="6"
            trigger="NIST Cybersecurity Framework"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
            asperiores corporis perferendis voluptatibus delectus iste eos
            eveniet consequatur et! Voluptates ex minima magni dolorem inventore
            voluptas iste laboriosam odit quia?
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
              variant="primary"
              label="Book a Consultation"
              customClassName="mt-[2rem]"
            />
          }
        />
      </div>
    </section>
  );
};

export { Auditing };
