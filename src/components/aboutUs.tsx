import { AboutUsLinkBg, AboutUsLinkBgMbl } from "../assets";
import { Text, Button } from "../ui";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";

const AboutUs = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 768px)");

  return (
    <div className="w-full">
      <div
        className=" w-full h-[325px] bg-cover bg-no-repeat bg-center flex justify-between items-center px-[4rem] mmd:h-auto mmd:flex-col mmd:justify-start mmd:gap-10 mmd:py-16 msm:px-8 mxs:px-4 mxs:py-10"
        style={{
          backgroundImage: `url(${
            isSmallDevice ? AboutUsLinkBgMbl : AboutUsLinkBg
          })`,
        }}
      >
        <div className="w-[50%] mmd:w-full">
          <Text
            variant="h2"
            align="left"
            color="af-white"
            fontFamily="raleway"
            fontWeight="semi-bold"
            customClassName="text-[40px] mxs:text-[30px]"
          >
            Our Way
          </Text>
          <Text
            variant="h6"
            align="left"
            color="af-white"
            fontFamily="proxima-nova"
            fontWeight="regular"
            customClassName="text-[24px] !mxs:text-[16px]"
          >
            Here's why we are the best provider for your IT governance, risk,
            and compliance solutions.
          </Text>
        </div>
        <div className="w-[30%] flex justify-center items-center mmlg:w-[40%] mmd:w-full mmd:justify-start">
          <Link to="/about-us">
            <Button
              variant="secondary"
              label="About Us"
              customClassName="border-white text-white"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
