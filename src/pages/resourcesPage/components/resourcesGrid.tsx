import { CaseStudyCard } from "../../../components";

export const resources = [
    {
      title: "Information Security Management System (ISO 27001)",
      description: "We support skill development in IT governance, service management, risk management, information security, cybersecurity, data privacy, and auditing.",
      imgUrl: "https://res.cloudinary.com/prosper99/image/upload/v1738594621/Afenoid%20Project%20Images/resources-card1_cmxlz0.webp"
    },
    {
      title: "Business Continuity Management System (ISO 22301)",
      description: "Our training services help organizations leverage effective digital capabilities to stabilize, optimize, and improve business operations.",
      imgUrl: "https://res.cloudinary.com/prosper99/image/upload/v1738594621/Afenoid%20Project%20Images/resources-card2_ffxxo3.webp"
    },
    {
      title: "Certified in Risk and Information Systems Control (CRISC)",
      description: "The lack of digital trust can lead to a lack of adoption of digital technology, decreased productivity, lost business opportunities and value leakages.",
      imgUrl: "https://res.cloudinary.com/prosper99/image/upload/v1738594621/Afenoid%20Project%20Images/resources-card3_aqcsj6.webp",
    },
]

const ResourcesGrid = () => {
  return (
    <section className="grid grid-cols-3 gap-x-10 gap-y-20 px-[5rem] mxxl:grid-cols-3 msm:grid-cols-1 mmd:px-[3rem] mxs:p-4 mlg:grid-cols-2 mxxl:px-[3rem]">
      {resources.map((card, index) => (
        <CaseStudyCard
          key={index}
          image={card.imgUrl}
          title={card.title}
          description={card.description}
          optionalWidth={true}
        />
      ))}
    </section>
  );
};

export { ResourcesGrid };
