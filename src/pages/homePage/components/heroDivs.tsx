import React, { useEffect } from "react";
import { Button, Text } from "../../../ui";
import { ProtectionImg, ReliabilityImg } from "../../../assets";
import { IoCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroDivsProps {
  openModal: () => void;
}

const HeroDivs: React.FC<HeroDivsProps> = (props) => {
  const { openModal } = props;

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
            customClassName="text-[20px] msm:!text-[16px] font-regular"
          >
            We strengthen your organization by implementing proven security
            frameworks and industry standards. Our comprehensive approach
            addresses risks across your people, processes, and technology.
          </Text>
          <div>
            <Link to="/services">
              <Button label="Learn More" variant="primary" />
            </Link>
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
            We prioritize the reliability of digital systems, services, and
            transactions.
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
                  customClassName="first-letter:uppercase my-[1px] text-[20px] msm:!text-[16px] font-normal"
                >
                  {listItem}
                </Text>
              </li>
            ))}
          </ul>
          <div>
            <Button
              label="Schedule a Meeting"
              variant="primary"
              onClick={openModal}
            />
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
