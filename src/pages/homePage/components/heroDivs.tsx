import { useEffect } from "react";
import { Button, Text } from "../../../ui";
import { ProtectionImg, ReliabilityImg } from "../../../assets";
import { IoCheckmarkOutline } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroDivs = () => {
  const listItems = [
    {first: "D", second: "igital", third: " S", fourth: "trategy"},
    {first: "P", second: "erformance", third: "I", fourth: "mprovement"},
    {first: "C", second: "ompliance", third: "A", fourth: "ssurance"},
    {first: "C", second: "ompetence", third: "D", fourth: "evelopment"}
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
            fontFamily="raleway"
            align="left"
            fontWeight="medium"
            customClassName="msm:text-h4 text-[32px]"
          >
            Protect What Matters Most
          </Text>
          <div className="hidden mmd:block">
            <img src={ProtectionImg} alt="Accompanying Image" loading="lazy" />
          </div>
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            fontWeight="light"
            align="left"
            customClassName="text-[20px] font-regular"
          >
            We strengthen your organization by implementing proven security
            frameworks and industry standards. Our comprehensive approach
            addresses risks across your people, processes, and technology.
          </Text>
          <div>
            <Button label="Learn More" variant="secondary"/>
          </div>
        </div>
        <div className="w-1/2 mmd:hidden">
          <img src={ProtectionImg} alt="Accompanying Image" loading="lazy" />
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
            fontFamily="raleway"
            align="left"
            fontWeight="medium"
            customClassName="msm:text-h4 text-[32px]"
          >
            We prioritize the{" "}
            <span className="text-afenoid-lemon">security</span> and{" "}
            <span className="text-afenoid-lemon">reliability</span> of digital
            systems, services, and transactions.
          </Text>
          <div className="hidden mmd:block">
            <img src={ReliabilityImg} alt="Accompanying Image" loading="lazy" />
          </div>
          <ul>
            {listItems.map((listItem, index) => (
              <li className="flex justify-start items-center gap-4" key={index}>
                <IoCheckmarkOutline color="#76A62E" size={25} />
                <Text
                  variant="h5"
                  fontFamily="proxima-nova"
                  fontWeight="light"
                  align="left"
                  customClassName="uppercase my-[1px] text-[20px] font-normal"
                >
                  {listItem.first}<span className="text-[16px] font-normal">{listItem.second}</span> {listItem.third}<span className="text-[16px] font-normal">{listItem.fourth}</span>
                </Text>
              </li>
            ))}
          </ul>
          <div>
            <Button label="Schedule a Meeting" variant="secondary" />
          </div>
        </div>
        <div className="w-1/2 mmd:hidden">
          <img src={ReliabilityImg} alt="Accompanying Image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export { HeroDivs };
