import {
  TrainingImg1,
  TrainingImg2,
  TrainingImg3,
  CaseStudyImg1,
  CaseStudyImg2,
  CaseStudyImg3,
  SkillsDevImg1,
  SkillsDevImg2
} from "../../../assets";
import { ReactNode } from "react";

// Define the type for a skill's item
type SkillItem = {
  icon: ReactNode; // ReactNode allows any valid React element
  benefit: string;
};

// Define the type for each skill
type Skill = {
  param: string;
  title: string;
  image: string; // or use `StaticImageData` if it's a static import
  subtitle: string;
  description: string;
  gains: SkillItem[];
  attendees: SkillItem[];
  expectation: string;
};

export const skillsData: Skill[] = [
  {
    param: "crisc",
    title: "Certified in Risk and Information Systems Control (CRISC)",
    image: TrainingImg3,
    subtitle: "Improving security requires skill development",
    description:
      "Certified in Risk and Information Systems Control (CRISC) is a globally recognized certification offered by ISACA, designed for professionals who manage enterprise IT risks and implement, monitor, and maintain information systems controls. It demonstrates a deep understanding of how IT risk impacts an organization and the ability to design effective control frameworks to mitigate those risks. * By the end of the training, you'll gain a solid understanding of IT risk management and control principles, preparing you for advanced roles in enterprise risk management. Take the next step in building your expertise and become a CRISC-certified professional today!",
    gains: [
      {
        icon: "GoOrganization",
        benefit: "Organization Governance",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "Risk Governance, Monitoring & Reporting",
      },
      {
        icon: "VscChecklist",
        benefit: "IT Risk Identification, Analysis & Evaluation",
      },
      {
        icon: "VscChecklist",
        benefit: "Risk Response and Mitigation",
      },
      {
        icon: "VscSync",
        benefit: "Post-implementation Review",
      },
      {
        icon: "VscTools",
        benefit: "Control Design & Implementation",
      },
    ],
    attendees: [
      { icon: "GoPeople", benefit: "IT Risk Managers" },
      { icon: "GoPeople", benefit: "Information Security Personnel" },
      { icon: "GoPeople", benefit: "Control and Compliance Managers" },
      { icon: "GoPeople", benefit: "IT Auditors & Governance Professionals" },
      { icon: "GoPeople", benefit: "Risk and Control Consultants" },
      { icon: "GoPeople", benefit: "Business and IT Leaders" },
    ],
    expectation: "ISACA"
  },
  {
    param: "federated-IT-service-management",
    title: "Federated IT Service Management (FitSM) Foundation Certification",
    image: CaseStudyImg2,
    subtitle:
      "Streamlining IT services begins with adopting practical solutions.",
    description:
      "The FitSM Foundation training course by APMG equips you with the essential knowledge and skills to implement lightweight, effective IT service management processes aligned with ISO/IEC 20000. Designed to simplify ITSM frameworks, this course provides practical tools to enhance service delivery, improve customer satisfaction, and ensure better alignment between IT services and business needs. * As organizations seek to streamline ITSM practices without compromising efficiency, this course offers a timely opportunity to explore FitSM’s core principles and practical applications. Participants will benefit from interactive discussions with industry experts and peers, fostering valuable insights and strategies for adopting a leaner approach to IT service management.",
    gains: [
      {
        icon: "GoOrganization",
        benefit: "IT Service Management",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "Core ITSM Process Standardization",
      },
      {
        icon: "VscChecklist",
        benefit: "Scalability and Flexibility",
      },
      {
        icon: "VscChecklist",
        benefit: "Enhanced Service Quality",
      },
      {
        icon: "GoShieldCheck",
        benefit: "Improved Collaboration",
      },
      {
        icon: "VscTools",
        benefit: "Quick Implementation",
      },
    ],
    attendees: [
      { icon: "GoPeople", benefit: "IT Service Managers" },
      { icon: "GoPeople", benefit: "IT Support Teams" },
      { icon: "GoPeople", benefit: "IT Project Managers" },
      { icon: "GoPeople", benefit: "IT Professionals Seeking Certification" },
      { icon: "GoPeople", benefit: "Organization Implementing ITSM" },
      { icon: "GoPeople", benefit: "Service Providers" },
    ],
    expectation: "APMG"
  },
  {
    param: "neuroscience-for-change",
    title: "Neuroscience for Change",
    image: SkillsDevImg1,
    subtitle: "Adapting to change begins with understanding the brain.",
    description:
      "The human brain, with its 100 billion neurons and 100 trillion connections, is a marvel of complexity. Yet, when faced with change, we are biologically wired to resist. The Neuroscience for Change training course by APMG empowers participants to understand and navigate this resistance by uncovering the brain's natural responses to change. * This course provides a unique, evidence-based framework grounded in neuroscience to help individuals and organizations embrace and thrive through change. By exploring the science behind how the brain processes uncertainty and reacts to high volumes of change, participants gain practical tools to manage transitions more effectively.",
    gains: [
      {
        icon: "GoOrganization",
        benefit: "Understanding Brain Science",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "Raising Conscious Awareness",
      },
      {
        icon: "VscChecklist",
        benefit: "Evidence-Based Frameworks",
      },
      {
        icon: "VscChecklist",
        benefit: "Overcoming Resistance",
      },
      {
        icon: "GoShieldCheck",
        benefit: "Thriving Through Change",
      },
      {
        icon: "VscTools",
        benefit: "Enhancing Change Outcomes",
      },
    ],
    attendees: [
      { icon: "GoPeople", benefit: "HR Professionals" },
      { icon: "GoPeople", benefit: "Leaders & Managers" },
      { icon: "GoPeople", benefit: "Change Practitioners" },
      { icon: "GoPeople", benefit: "Project Managers" },
      { icon: "GoPeople", benefit: "Coaches" },
      { icon: "GoPeople", benefit: "Staff applying to management roles" },
    ],
    expectation: "APMG"
  },
  {
    param: "business-relationship-management-professional",
    title: "Business Relationship Management Professional (BRMP)",
    image: CaseStudyImg1,
    subtitle: "Business relationships thrive through understanding and collaboration.",
    description:
      "Business Relationship Management (BRM) is both a philosophy and a capability designed to evolve organizational culture and foster collaborative partnerships. The BRM training course by APMG provides participants with the tools to drive limitless value across their organization by aligning business needs with service provider offerings. * Grounded in strategic principles, this course equips individuals to uncover and shape business demand, ensuring that the full value potential of products and services is realized. By understanding the core principles of BRM, participants gain practical strategies to enhance organizational effectiveness and build long-lasting, value-driven relationships.",
    gains: [
      {
        icon: "GoOrganization",
        benefit: "Business Relationship Management",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "Building Collaborative Partnerships",
      },
      {
        icon: "VscChecklist",
        benefit: "Driving Organizational Value",
      },
      {
        icon: "VscChecklist",
        benefit: "Aligning Business Needs with Service Delivery",
      },
      {
        icon: "GoShieldCheck",
        benefit: "Optimizing Business Outcomes",
      },
      {
        icon: "VscTools",
        benefit: "Strengthening Stakeholder Engagement",
      },
    ],
    attendees: [
      { icon: "GoPeople", benefit: "HR Professionals" },
      { icon: "GoPeople", benefit: "Business Relationship Managers" },
      { icon: "GoPeople", benefit: "IT Managers and Directors" },
      { icon: "GoPeople", benefit: "Account Managers" },
      { icon: "GoPeople", benefit: "Service Delivery Managers" },
      { icon: "GoPeople", benefit: "Strategy and Transformation Professionals" },
    ],
    expectation: "APMG"
  },
  {
    param: "apmg-change-management",
    title: "APMG Change Management",
    image: CaseStudyImg3,
    subtitle: "Embrace change with the right strategies.",
    description:
      "The business environment today is in constant flux. While change can be overwhelming, it also brings significant opportunities for growth and success. The APMG Change Management training course equips participants with the essential knowledge to understand and navigate the impact of change within organizations. * This course delves into the complexities of how change affects individuals, teams, and organizations, offering an evidence-based approach to managing change. Participants will explore how to address both the positive and negative outcomes of change, and learn strategies to minimize resistance and enhance productivity. By gaining practical tools to effectively manage transitions, participants are empowered to lead change initiatives that drive performance and achieve organizational goals.",
    gains: [
      {
        icon: "GoOrganization",
        benefit: "Navigate change with confidence",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "Address change impacts on teams and organizations",
      },
      {
        icon: "VscChecklist",
        benefit: "Minimize resistance and boost productivity",
      },
      {
        icon: "VscChecklist",
        benefit: "Turn change into opportunities for growth",
      },
      {
        icon: "GoShieldCheck",
        benefit: "Lead transitions with practical tools",
      },
      {
        icon: "VscTools",
        benefit: "Strengthening Stakeholder Engagement",
      },
    ],
    attendees: [
      { icon: "GoPeople", benefit: "HR Professionals driving organizational change" },
      { icon: "GoPeople", benefit: "Change Managers and Project Managers" },
      { icon: "GoPeople", benefit: "Team Leaders and Department Heads" },
      { icon: "GoPeople", benefit: "Individuals involved in transformation initiatives" },
      { icon: "GoPeople", benefit: "Business Analysts and Consultants" },
      { icon: "GoPeople", benefit: "Anyone managing or impacted by change" },
    ],
    expectation: "APMG"
  },
  {
    param: "dora-lead-manager",
    title: "Digital Operational Resilience Act (DORA)",
    image: SkillsDevImg2,
    subtitle: "Resilience and innovation starts with embracing regulatory change.",
    description:
      "The PECB Certified DORA Lead Manager training course equips you with the skills needed to lead and manage the implementation of digital operational resilience strategies within financial organizations, ensuring compliance with the European Union’s Digital Operational Resilience Act (DORA). * With DORA already on the horizon, this course provides a timely opportunity to deepen your understanding of its requirements and practical implications. It also offers a platform to engage with industry experts and peers, facilitating valuable discussions and the exchange of best practices for achieving digital operational resilience.",
    gains: [
      {
        icon: "GoOrganization",
        benefit: "Regulatory Landscape and Compliance Understanding",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "Developing Robust Frameworks and Plans",
      },
      {
        icon: "VscChecklist",
        benefit: "Enhancing Digital Operational Resilience",
      },
      {
        icon: "VscChecklist",
        benefit: "Stakeholder Management",
      },
      {
        icon: "GoShieldCheck",
        benefit: "ICT Risk Management",
      },
      {
        icon: "VscTools",
        benefit: "Tools and Methodologies Utilization",
      },
    ],
    attendees: [
      { icon: "GoPeople", benefit: "IT Risk Managers" },
      { icon: "GoPeople", benefit: "Compliance Officers" },
      { icon: "GoPeople", benefit: "ICT Security Specialists" },
      { icon: "GoPeople", benefit: "Operational Resilience Managers" },
      { icon: "GoPeople", benefit: "Third-Party Risk Managers" },
      { icon: "GoPeople", benefit: "Financial Institution Professionals" },
    ],
    expectation: "ISACA"
  },
  {
    param: "information-security-management-system",
    title: "Information Security Management System (ISMS) * ISO 27001: Safeguarding Information and Ensuring Security",
    image: TrainingImg1,
    subtitle: "Improving security requires skill development",
    description:
      "Our ISO 27001 training program offer two key paths: Lead Auditor and Lead Implementer. Whether you're looking to audit organizations or implement and manage an information security management system, we’ve got you covered. * By the end of training, you’ll have a strong foundation in ISO 27001 and the confidence to take on advanced roles in information security. Whether you aim to be a Lead Auditor ensuring compliance or a Lead Implementer driving security initiatives, we’re here to help you achieve your goals.",
    gains: [
      {
        icon: "GoOrganization",
        benefit: "ISMS Lead Implementer Course",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "ISMS Lead Auditor Course",
      },
      {
        icon: "VscChecklist",
        benefit: "EUnderstanding ISO/IEC 27001 Requirements, Risk Assessment and Treatment Methodologies",
      },
      {
        icon: "VscChecklist",
        benefit: "Understanding ISO/IEC 27001 Requirements, Planning and Conducting ISMS Audits",
      },
      {
        icon: "GoOrganization",
        benefit: "Developing ISMS Policies, Procedures, & Implementing Security Controls",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "Audit Techniques, Methods  Post-Audit Reporting and Follow-Up",
      },
      {
        icon: "GoShieldCheck",
        benefit: "Implementing Security Controls",
      },
      {
        icon: "VscTools",
        benefit: "Nonconformity Management and Corrective Actions",
      },
    ],
    attendees: [
      { icon: "GoPeople", benefit: "IT Managers and Security Personnels" },
      { icon: "GoPeople", benefit: "Auditors and Consultants specializing in information security" },
      { icon: "GoPeople", benefit: "Risk Managers and Compliance Officers " },
      { icon: "GoPeople", benefit: "Team Leaders managing ISMS implementation or audits" },
      { icon: "GoPeople", benefit: "Data Operation Officers (DPOs)" },
      { icon: "GoPeople", benefit: "Individuals aiming to advance their careers in information security" },
    ],
    expectation: "PECB"
  },
  {
    param: "business-continuity-management-system",
    title: "Business Continuity Management System (BCMS) * ISO 22301: Ensuring Resilience and Preparedness",
    image: TrainingImg2,
    subtitle: "Improving security requires skill development",
    description:
    "Our ISO 22301 training program offers two essential paths: Lead Auditor and Lead Implementer. Whether you want to audit organizations for business continuity or implement and manage a business continuity management system, we’ve got you covered. * By the end of the training, you’ll gain a solid understanding of ISO 22301 and the confidence to take on advanced roles in business continuity. Whether you aspire to be a Lead Auditor ensuring compliance or a Lead Implementer driving resilience initiatives, we’re here to help you achieve your goals.",
    gains: [
      {
        icon: "VscNotebook",
        benefit: "ISMS Lead Implementer Course",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "ISMS Lead Auditor Course",
      },
      {
        icon: "VscChecklist",
        benefit: "Establishing a Business Continuity Management System (BCMS)",
      },
      {
        icon: "VscChecklist",
        benefit: "Understanding BCMS Requirements",
      },
      {
        icon: "VscTools",
        benefit: "Risk Assessment and Treatment Methodologies",
      },
      {
        icon: "BsPersonWorkspace",
        benefit: "Planning and Conducting BCMS Audits",
      },
      {
        icon: "GoOrganization",
        benefit: "Developing Continuity Plans & Implementing Security Controls",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "Audit Techniques and Evidence Collection",
      },
    ],
    attendees: [
      { icon: "GoPeople", benefit: "Business Continuity Managers and Coordinators" },
      { icon: "GoPeople", benefit: "Auditors and Consultants specializing in business continuity" },
      { icon: "GoPeople", benefit: "Risk Managers and Compliance Officers" },
      { icon: "GoPeople", benefit: "Disaster Recovery and Emergency Planning Professionals" },
      { icon: "GoPeople", benefit: "Team Leaders overseeing BCMS implementation or audits" },
      { icon: "GoPeople", benefit: "Individuals aiming to strengthen their expertise in business continuity management" },
    ],
    expectation: "PECB"
  },
];
