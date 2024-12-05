import React, { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Text, Button } from "../../../ui";
import { HomeHeroImage } from "../../../assets";
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
    <section className="w-screen h-[87.5vh] relative flex items-center overflow-x-hidden mmlg:flex-col">
      <div className="flex justify-between items-center px-[5rem] mmlg:flex-col msm:px-[3rem]">
        <div className="w-1/2 mmlg:w-full mmd:pt-[3.5rem] msm:pt-[1rem]">
          <div className="w-[95%]">
            <Text
              variant="body-reg"
              color="af-dark-green"
              fontWeight="medium"
              align="left"
              fontFamily="gambetta"
              customClassName="mb-6 text-[3.375rem] mmlg:text-h4 mmlg:text-center msm:text-h5"
            >
              Strengthening organizations,
              <br /> Equipping professionals.
            </Text>
            <Text
              variant="body-reg"
              fontFamily="gambetta"
              color="af-dark-green"
              fontWeight="light"
              align="left"
              customClassName="font-regular mb-6 text-[1.75rem] mmlg:hidden"
            >
              We protect what matters most—your{" "}
              <span className="italic font-gambetta">people</span>, your<br />{" "}
              <span className="italic font-gambetta">processes</span> and the{" "}
              <span className="italic font-gambetta">technology</span> that drives them.
            </Text>
            <Button
              variant="primary"
              label="Book a Consultaion"
              customClassName="mb-6 mmlg:hidden"
              onClick={openModal}
            />
          </div>
        </div>
        <div className="w-1/2 mmlg:w-full mmd:px-4">
          <img src={HomeHeroImage} alt="Hero Image" />
        </div>
      </div>

      <div>
        {isSmallDevice ? (
          <div className="flex flex-col px-[5rem] msm:px-[3rem]">
            <Text
              variant="h4"
              fontFamily="proxima-nova"
              color="af-dark-green"
              fontWeight="medium"
              align="center"
              customClassName="mt-6 "
            >
              Protect what matters. Safeguard your people, processes and your
              technologies.
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
