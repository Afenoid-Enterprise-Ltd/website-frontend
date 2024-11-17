import { useState } from "react";
import { Text } from "../../../ui";
import { Slogan } from "../../../components";
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
      <div className="w-full flex justify-center items-center gap-4 my-[2rem]">
        <button
          onClick={setToOne}
          className={` font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 1
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-lemon text-black"
          }`}
        >
          Overview
        </button>
        <button
          onClick={setToTwo}
          className={` font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 2
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-lemon text-black"
          }`}
        >
          Digital Trust Services
        </button>
        <button
          onClick={setToThree}
          className={` font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 3
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-lemon text-black"
          }`}
        >
          Digital Transformation Consulting
        </button>
        <button
          onClick={setToFour}
          className={` font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            activeTabId === 4
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-lemon text-black"
          }`}
        >
          Digital Skills Development
        </button>
      </div>

      <div>{renderContent()}</div>

      <Slogan>
        <div className="w-full h-auto bg-afenoid-light-grey p-[2rem]">
          <Text
            variant="body-reg"
            color="af-green"
            fontFamily="proxima-nova"
            customClassName="uppercase"
          >
            WE BELIEVE
          </Text>
          <Text
            variant="h2"
            color="af-green"
            fontFamily="gambetta"
            customClassName="text-[3rem]"
            fontWeight="light"
          >
            We mitigate enterprise weaknesses caused by practices, personnel and
            technologies.
          </Text>
        </div>
      </Slogan>
    </section>
  );
};

export { MainSection };
