import { motion } from "framer-motion";
import { useState } from "react";
import { Outlet, Text } from "../../ui";
import { Button } from "../../ui";
import { caseStudy } from "./caseStudy.js";

const caseStudyButtons = [
  "ALL",
  "PCI DSS",
  "ISO 27001 (ISMS)",
  "ISO 22301 (BCMS)",
  "ISO 9001 (QMS)",
];

interface Case {
  title: string;
  description: string; 
  imgUrl: string,
  segment: string
}

const CaseStudiesPage = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(caseStudyButtons[0]);

  const pciCases = caseStudy.filter((item:Case) => item.segment === "PCI DSS")
  const ismsCases = caseStudy.filter((item:Case) => item.segment === "ISO 27001 (ISMS)")
  const bcmsCases = caseStudy.filter((item:Case) => item.segment === "ISO 22301 (BCMS)")
  const qmsCases = caseStudy.filter((item:Case) => item.segment === "ISO 9001 (QMS)")

  // const filteredCase = caseStudy.map(case => case.segment == selectedCaseStudy)

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Outlet>
        <section className="min-h-[70vh] bg-case-study bg-no-repeat bg-contain bg-bottom flex items-center justify-center flex-col border ">
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

        <section className="px-[110px] py-[120px] flex justify-center">
          <div className="flex flex-wrap gap-x-[48px] gap-y-[120px] justify-around items-center w-full">
            {selectedCaseStudy === "ALL" && caseStudy.map((study:Case, index:number) => {
              return (
                <div className="h-[504px] w-[350px] flex flex-col" key={index}>
                  <div className="h-[180px] w-full">
                    <img src={study.imgUrl} alt="Case Study 1" className="h-full"/>
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


            {selectedCaseStudy === "PCI DSS" && pciCases.map((study:Case, index:number) => {
              return (
                <div className="h-[504px] w-[350px] flex flex-col" key={index}>
                  <div className="h-[180px] w-full">
                    <img src={study.imgUrl} alt="Case Study 1" className="h-full"/>
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

            {selectedCaseStudy === "ISO 27001 (ISMS)" && ismsCases.map((study:Case, index:number) => {
              return (
                <div className="h-[504px] w-[350px] flex flex-col" key={index}>
                  <div className="h-[180px] w-full">
                    <img src={study.imgUrl} alt="Case Study 1" className="h-full"/>
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

            {selectedCaseStudy === "ISO 22301 (BCMS)" && bcmsCases.map((study:Case, index:number) => {
              return (
                <div className="h-[504px] w-[350px] flex flex-col" key={index}>
                  <div className="h-[180px] w-full">
                    <img src={study.imgUrl} alt="Case Study 1" className="h-full"/>
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

            {selectedCaseStudy === "ISO 9001 (QMS)" && qmsCases.map((study:Case, index:number) => {
              return (
                <div className="h-[504px] w-[350px] flex flex-col" key={index}>
                  <div className="h-[180px] w-full">
                    <img src={study.imgUrl} alt="Case Study 1" className="h-full"/>
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
