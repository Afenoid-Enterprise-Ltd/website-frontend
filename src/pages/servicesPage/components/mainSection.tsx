import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Overview } from "./overview";
import { Auditing } from "./auditing";
import { Consulting } from "./consulting";
import { Training } from "./training";
import { ConsultationForm } from "../../../components";

const MainSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);

  const openContactModal = () => {
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  // Extract the current service from the hash
  const currentService = (() => {
    const hash = location.hash.replace("#", "");
    return hash || "overview";
  })();

  // Render content based on the current tab
  const renderContent = () => {
    switch (currentService) {
      case "consulting":
        return <Consulting openModal={openContactModal} />;
      case "auditing":
        return <Auditing openModal={openContactModal}/>;
      case "training":
        return <Training openModal={openContactModal} />;
      default:
        return <Overview />;
    }
  };

  // Button click handlers to update the URL with hash
  const handleNavigation = (tab: string) => {
    navigate(`/services#${tab}`);
  };

  return (
    <section className="w-screen">
      <div className="bg-afenoid-light-grey py-8 w-full flex justify-center items-center gap-4 mb-[8rem] mlg:px-[3rem] mlg:overflow-x-auto mlg:justify-start no-scrollbar ">
        <button
          onClick={() => handleNavigation("overview")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            currentService === "overview"
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => handleNavigation("consulting")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            currentService === "consulting"
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          Consulting
        </button>
        <button
          onClick={() => handleNavigation("auditing")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            currentService === "auditing"
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          Auditing
        </button>
        <button
          onClick={() => handleNavigation("training")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
            currentService === "training"
              ? "bg-afenoid-green text-floral-white"
              : "bg-white text-black"
          }`}
        >
          Training
        </button>
      </div>
      <section>{renderContent()}</section>
      {isContactOpen && (
        <ConsultationForm
          isOpen={isContactOpen}
          onClose={closeContactModal}
        />
      )}
    </section>
  );
};

export { MainSection };
