import { motion } from "framer-motion";
import { useState } from "react";
import { Outlet, Text } from "../../ui";
import { Button } from "../../ui";
import { caseStudy } from "./caseStudy.js";
import Image from "../../assets/Frame 981 (1).png";

const caseStudyButtons = [
  "ALL",
  "PCI DSS",
  "ISO 27001 (ISMS)",
  "ISO 22301 (BCMS)",
  "ISO 9001 (QMS)",
];

const CaseStudiesPage = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <section className="h-[70vh] bg-case-study bg-no-repeat bg-contain bg-bottom flex items-center justify-center flex-col border ">
          <Text
            variant="h1"
            align="center"
            fontWeight="medium"
            fontFamily="gambetta"
            color="af-dark-green"
          >
            Security Success Stories
          </Text>
          <Text
            variant="h4"
            align="center"
            fontWeight="light"
            fontFamily="proxima-nova"
            customClassName="text-center w-[53%] mt-2"
            color="af-dark-green"
          >
            Discover how organisations have transformed their security posture
            and achieved excellence with Afenoid's guidance.
          </Text>
        </section>

        <section className="bg-afenoid-light-grey h-[7.8rem] py-12 flex justify-center items-center gap-4">
          {caseStudyButtons.map((button, index) => {
            return (
              <Button
                key={index}
                variant="tertiary"
                label={button}
                customClassName="text-light"
                onClick={() => {
                  setSelectedCaseStudy(button);
                  console.log(caseStudy);
                }}
              />
            );
          })}
        </section>

        {/* grid grid-rows-3 grid-cols-3 gap-y-[120px] gap-x-[48px]*/}

        <section className="px[110px] py-[120px] flex justify-center">
          <div className="flex flex-wrap gap-x-[48px] gap-y-[120px] justify-center items-center w-full">
            {caseStudy.map((study: []) => {
              return (
                <div className="w-[350px]  flex flex-col">
                  <div className="h-[180px] w-full">
                    <img src={Image} alt="Case Study 1" />
                  </div>
                  <div className="flex flex-col gap-[18px]">
                    <Text
                      align="left"
                      fontFamily="gambetta"
                      fontWeight="light"
                      color="af-green"
                      customClassName="text-[20px]"
                    >
                      How ISMS compliance is influence corporate information
                    </Text>

                    <Text
                      align="left"
                      fontFamily="proxima-nova"
                      color="af-dark-green"
                    >
                      We support skill development in IT governance, service
                      management, risk management, information security,
                      cybersecurity, data privacy, and auditing.
                    </Text>

                    <Button
                      buttonType="button"
                      label="Learn More"
                      variant="secondary"
                      customClassName="w-fit"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Outlet>
    </motion.section>
  );
};

export { CaseStudiesPage };
