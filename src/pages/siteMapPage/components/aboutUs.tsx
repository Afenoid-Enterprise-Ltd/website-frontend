import { Text } from "../../../ui";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const data = [
    { title: "Our Mission", description: "", link: "/about-us/#mission" },
    { title: "Our Purpose", description: "", link: "/about-us/#purpose" },
    { title: "Our Story", description: "", link: "/about-us/#story" },
    { title: "Our Team", description: "", link: "/about-us/#team" },
    {
      title: "Values",
      description: "",
      link: "/about-us/#values",
    },
    { title: "FAQs", description: "", link: "/about-us/#faqs" },
  ];

  return (
    <section className="w-full mb-[5rem]">
      <Text
        variant="h2"
        fontFamily="gambetta"
        fontWeight="medium"
        color="af-green"
      >
        About Us
      </Text>
      <div className="w-full grid grid-cols-3 gap-10 mt-[3rem] mmlg:grid-cols-2 msm:grid-cols-1">
        {data.map((item, index) => (
          <div className="flex flex-col" key={index}>
            <Link to={item.link}>
              <Text
                variant="h4"
                fontFamily="gambetta"
                fontWeight="medium"
                color="af-green"
                customClassName=""
              >
                {item.title}
              </Text>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export { AboutUs };
