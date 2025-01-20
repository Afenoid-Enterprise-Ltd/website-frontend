
import { Text } from "../../../ui";
import { Link } from "react-router-dom";

const CaseStudies = () => {

  const data = [
    { title: "PCI DSS", description: "Strengthening Security for a Regional Bank", link: "/case-studies" },
    { title: "PCI DSS", description: "Implementation for Nigeria's Leading Bank", link: "/case-studies" },
    { title: "PCI DSS", description: "Securing Data Centers for Co-Location Providers", link: "/case-studies" },
    { title: "ISO 27001 (ISMS)", description: "Strengthening Security for a Regional Bank", link: "/case-studies" },
    { title: "ISO 27001 (ISMS)", description: "Securing Sensitive Data for a Growing Fintech", link: "/case-studies" },
    { title: "ISO 27001 (ISMS)", description: "Protecting Data Centers for Co-Location Providers", link: "/case-studies" },
    { title: "ISO 22301 (BCMS)", description: "SImplementation for one of Nigeria's fastest growing Commercial Banks", link: "/case-studies" },
    { title: "ISO 22301 (BCMS)", description: "Operational Resilience for a technology Solutions provider", link: "/case-studies" },
    { title: "ISO 22301 (BCMS)", description: "Strengthening Business Continuity Through IT Standards and Frameworks", link: "/case-studies" },
  ];

  return (
    <section className="w-full mb-[5rem]">
       <Text
        variant="h2"
        fontFamily="gambetta"
        fontWeight="medium"
        color="af-green"
      >
        Case Studies
      </Text>
      <div className="w-full grid grid-cols-3 gap-10 mt-[3rem] mmlg:grid-cols-2 msm:grid-cols-1">
        {data.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <Text
              variant="h4"
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
}
 
export {CaseStudies};