import { Text } from "../../../ui";
import { Link } from "react-router-dom";

const Home = () => {
  const data = [
    { title: "Book a Consultation", description: "", link: "" },
    { title: "Achievements", description: "", link: "" },
    { title: "Clients", description: "", link: "" },
    { title: "Values", description: "SWIFT Cybersecurity Framework", link: "" },
    {
      title: "Our Services",
      description: "APMG, ISACA, PCI SSC, SWIFT",
      link: "",
    },
    { title: "Our Services", description: "Consulting", link: "" },
    { title: "Our Services", description: "Auditing", link: "" },
    { title: "Our Services", description: "Training", link: "" },
    { title: "Case Studies", description: "", link: "" },
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
        Home
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
};

export { Home };