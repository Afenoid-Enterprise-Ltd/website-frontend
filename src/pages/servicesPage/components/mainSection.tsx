import { useState } from "react";
import { Overview } from "./overview";
import { TrustServices } from "./trustServices";
import { TransformationConsulting } from "./transformationConsulting";
import { SkillsDevelopment } from "./skillsDevelopment";

const MainSection = () => {
  const [activeTabId, setActiveTabId] = useState<number>(1);

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
        return <Overview />;
      case 2:
        return <TrustServices />;
      case 3:
        return <TransformationConsulting />;
      case 4:
        return <SkillsDevelopment />;
      default:
        return <Overview />;
    }
  };

  return (
    <section>
      <div className="w-full flex justify-center items-center gap-4 mt-[2rem] mb-[8rem]">
        <button
          onClick={setToOne}
          className={` font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 1
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-grey text-black"
          }`}
        >
          Overview
        </button>
        <button
          onClick={setToTwo}
          className={` font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 2
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-grey text-black"
          }`}
        >
          Digital Trust Services
        </button>
        <button
          onClick={setToThree}
          className={` font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 3
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-grey text-black"
          }`}
        >
          Digital Transformation Consulting
        </button>
        <button
          onClick={setToFour}
          className={` font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 4
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-grey text-black"
          }`}
        >
          Digital Skills Development
        </button>
      </div>

      <div>{renderContent()}</div>
    </section>
  );
};

export { MainSection };
