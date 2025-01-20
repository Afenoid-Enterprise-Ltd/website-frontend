import { Text } from "../../../ui";
import { Link } from "react-router-dom";


const Services = () => {
  const data = [
    { title: "Book a Consultation", description: "", link: "" },
    { title: "Overview", description: "Management System Standards", link: "" },
    { title: "Partners", description: "APMG, ISACA, PCI SSC, SWIFT", link: "" },
    {
      title: "Overview",
      description: "Courses: Business Continuity Managment System (ISO 22301)",
      link: "",
    },
    {
      title: "Overview",
      description:
        "Courses: Certified in Risk and Information Systems Control (CRISC)",
      link: "",
    },
    {
      title: "Overview",
      description:
        "Courses: Certified in Risk and Information Systems Control (CRISC)",
      link: "",
    },
    {
      title: "Consulting",
      description: "Digital strategy development",
      link: "",
    },
    {
      title: "Consulting",
      description:
        "Design and Development of Governance and Management Systems",
      link: "",
    },
    {
      title: "Consulting",
      description: "Digital Capability Assessments",
      link: "",
    },
    {
      title: "Consulting",
      description: "Risk Management Consulting",
      link: "",
    },
    {
      title: "Consulting",
      description: "IT Security Consulting",
      link: "",
    },
    {
      title: "Consulting",
      description: "IT Audit & Assessment Consulting",
      link: "",
    },
    {
      title: "Consulting",
      description: "IT Policy and Procedure Consulting",
      link: "",
    },
    {
      title: "Consulting",
      description: "Business continuity and disaster recovery consulting",
      link: "",
    },
    {
      title: "Consulting",
      description: "Incident Response & Management Consulting",
      link: "",
    },
    {
      title: "Consulting",
      description: "Cloud Security Consulting",
      link: "",
    },
    {
      title: "Consulting",
      description: "Cybersecurity Maturity Assessment",
      link: "",
    },
    
    { title: "Book a Consultation", description: "", link: "" },
  ];

  return (
    <section className="w-full mb-[5rem]">
      <Text
        variant="h2"
        fontFamily="gambetta"
        fontWeight="medium"
        color="af-green"
      >
        Services
      </Text>
      <div className="w-full grid grid-cols-3 gap-10 mt-[3rem] mmlg:grid-cols-2 msm:grid-cols-1">
        {data.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <Text
              variant="h3"
              fontFamily="gambetta"
              fontWeight="medium"
              color="af-green"
              customClassName=""
            >
              {item.title}
            </Text>
            <Link
              to={item.link}
              className="text-body-reg text-afenoid-green font-light font-proxima-nova"
            >
              {item.description}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Services };