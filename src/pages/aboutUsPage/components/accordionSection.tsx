import React from "react";
import { Link } from "react-router-dom";
import { Accordion, AccordionItem } from "../../../components/accordion";
import { Text, Button } from "../../../ui";
import { HandShakeImg } from "../../../assets";

interface AccordionProps {
  openConsultationModal: () => void;
}

const AccordionSection: React.FC<AccordionProps> = (props) => {
  const { openConsultationModal } = props;

  return (
    <div className="w-full mt-20 mxs:px-4">
      <div className="w-full flex justify-center items-center">
        <div className="w-[40%] mlg:w-[60%] msm:w-[70%] mxs:w-[80%] mxxs:w-full">
          <Text
            variant="h2"
            fontWeight="medium"
            fontFamily="raleway"
            align="center"
            customClassName="uppercase !text-[32px]"
          >
            Frequently Asked Questions
          </Text>
          <Text
            variant="h5"
            fontWeight="light"
            fontFamily="proxima-nova"
            align="center"
            customClassName="!text-[20px]"
          >
            Can't find the answer you're looking for? Reach out to our service
            support team with{" "}
            <Link
              to="mailto:serveme@afenoid.com"
              className="font-medium text-afenoid-lemon underline underline-offset-2"
            >
              serveme@afenoid.com
            </Link>
          </Text>
        </div>
      </div>

      <div className="p-[5rem] msm:p-[3rem] mxs:p-0 mxs:py-[2rem]" id="faqs">
        <Accordion>
          <AccordionItem
            value="1"
            trigger="What is Afenoid About?"
            mainFontType="raleway"
            minorFontType="proxima-nova"
          >
            Established in 2011, Afenoid Enterprise Limited is a Business and
            Technology service firm, that enables credible solutions to
            organizations and individuals for cyber resilience, digital trust,
            competence development, and managed services. Our top clients are
            dominant players in sub-Saharan Africa and the Middle East.
          </AccordionItem>
          <AccordionItem
            value="2"
            trigger="What services does Afenoid offer?"
            mainFontType="raleway"
            minorFontType="proxima-nova"
          >
            Digital Strategy: We orchestrate and catalyse your digital
            transformation investments from conceptualization to value
            realization.
            <br />
            <br />
            Performance Improvement: We accelerate your cybersecurity maturity
            and help to minimize your breach likelihood.
            <br />
            <br />
            Compliance Assurance: We supply capabilities you need to adopt,
            adapt and optimize regulatory frameworks and comply with industry
            standards.
            <br />
            <br />
            Competence Development: We train and mentor your personnel to comply
            with various Governance, Information Technology, Cybersecurity, and
            Privacy requirements across global markets.
          </AccordionItem>
          <AccordionItem
            value="3"
            trigger="What management system, standards, and frameworks does Afenoid provide"
            mainFontType="raleway"
            minorFontType="proxima-nova"
          >
            <ul className="list-disc pl-[1rem]">
              <li>
                ISO (International Organization for Standardization): ISO/IEC
                27001; 27005; 22301; 9001
              </li>
              <li>COBIT Framework</li>
              <li>COBIT Framework</li>
              <li>SWIFT</li>
              <li>PCI DSS</li>
              <li>NIST</li>
            </ul>
          </AccordionItem>
          <AccordionItem
            value="4"
            trigger="Who does Afenoid serve?"
            mainFontType="raleway"
            minorFontType="proxima-nova"
          >
            <ul className="list-disc pl-[1rem]">
              <li>Financial Institutions</li>
              <li>Government Agencies</li>
              <li>Technology Companies</li>
              <li>Telecommunications Providers</li>
              <li>Manufacturing and Supply Chain</li>
              <li>Small and Medium Enterprises (SMEs)</li>
            </ul>
          </AccordionItem>
        </Accordion>
      </div>

      {/* <div className="bg-afenoid-light-lemon px-[5rem] py-10 flex gap-8 msm:px-[3rem] mxs:flex-col">
        <div className="w-1/2 h-[25rem] mxs:w-full">
          <img
            src={OfficeLocationImg}
            alt="Office Location Image"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-start mxs:w-full">
          <Text
            variant="h2"
            fontFamily="gambetta"
            align="left"
            color="af-dark-green"
            fontWeight="medium"
            customClassName="msm:text-[1.5rem] mlg:text-[2.25rem] "
          >
            Visit us at
          </Text>
          <Text
            variant="h6"
            fontFamily="proxima-nova"
            align="left"
            color="af-dark-green"
            fontWeight="light"
            customClassName="mb-8 msm:text-[0.75rem] mlg:text-[0.875rem]"
          >
            Interested in visiting our offices? We would be more than happy to
            welcome you
          </Text>
          <Link to="https://maps.app.goo.gl/C8w9ZvwS6Ei9npLz5" target="_blank">
            <Text
              variant="h5"
              fontFamily="proxima-nova"
              align="left"
              color="af-dark-green"
              fontWeight="light"
              customClassName="msm:text-[0.875rem] mlg:text-[1rem] hover:underline underline-offset-4"
            >
              Block B, Ground Floor AUJ Complex, 564/565 Independence Ave,
              Central Business District, 900211, Abuja.
            </Text>
          </Link>
        </div>
      </div> */}

      {/* <CallToAction
        title="Ready to have a conversation with us?"
        explanation="Schedule a meeting with a consultant right away"
        button={
          <Button
            variant="primary"
            label="Book a Consultation"
            customClassName="mt-[2rem]"
            onClick={openConsultationModal}
          />
        }
      /> */}
      <div className="my-[10rem] px-[5rem]">
        <div
          className=" w-full h-[500px] bg-cover bg-no-repeat bg-center flex justify-start items-center"
          style={{ backgroundImage: `url(${HandShakeImg})` }}
        >
          <div className="w-full px-[4rem]">
            <div className="flex flex-col w-[50%]">
              <Text
                variant="h2"
                align="left"
                color="af-white"
                fontFamily="raleway"
                fontWeight="bold"
                customClassName="!text-[40px]"
              >
                How can we help you?
              </Text>
              <Text
                variant="h6"
                align="left"
                color="af-white"
                fontFamily="proxima-nova"
                fontWeight="regular"
                customClassName="!text-[24px] my-4"
              >
                Need to make an inquiry? Reach out to us today and let’s discuss
                how we can support your organization.
              </Text>
              <div>
                <Button
                  variant="secondary"
                  label="Contact Us"
                  onClick={openConsultationModal}
                  customClassName="border-white text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { AccordionSection };
