import { CaseStudyCard } from "../../../components";

export const resources = [
    {
      title: "Securing Fintech for Multi-Market Compliance",
      description: "A peer-to-peer payment fintech overcame data breach concerns and achieved ISO 27001 certification, strengthening security with advanced encryption, access controls, and third-party risk assessments.",
      imgUrl: "https://res.cloudinary.com/prosper99/image/upload/v1734077875/Afenoid%20Project%20Images/fintech3x_gz7yro.png"
    },
    {
      title: "Ensuring Resilience in Cryptocurrency Exchanges",
      description: "A cryptocurrency exchange adopted ISO 22301 to safeguard operations during cyberattacks and market volatility, achieving uninterrupted service and improved crisis management.",
      imgUrl: "https://res.cloudinary.com/prosper99/image/upload/v1734077879/Afenoid%20Project%20Images/resillience3x_hninvp.png"
    },
    {
      title: "Securing National Payment Transactions",
      description: "A payment switch provider implemented PCI DSS to encrypt transaction data and conduct regular scans, ensuring secure processing across financial institutions.",
      imgUrl: "https://res.cloudinary.com/prosper99/image/upload/v1734077876/Afenoid%20Project%20Images/nationalPayment3x_jkx3l0.png",
    },
]

const CaseStudiesGrid = () => {
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

export { CaseStudiesGrid };