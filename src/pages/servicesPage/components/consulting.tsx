import React from "react";
import { LearnMoreDiv } from "./learnMoreDiv";
import { ServicesImg1 } from "../../../assets";
import { Accordion, AccordionItem, ScheduleMeeting, } from "../../../components";
import { Text, } from "../../../ui";

interface ConsultingProps {
  openModal: () => void
}

const Consulting: React.FC<ConsultingProps> = (props) => {
  const {openModal} = props;

  const dataItem = {
    heroTexts: {
      caption: "",
      title: "Digital Transformation Consulting",
      description:
        "Our digital transformation consulting services help to leverage digital technologies, tools, and platforms needful to transform your business operations and processes, improve performance and drive growth.",
    },
    image: ServicesImg1,
  };

  return (
    <section>
      <div className="px-[15rem] mxxl:px-[10rem] mxl:px-[5rem] msm:px-[3rem] mxs:px-4">
        <LearnMoreDiv
          heroTexts={dataItem.heroTexts}
          image={dataItem.image}
        />
      </div>

      <div className="w-[80%] mx-auto my-[8rem] px-[3rem] flex flex-col justify-center items-center mxs:px-4">
        <Text
          variant="h2"
          fontFamily="gambetta"
          align="center"
          color="af-dark-green"
          fontWeight="medium"
        >
          Future-Ready Security
        </Text>
        <div className="w-[60%] flex justify-center items-center mxs:w-full">
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            align="center"
            color="af-dark-green"
            fontWeight="light"
            customClassName=""
          >
            Implement sustainable security practices that protect your
            organization today while preparing for tomorrow's challenges.
          </Text>
        </div>
      </div>
      <div className="px-[10rem] py-[5rem] mxl:px-[5rem] msm:p-[3rem] mxs:px-4">
        <Accordion>
          <AccordionItem
            value="1"
            trigger="Digital strategy development"
            mainFontType="gambetta"
            minorFontType="proxima-nova"
          >
            We serve as your digital strategy partner. A digital strategy is a
            plan of action for using digital technologies, tools, and platforms
            to achieve specific business objectives. It outlines the steps an
            organization will take to optimize its digital presence, engage with
            customers and stakeholders, and achieve its goals.
            <br />
            <br />A digital strategy typically includes the following elements:
            <ul className="list-disc">
              <li className="ml-6">
                Analysis of your organization's current digital capabilities and
                performance
              </li>
              <li className="ml-6">
                Identification of your organization's target audience and goals
                for digital engagement
              </li>
              <li className="ml-6">
                Selection of the digital platforms and tools that will be used
                to reach the target audience and achieve the goals
              </li>
              <li className="ml-6">
                Development of a content and engagement plan to be executed on
                the selected platforms and tools
              </li>
              <li className="ml-6">
                Implementation of programs and projects--tactics and actions--to
                narrow the gaps between the desired state and the current state
                while minimising value leakages and eliminating imbalance in
                digital portfolios.
              </li>
              <li className="ml-6">
                Measuring and analyzing the performance of the digital strategy
                and making adjustments as needed.
              </li>
            </ul>
            Review our resources for case studies
          </AccordionItem>
          <AccordionItem
            value="2"
            trigger="Design and Development of Governance and Management Systems"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            Every organization is unique, and their uniqueness influences their
            conditions and options. The purpose of an effective governance
            system is to create value for its stakeholders. The stakeholders are
            those who are delivering or realizing benefits, those who are the
            resources or providing resources, and those who are bearing or
            managing business risks.
            <br />
            <br />
            To realize value, there must be a healthy balance of benefit
            realization, risk optimisation and resource optimisation. We
            leverage the leading ISACA framework, COBIT, to design a tailored
            governance system for enterprises of any size. Our approach is
            holistic, dynamic, and simple. We interrogate the design factors to
            adapt COBIT for enterprise governance of information and technology.
            The design factors include enterprise strategy, enterprise goals,
            organizational pain points, risk profile, threat landscape,
            technology adoption strategy, solutions development methodology,
            role of IT, sourcing model for IT, compliance requirements and the
            enterprise size.
            <br />
            <br />
            We devise the following tailored capabilities to narrow the gap
            between thedesired state and current state of the organization:
            principles, policies, and procedures; services, infrastructure, and
            applications; culture, ethics, and behaviour; process work products;
            organizational structure; processes; people, skills, and
            competencies.
          </AccordionItem>
          <AccordionItem
            value="3"
            trigger="Digital Capability Assessments"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            Our team at Afenoid Enterprise Group seeks to understand the context
            of your organization to determine the strengths and weaknesses of
            the capabilities of your services, infrastructures, and
            applications, and identify opportunities for improvement.
            Furthermore, we provide a means of monitoring the effectiveness of
            the capability improvement initiatives over time.
            <br />
            <br />
            We have developed toolkits to aid self-assessment by an individual
            in the organization or by multiple individuals at an organisation
            with the ability to compare and average their results. Our
            knowledgeable consultants also provide independent facilitated
            assessment.
            <br />
            <br />
            The assessment exercise helps your organization to glean insights
            from answers to the following questions:
            <br />
            - Are we doing the right things?
            <br />
            - Are we doing them the right way?
            <br />
            - Are we getting them done well?
            <br />- Are we getting the benefits?
          </AccordionItem>
          <AccordionItem
            value="4"
            trigger="Risk Management Consulting"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            Risk management consulting service helps organizations to identify,
            assess, and manage IT risks, and to develop effective risk
            management strategies.
          </AccordionItem>
          <AccordionItem
            value="5"
            trigger="IT Security Consulting"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            This service helps organizations to protect their IT systems and
            data from cyber threats and ensure the security of their networks,
            applications, and data.
          </AccordionItem>
          <AccordionItem
            value="6"
            trigger="IT Audit & Assessment Consulting"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            This service helps organizations to evaluate their IT systems and
            processes and identify areas for improvement.
          </AccordionItem>
          <AccordionItem
            value="7"
            trigger="IT Policy and Procedure Consulting"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            This service helps organizations to develop and implement effective
            IT policies and procedures to ensure compliance and protect against
            risks.
          </AccordionItem>
          <AccordionItem
            value="8"
            trigger="Business continuity and disaster recovery consulting"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            This service helps organizations to plan for and respond to
            disruptions, ensure the availability of critical systems and data,
            and minimize the impact of disruptions on their operations.
          </AccordionItem>
          <AccordionItem
            value="9"
            trigger="Incident Response & Management Consulting"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            This service helps organizations to detect, respond to and recover
            from security incidents, and to minimize the impact of incidents on
            their operations.
          </AccordionItem>
          <AccordionItem
            value="10"
            trigger="Cloud Security Consulting"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            This service helps organizations to secure their cloud environment
            and protect their data and applications in the cloud.
          </AccordionItem>
          <AccordionItem
            value="11"
            trigger="Cybersecurity Maturity Assessment"
            mainFontType="gambetta "
            minorFontType="proxima-nova"
          >
            This service helps organizations to evaluate their cybersecurity
            posture and identify areas for improvement to better protect their
            data and systems.
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="px-[5rem] msm:px-6">
        <div className="my-24 mb-48">
          <ScheduleMeeting openModal={openModal}/>
        </div>
      </div>
    </section>
  );
};

export { Consulting };
