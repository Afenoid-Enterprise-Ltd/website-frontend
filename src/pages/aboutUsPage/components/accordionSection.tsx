import { Link } from "react-router-dom";
import { Accordion, AccordionItem, ContactUs } from "../../../components";
import { Text } from "../../../ui";

const AccordionSection = () => {

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
            trigger="What management system, standards, and frameworks does Afenoid provide?"
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

      <section className="mmd:px-[3rem] mmd:my-[4rem] mxs:px-[1rem]">
        <ContactUs />
      </section>
    </div>
  );
};

export { AccordionSection };
