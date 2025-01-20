import { Text } from "../../../ui";
import { Link } from "react-router-dom";

const Resources = () => {
  const data = [
    { title: "Download Brochure", description: "Strengthening Security for a Regional Bank", link: "/resources" },
    { title: "Security Success Stories", description: "Implementation for Nigeria's Leading Bank", link: "/resources" },
    { title: "Articles", description: "Securing Data Centers for Co-Location Providers", link: "/resources" },
    { title: "Book a Consultation", description: "Strengthening Security for a Regional Bank", link: "/resources" },
  ];

  return (
    <section className="w-full mb-[5rem]">
      <Text
        variant="h2"
        fontFamily="gambetta"
        fontWeight="medium"
        color="af-green"
      >
        Resources
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

export { Resources };
