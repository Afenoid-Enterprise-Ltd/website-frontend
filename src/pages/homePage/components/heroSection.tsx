import React, { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Text, Button } from "../../../ui";
import { HomeHeroImg } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroSectionProps {
  openModal: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = (props) => {
  const { openModal } = props;

  const isSmallDevice = useMediaQuery("only screen and (max-width : 976px)");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      className="w-screen 2xl:w-full h-[90vh] bg-cover relative flex items-center overflow-x-hidden mmlg:flex-col"
      style={{ backgroundImage: `url(${HomeHeroImg})` }}
      data-aos="fade-up"
    >
      <div className="flex justify-between items-center px-[5rem] 2xl:w-full mmlg:flex-col msm:px-2 mxxl:px-[3rem]">
        <div className="w-1/2 2xl:w-[50%] mmlg:w-full  mmd:pt-[3.5rem] msm:pt-[2.5rem] msm:w-full">
          <div className="w-[95%] msm:w-full">
            <h1 className="text-[3rem] font-raleway text-white font-medium mb-6 mmlg:text-h4 mmlg:text-center msm:text-[1.5rem]">
              Strengthening organizations,
              <br /> Equipping professionals.
            </h1>
            <Text
              variant="h4"
              fontFamily="proxima-nova"
              color="af-white"
              fontWeight="light"
              align="left"
              customClassName="font-regular mb-6 text-[24px] mmlg:hidden msm:text-h6 mxxl:w-[98%]"
            >
              We protect what matters most—your people, your processes and the{" "}
              technology that drives them.
            </Text>
            <div className="flex justify-start items-center gap-7">
              <button
                className="bg-afenoid-green/75 border-white border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-white text-center text-base h-auto w-auto font-proxima-nova font-normal transition delay-150 duration-300 ease-in-out  hover:bg-afenoid-lemon/75 hover:border-transparent mmlg:hidden"
                onClick={openModal}
              >
                Schedule a Meeting
              </button>
              <button className="bg-transparent border-white border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-white text-center text-base h-auto w-auto font-proxima-nova font-normal transition delay-150 duration-300 ease-in-out mlg:hidden hover:bg-white hover:text-afenoid-lemon">
                Contact Us
              </button>
             
            </div>
          </div>
        </div>
      </div>

      <div>
        {isSmallDevice ? (
          <div className="flex flex-col px-[5rem] msm:px-6 gap-12">
            <Text
              variant="h4"
              fontFamily="proxima-nova"
              color="af-dark-green"
              fontWeight="light"
              align="center"
              customClassName="mt-10 w-full"
            >
              We protect what matters most—your people, your processes and the
              technology that drives them.
            </Text>
            <div className="my-4">
              <Button
                variant="primary"
                label="Book a Consultaion"
                customClassName="mx-auto"
                onClick={openModal}
              />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export { HeroSection };
