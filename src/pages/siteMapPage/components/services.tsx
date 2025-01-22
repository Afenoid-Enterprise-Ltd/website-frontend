import { Text } from "../../../ui";
import { Link } from "react-router-dom";

const Services = () => {
  const data = [
    { title: "Book a Consultation", description: "", link: "/services" },
    {
      title: "Overview",
      description: "Management System Standards",
      link: "/services",
    },
    {
      title: "Partners",
      description: "APMG, ISACA, PCI SSC, SWIFT",
      link: "/services",
    },
    {
      title: "Overview",
      description: "Courses: Business Continuity Managment System (ISO 22301)",
      link: "/services",
    },
    {
      title: "Overview",
      description:
        "Courses: Certified in Risk and Information Systems Control (CRISC)",
      link: "/services",
    },
    {
      title: "Overview",
      description:
        "Courses: Certified in Risk and Information Systems Control (CRISC)",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "Digital strategy development",
      link: "/services",
    },
    {
      title: "Consulting",
      description:
        "Design and Development of Governance and Management Systems",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "Digital Capability Assessments",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "Risk Management Consulting",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "IT Security Consulting",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "IT Audit & Assessment Consulting",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "IT Policy and Procedure Consulting",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "Business continuity and disaster recovery consulting",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "Incident Response & Management Consulting",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "Cloud Security Consulting",
      link: "/services",
    },
    {
      title: "Consulting",
      description: "Cybersecurity Maturity Assessment",
      link: "/services",
    },

    {
      title: "Auditing",
      description: "Compliance and Certification Readiness Consulting",
      link: "/services",
    },
    {
      title: "Auditing",
      description: "Payment Card Industry Data Security Standard",
      link: "/services",
    },
    {
      title: "Auditing",
      description: "Management System Standards",
      link: "/services",
    },
    {
      title: "Auditing",
      description: "SWIFT Customer Cybersecurity Framework",
      link: "/services",
    },
    { title: "Auditing", description: "SOC 2", link: "/services" },
    {
      title: "Auditing",
      description: "NIST Cybersecurity Framework",
      link: "/services",
    },
    {
      title: "Auditing",
      description: "Cybersecurity Maturity Model Certification (CMMC)",
      link: "/services",
    },
    {
      title: "Auditing",
      description: "General Data Protection Regulation (GDPR)",
      link: "/services",
    },
    {
      title: "Training",
      description: "Certified in Risk and Information Systems Control (CRISC)",
      link: "/services",
    },
    { title: "Training", description: "DORA Lead Manager", link: "/services" },
    {
      title: "Training",
      description:
        "Federated IT Service Management (FitSM) Foundation Certification",
      link: "/services",
    },
    {
      title: "Training",
      description: "Neuroscience for Change",
      link: "/services",
    },
    {
      title: "Training",
      description: "Business Relationship Management Professional (BRMP)",
      link: "/services",
    },
    {
      title: "Training",
      description: "APMG Change Management",
      link: "/services",
    },
    {
      title: "Training",
      description: "Business Continuity Management System (ISO 22301)",
      link: "/services",
    },
    {
      title: "Training",
      description: "Information Security Management System (ISO 27001)",
      link: "/services",
    },
    {
      title: "Training",
      description: "Service Management System (ISO 20000)",
      link: "/services",
    },
    { title: "Contact Us", description: "", link: "/services" },
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
