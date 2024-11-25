import { useState } from "react";
import { Outlet, Text } from "../../ui";
import { Button } from "../../ui";
import {caseStudy} from "./caseStudy.js";


const caseStudyButtons = ['ALL', 'PCI DSS', 'ISO 27001 (ISMS)', 'ISO 22301 (BCMS)', 'ISO 9001 (QMS)']



const CaseStudiesPage = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState('');

  return (
    <Outlet>
      <section className="h-[70vh] bg-case-study bg-no-repeat bg-contain bg-bottom flex items-center justify-center flex-col border ">
        <Text
          variant="h1"
          align="center"
          fontWeight="medium"
          fontFamily="gambetta"
        >
          Security Success Stories
        </Text>
        <Text
          variant="h4"
          align="center"
          fontWeight="light"
          fontFamily="proxima-nova"
          customClassName="text-center w-[53%] mt-2"
        >
          Discover how organisations have transformed their security posture and
          achieved excellence with Afenoid's guidance.
        </Text>
      </section>

      <section className="bg-afenoid-light-grey h-[7.8rem] py-12 flex justify-center items-center gap-4">
        {caseStudyButtons.map((button, index) => {
          return <Button key={index} variant="tertiary" label={button} customClassName="text-light" onClick={()=> {
            setSelectedCaseStudy(button)
            console.log(caseStudy)
          }}/>
        })}
      </section>

      {/* <section>
        {caseStudy.map((study) => {
          return <h1>Hello World</h1>
        })}

      </section> */}
    </Outlet>
  );
};

export { CaseStudiesPage };
