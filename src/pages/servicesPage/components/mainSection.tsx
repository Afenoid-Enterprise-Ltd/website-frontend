import { useState } from "react";
import { Overview } from "./overview";
import { Auditing } from "./auditing";
import { Consulting } from "./consulting";
import { Training } from "./training";

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
        return <Consulting />;
      case 3:
        return <Auditing />;
      case 4:
        return <Training />;
      default:
        return <Overview />;
    }
  };

  return (
    <section className="w-screen">
      <div className="bg-afenoid-light-grey py-8 w-full flex justify-center items-center gap-4 mt-[2rem] mb-[8rem] mlg:px-[3rem] mlg:overflow-x-auto mlg:justify-start no-scrollbar">
        <button
          onClick={setToOne}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 1
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          Overview
        </button>
        <button
          onClick={setToTwo}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 3
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          Consulting
        </button>
        <button
          onClick={setToThree}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 2
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          Auditing
        </button>

        <button
          onClick={setToFour}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 4
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          Training
        </button>
      </div>

      <section>{renderContent()}</section>
    </section>
  );
};

export { MainSection };
