import { useEffect } from "react";
import { Text, Button } from "../../../ui";
import { SkylineImg, HomeHeroImage } from "../../../assets";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="w-screen h-[90vh] relative  ">
      <div className="flex justify-between items-center px-[5rem]">
        <div className="w-1/2">
          <Text
            variant="h1"
            color="af-dark-green"
            fontWeight="medium"
            align="left"
            fontFamily="gambetta"
            customClassName="mb-6"
          >
            Helping organizations to establish digital trust
          </Text>
          <Text
            variant="h5"
            fontFamily="proxima-nova"
            color="af-dark-green"
            fontWeight="medium"
            align="left"
            customClassName="mb-6"
          >
            We help digital-age organisations to become more resilient and equip
            their professionals to become more competent.
          </Text>
          <Button
            variant="primary"
            label="Book a Consultaion"
            customClassName="mb-6"
          />
        </div>
        <div
          className="w-1/2"
        >
          <img src={HomeHeroImage} alt="Hero Image" className="scale-75" />
        </div>
      </div>

      <div className="absolute bottom-0">
        <img src={SkylineImg} alt="Skyline Pattern" />
      </div>
    </section>
  );
};

export { HeroSection };
