import {useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ALLCASES } from "./allCases";
import { PCIDSS } from "./pcidss";
import { ISO27001 } from "./iso27001";
import { ISO22301 } from "./iso22301";

const MainSection = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const currentCaseStudy = (() => {
    const hash = location.hash.replace("#", "");
    return hash || "overview";
  })();

  useEffect(() => {
    if (isSmallDevice) {
      handleNavigation("pcidss");
    }
  }, [isSmallDevice]);

  const renderContent = () => {
    switch (currentCaseStudy) {
      case "pcidss":
        return <PCIDSS />;
      case "iso27001":
        return <ISO27001 />;
      case "iso22301":
        return <ISO22301 />;
      default:
        return <ALLCASES />;
    }
  };

  const handleNavigation = (tab: string) => {
    navigate(`/case-studies#${tab}`);
  };

  return (
    <section className="w-screen">
      <div className="bg-afenoid-light-grey py-8 w-full flex justify-center items-center gap-4 mb-[8rem] mlg:px-[3rem] mlg:overflow-x-auto msm:justify-start no-scrollbar mxl:justify-center">
        <button
          onClick={() => handleNavigation("overview")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white msm:hidden ${
            currentCaseStudy === "overview"
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          ALL
        </button>
        <button
          onClick={() => handleNavigation("pcidss")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            currentCaseStudy === "pcidss"
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          PCI DSS
        </button>
        <button
          onClick={() => handleNavigation("iso27001")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            currentCaseStudy === "iso27001"
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          ISO 27001
        </button>
        <button
          onClick={() => handleNavigation("iso22301")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            currentCaseStudy === "iso22301"
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          ISO 22301
        </button>
      </div>
      <section>{renderContent()}</section>
    </section>
  );
};

export { MainSection };
