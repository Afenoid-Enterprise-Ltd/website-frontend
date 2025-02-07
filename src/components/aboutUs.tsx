import { AboutUsLinkBg, AboutUsLinkBgMbl } from "../assets";
import { Text } from "../ui";
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
            Here's why we are the best provider for your IT governance,
            <br /> risk, and compliance solutions.
          </Text>
        </div>
        <div className="w-[30%] flex justify-center items-center mmlg:w-[40%] mmd:w-full mmd:justify-start">
          <Link to="/about-us">
            <button className="bg-afenoid-green/75 border-white border-[3px] py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-white text-center text-base h-auto w-auto font-proxima-nova font-normal transition delay-150 duration-300 ease-in-out  hover:bg-afenoid-lemon/75 hover:border-transparent mmlg:w-[80%] mxs:w-[90%]">
              About Us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
