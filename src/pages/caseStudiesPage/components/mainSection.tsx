import { useState, useEffect } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ALLCASES } from "./allCases";
import { PCIDSS } from "./pcidss";
import { ISO27001 } from "./iso27001";
import { ISO22301 } from "./iso22301";

const MainSection = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const [activeTabId, setActiveTabId] = useState(isSmallDevice ? 2 : 1);

  useEffect(() => {
    if (isSmallDevice) {
      setActiveTabId(2);
    }
  }, [isSmallDevice]);

  const setToOne = () => {
    setActiveTabId(1);
  };

  const setToTwo = () => {
    setActiveTabId(2);
  };

  const setToThree = () => {
    setActiveTabId(3);
  };

  const setToFour = () => {
    setActiveTabId(4);
  };

  const renderContent = () => {
    switch (activeTabId) {
      case 1:
        return <ALLCASES />;
      case 2:
        return <PCIDSS />;
      case 3:
        return <ISO27001 />;
      case 4:
        return <ISO22301 />;
      default:
        return <ALLCASES />;
    }
  };

  return (
    <section className="w-screen">
      <div className="bg-afenoid-light-grey py-8 w-full flex justify-center items-center gap-4 mt-[2rem] mb-[8rem] mlg:px-[3rem] mlg:overflow-x-auto mlg:justify-start no-scrollbar">
        <button
          onClick={setToOne}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white msm:hidden ${
            activeTabId === 1
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          ALL
        </button>
        <button
          onClick={setToTwo}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 2
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          PCI DSS
        </button>
        <button
          onClick={setToThree}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 3
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          ISO 27001
        </button>
        <button
          onClick={setToFour}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 4
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          ISO 22301
        </button>
      </div>

      <section className="px-[110px] flex justify-center msm:px-6">
        <div className="flex flex-wrap gap-x-[48px] gap-y-[120px] justify-around items-center w-full max-w-[1440px]">
          {renderContent()}
        </div>
      </section>
    </section>
  );
};

export { MainSection };
