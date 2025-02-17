import React, { useEffect } from "react";
import { Text } from "../../../ui";
import { HomeHeroImg } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroSectionProps {
  openModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const { openModal } = props;

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      className="w-screen 2xl:w-full h-[90vh] bg-cover relative flex justify-start items-center overflow-x-hidden mmlg:flex-col mmlg:justify-center"
      style={{ backgroundImage: `url(${HomeHeroImg})` }}
      data-aos="fade-up"
    >
      <div className="flex justify-between items-center px-[5rem] 2xl:w-full mxxl:px-[3rem] mmlg:flex-col msm:px-4">
        <div className="w-1/2 2xl:w-[50%] mmlg:w-full mmd:pt-[3.5rem] msm:pt-[2.5rem] msm:w-full">
          <div className="w-[95%] msm:w-full">
            <h1 className="text-[3rem] font-raleway text-white font-medium mb-6 mmlg:text-[40px] mmlg:text-left msm:text-[28px] mxxss:text-[24px]">
              Strengthening organizations,
              <br /> Equipping professionals.
            </h1>
            <Text
              variant="h4"
              fontFamily="proxima-nova"
              color="af-white"
              fontWeight="light"
              align="left"
              customClassName="font-regular mb-6 text-[24px] msm:!text-[16px] mxxl:w-[98%]"
            >
              We protect what matters most—your people, your processes and the{" "}
              technology that drives them.
            </Text>
            <div className="flex justify-start items-center gap-7 mmlg:flex-col mmlg:items-start mmlg:w-[45%] mmd:w-[65%] mxs:w-[75%] ">
              <button
                className="bg-afenoid-green/75 border-white border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-white text-center text-base h-auto w-auto font-proxima-nova font-normal transition delay-150 duration-300 ease-in-out  hover:bg-afenoid-lemon/75 hover:border-transparent mmlg:w-[80%] mxs:w-[90%] mxs:text-[14px]"
                onClick={openModal}
              >
                Schedule a Meeting
              </button>
              <button className="bg-transparent border-white border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-white text-center text-base h-auto w-auto font-proxima-nova font-normal transition delay-150 duration-300 ease-in-out hover:bg-white hover:text-afenoid-lemon mmlg:w-[80%] mxs:w-[90%]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
