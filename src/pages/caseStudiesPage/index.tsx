import { motion } from "framer-motion";
import { useState } from "react";
import { Outlet, Text } from "../../ui";
import { Button } from "../../ui";
import { caseStudy } from "./caseStudy.ts";
import { Link } from "react-router-dom";
import { CallToAction } from "../../components/callToAction.tsx";

const caseStudyButtons = [
  "ALL",
  "PCI DSS",
  "ISO 27001 (ISMS)",
  "ISO 22301 (BCMS)",
];

interface Case {
  title: string;
  description: string;
  imgUrl: string;
  segment: string;
}

const CaseStudiesPage = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(
    caseStudyButtons[0]
  );

  const pciCases = caseStudy.filter((item: Case) => item.segment === "PCI DSS");
  const ismsCases = caseStudy.filter(
    (item: Case) => item.segment === "ISO 27001 (ISMS)"
  );
  const bcmsCases = caseStudy.filter(
    (item: Case) => item.segment === "ISO 22301 (BCMS)"
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <section className="h-[87.5vh] max-h-[1600px] bg-case-study bg-no-repeat bg-contain bg-bottom flex items-center justify-center flex-col overflow-hidden">
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
                variant={selectedCaseStudy === button ? "primary" : "tertiary"}
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

        <section className=" py-[120px] flex justify-center overflow-hidden">
          <div className="flex flex-wrap gap-x-[48px] gap-y-[120px] items-center w-full px-[80px]">
            {selectedCaseStudy === "ALL" &&
              caseStudy.map((study: Case, index: number) => {
                return (
                  <div
                    className="h-[504px] w-[30%] flex flex-col gap-[20px]"
                    key={index}
                  >
                    <div className="max-h-[200px] w-full">
                      <img
                        src={study.imgUrl}
                        alt="Case Study 1"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[18px]">
                      <Text
                        variant="h5"
                        align="left"
                        fontFamily="gambetta"
                        color="af-green"
                        customClassName="font-medium"
                      >
                        {study.title}
                      </Text>

                      <Text
                        variant="h5"
                        align="left"
                        fontFamily="proxima-nova"
                        color="af-dark-green"
                        customClassName="font-normal"
                      >
                        {study.description}
                      </Text>

                      <Link
                        to={`/case-studies/${study.title.split(' ').join('-').toLowerCase()}`}
                        className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}

            {selectedCaseStudy === "PCI DSS" &&
              pciCases.map((study: Case, index: number) => {
                return (
                  <div
                    className="h-[504px] w-[30%] flex flex-col gap-[20px]"
                    key={index}
                  >
                    <div className="max-h-[200px] w-full">
                      <img
                        src={study.imgUrl}
                        alt="Case Study 1"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[18px]">
                      <Text
                        variant="h5"
                        align="left"
                        fontFamily="gambetta"
                        color="af-green"
                        customClassName="font-medium"
                      >
                        {study.title}
                      </Text>

                      <Text
                        variant="h5"
                        align="left"
                        fontFamily="proxima-nova"
                        color="af-dark-green"
                        customClassName="font-normal"
                      >
                        {study.description}
                      </Text>

                      <Link
                        to={`/case-studies/${study.title.split(' ').join('-').toLowerCase()}`}
                        className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}

            {selectedCaseStudy === "ISO 27001 (ISMS)" &&
              ismsCases.map((study: Case, index: number) => {
                return (
                  <div
                    className="h-[504px] w-[30%] flex flex-col gap-[20px]"
                    key={index}
                  >
                    <div className="max-h-[200px] w-full">
                      <img
                        src={study.imgUrl}
                        alt="Case Study 1"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[18px]">
                      <Text
                        variant="h5"
                        align="left"
                        fontFamily="gambetta"
                        color="af-green"
                        customClassName="font-medium"
                      >
                        {study.title}
                      </Text>

                      <Text
                        variant="h5"
                        align="left"
                        fontFamily="proxima-nova"
                        color="af-dark-green"
                        customClassName="font-normal"
                      >
                        {study.description}
                      </Text>

                      <Link
                        to={`/case-studies/${study.title.split(' ').join('-').toLowerCase()}`}
                        className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}

            {selectedCaseStudy === "ISO 22301 (BCMS)" &&
              bcmsCases.map((study: Case, index: number) => {
                return (
                  <div
                    className="h-[504px] w-[30%] flex flex-col gap-[20px]"
                    key={index}
                  >
                    <div className="max-h-[200px] w-full">
                      <img
                        src={study.imgUrl}
                        alt="Case Study 1"
                        className="h-full w-full"
                      />
                    </div>
                    <div className="flex flex-col gap-[18px]">
                      <Text
                        variant="h5"
                        align="left"
                        fontFamily="gambetta"
                        color="af-green"
                        customClassName="font-medium"
                      >
                        {study.title}
                      </Text>

                      <Text
                        variant="h5"
                        align="left"
                        fontFamily="proxima-nova"
                        color="af-dark-green"
                        customClassName="font-normal"
                      >
                        {study.description}
                      </Text>

                      <Link
                        to={`/case-studies/${study.title.split(' ').join('-').toLowerCase()}`}
                        className="w-fit py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-center text-base h-auto font-proxima-nova font-regular bg-transparent border-[3px] border-afenoid-green text-afenoid-green hover:border-0 hover:bg-afenoid-lemon hover:text-afenoid-light-lemon hover:px-[2.6785rem] hover:py-[0.9875rem]"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </section>

        <CallToAction
          title="Ready to have a conversation with us?"
          explanation="Schedule a meeting with a consultant right away"
          button={
            <Button
              variant="primary"
              label="Book a Consultation"
              customClassName="mt-[2rem] mb-[150px]"
            />
          }
        />
      </Outlet>
    </motion.section>
  );
};

export { CaseStudiesPage };
