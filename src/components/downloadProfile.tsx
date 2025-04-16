import { Text } from "../ui";
import { useMediaQuery } from "@uidotdev/usehooks";
import { AboutUsDownloadProfileMbl, AboutUsDownloadProfile } from "../assets";

const DownloadProfile = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width: 639px)");

  return isSmallDevice ? (
    <MobileProfileDownload />
  ) : (
    <div className="px-[5rem] msm:p-[3rem] mxs:px-4">
      <div
        className="w-full h-[600px] bg-cover bg-no-repeat bg-center flex justify-start items-center my-[5rem] mmd:h-[400px]"
        style={{ backgroundImage: `url(${AboutUsDownloadProfile})` }}
      >
        <div className="w-full px-[4rem]">
          <div className="flex flex-col w-[50%] mlg:w-[70%] mmd:w-[85%] ">
            <Text
              variant="h2"
              align="left"
              color="af-white"
              fontFamily="raleway"
              fontWeight="bold"
              customClassName="text-[40px] mlg:!text-[32px] mmd:!text-[24px]"
            >
              Let’s Be Part of Your Journey Towards Resilience
            </Text>
            <Text
              variant="h6"
              align="left"
              color="af-white"
              fontFamily="proxima-nova"
              fontWeight="regular"
              customClassName="!text-[24px] mlg:!text-[16px] mmd:!text-[14px]  my-4"
            >
              Discover our service offerings and our approach in addressing
              risks across people, processes, and technology.
            </Text>
            <div className="flex justify-start items-center">
              <a href="">
                <button className="bg-transparent border-white border-[3px] text-white text-center py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-base h-auto w-auto font-proxima-nova font-normal mt-8 transition ease-in-out delay-150 duration-300 hover:bg-afenoid-lemon hover:border-afenoid-lemon">
                  Download Profile
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DownloadProfile };

export const MobileProfileDownload = () => {
  return (
    <div className="w-full p-[4rem] mxs:p-8">
      <div className="bg-afenoid-green p-[4rem] mxs:p-8">
        <Text
          variant="h2"
          align="left"
          color="af-white"
          fontFamily="raleway"
          fontWeight="semi-bold"
          customClassName="!text-[30px]"
        >
          Let’s Be Part of Your Journey Towards Resilience
        </Text>
        <Text
          variant="h6"
          align="left"
          color="af-white"
          fontFamily="proxima-nova"
          fontWeight="regular"
          customClassName="!text-[16px] mxxss:text-[14px] my-4"
        >
          Discover our service offerings and our approach in addressing risks
          across people, processes, and technology.
        </Text>
        <div className="flex justify-start items-center">
          <a href="">
            <button className="bg-transparent border-white border-[3px] text-white text-center py-[0.8rem] px-[2.5rem] flex justify-center items-center cursor-pointer text-base h-auto w-auto font-proxima-nova font-normal mt-8 transition ease-in-out delay-150 duration-300 hover:bg-afenoid-lemon hover:border-afenoid-lemon">
              Download Profile
            </button>
          </a>
        </div>
      </div>
      <div className="max-h-[300px] w-full overflow-hidden">
        <img src={AboutUsDownloadProfileMbl} alt="Download Profile Image" />
      </div>
    </div>
  );
};
