import { useEffect } from "react";
import { Text } from "../../../ui";
import { ProtectionImg, ReliabilityImg } from "../../../assets";
import { IoCheckmarkOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroDivs = () => {

  const listItems = [
    "Digital Strategy",
    "Performance Improvement",
    "Compliance Assurance",
    "Competence Development",
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="flex flex-col gap-32 my-36">
      <div
        className="flex justify-between items-center gap-16"
        data-aos="fade-left"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="w-1/2 flex flex-col gap-4 mmd:w-full">
          <Text
            variant="h3"
            fontFamily="gambetta"
            align="left"
            fontWeight="medium"
          >
            Protect What Matters Most
          </Text>
          <div className="hidden mmd:block">
            <img src={ProtectionImg} alt="Accompanying Image" />
          </div>
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            fontWeight="light"
            align="left"
          >
            We strengthen your organization by implementing proven security
            frameworks and industry standards. Our comprehensive approach
            addresses risks across your practices, people, and technology.
          </Text>
          
        </div>
        <div className="w-1/2 mmd:hidden">
          <img src={ProtectionImg} alt="Accompanying Image" />
        </div>
      </div>
      <div
        className="flex flex-row-reverse justify-between items-center gap-16"
        data-aos="fade-right"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        <div className="w-1/2 flex flex-col gap-4 mmd:w-full">
          <Text
            variant="h3"
            fontFamily="gambetta"
            align="left"
            fontWeight="medium"
          >
            We prioritize the{" "}
            <span className="text-afenoid-lemon">security</span> and{" "}
            <span className="text-afenoid-lemon">reliability</span> of digital
            systems, services, and transactions.
          </Text>
          <div className="hidden mmd:block">
            <img src={ReliabilityImg} alt="Accompanying Image" />
          </div>
          <ul>
            {listItems.map((listItem, index) => (
              <li className="flex justify-start items-center gap-4" key={index}>
                <IoCheckmarkOutline color="#76A62E" size={25} />
                <Text
                  variant="h5"
                  fontFamily="gambetta"
                  fontWeight="semi-bold"
                  align="left"
                >
                  {listItem}
                </Text>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2 mmd:hidden">
          <img src={ReliabilityImg} alt="Accompanying IMage" />
        </div>
      </div>
    </div>
  );
};

export { HeroDivs };
