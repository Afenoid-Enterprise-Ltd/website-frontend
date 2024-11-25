import { useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Text, Button } from "../../../ui";
import { SkylineImg, HomeHeroImage } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="w-screen h-[90vh] relative overflow-x-hidden ">
      <div className="flex justify-between items-center px-[5rem] mmd:flex-col msm:px-[3rem]">
        <div className="w-1/2 mmd:w-full mmd:pt-[3.5rem]">
          <Text
            variant="h1"
            color="af-dark-green"
            fontWeight="medium"
            align="left"
            fontFamily="gambetta"
            customClassName="mb-6 mmd:text-h4 mmd:text-center"
          >
            Helping organizations to establish digital trust
          </Text>
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            color="af-dark-green"
            fontWeight="medium"
            align="left"
            customClassName="mb-6 mmd:hidden"
          >
            We help digital-age organisations to become more resilient and equip
            their professionals to become more competent.
          </Text>
          <Button
            variant="primary"
            label="Book a Consultaion"
            customClassName="mb-6 mmd:hidden"
          />
        </div>
        <div className="w-1/2 mmd:w-full mmd:px-4">
          <img src={HomeHeroImage} alt="Hero Image" className="scale-75 mmd:scale-100" />
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

      <div className="absolute bottom-0 left-0 w-screen overflow-x-auto">
        <img src={SkylineImg} alt="Skyline Pattern" className="w-full object-cover" />
      </div>
    </section>
  );
};

export { HeroSection };
