import React, { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Text, Button } from "../../../ui";
import { HomeHeroImage } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

interface HeroSectionProps {
  openModal: () => void
}

const HeroSection:React.FC<HeroSectionProps> = (props) => {
  const {openModal} = props

  const isSmallDevice = useMediaQuery("only screen and (max-width : 976px)");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <section className="w-screen h-[87.5vh] relative flex items-center overflow-x-hidden mmlg:flex-col">
      <div className="flex justify-between items-center px-[5rem] mmlg:flex-col msm:px-[3rem]">
        <div className="w-1/2 mmlg:w-full mmd:pt-[3.5rem]">
          <Text
            variant="h1"
            color="af-dark-green"
            fontWeight="medium"
            align="left"
            fontFamily="gambetta"
            customClassName="mb-6 mmlg:text-h4 mmlg:text-center"
          >
            Helping organizations to establish digital trust
          </Text>
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            color="af-dark-green"
            fontWeight="medium"
            align="left"
            customClassName="mb-6 mmlg:hidden"
          >
            We help digital-age organisations to become more resilient and equip
            their professionals to become more competent.
          </Text>
          <Button
            variant="primary"
            label="Book a Consultaion"
            customClassName="mb-6 mmlg:hidden"
            onClick={openModal}
          />
        </div>
        <div className="w-1/2 mmlg:w-full mmd:px-4">
          <img
            src={HomeHeroImage}
            alt="Hero Image"
          />
        </div>
      </div>

      <div>
        {isSmallDevice ? (
          <div className="px-[5rem] msm:px-[3rem]">
            <Text
              variant="h4"
              fontFamily="proxima-nova"
              color="af-dark-green"
              fontWeight="medium"
              align="center"
              customClassName="mt-6 "
            >
              We help digital-age organisations to become more resilient and
              equip their professionals to become more competent.
            </Text>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};

export { HeroSection };
