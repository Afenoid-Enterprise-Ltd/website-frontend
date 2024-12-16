import { TrainingImg3 } from "../../../assets";
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
  attendees: SkillItem[]

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
        benefit: "Regulatory Landscape and Compliance Understanding",
      },
      {
        icon: "AiOutlineFileSearch",
        benefit: "Developing Robust Frameworks and Plans",
      },
      {
        icon: "GrTask",
        benefit: "Enhancing Digital Operational Resilience",
      },
      {
        icon: "GrTask",
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
      {icon: "MdOutlineGroups2", benefit: "Financial institutions executives"},
      {icon: "GoShieldCheck", benefit: "Stakeholder Management"},
      // {icon: "", benefit: ""},
      // {icon: "", benefit: ""},
      // {icon: "", benefit: ""},
      // {icon: "", benefit: ""},
    ]
  },
];
