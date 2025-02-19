import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Overview } from "./overview";
import { Auditing } from "./auditing";
import { Consulting } from "./consulting";
import { Training } from "./training";
import { RequestConsultation } from "../../../components";

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
        return <Auditing openModal={openContactModal} />;
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
    <section className="w-screen 2xl:w-full ">
      <div className=" py-8 w-full flex justify-center items-center gap-4 mb-[8rem] mlg:px-[3rem] mlg:overflow-x-auto mlg:justify-start mxs:mb-[4rem] no-scrollbar mmlg:hidden" 
        id={currentService}
      >
        <button
          onClick={() => handleNavigation("overview")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform tracking-[9%] hover:bg-afenoid-lemon hover:text-floral-white ${
            currentService === "overview"
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-grey text-afenoid-dark-green"
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => handleNavigation("consulting")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform tracking-[9%] hover:bg-afenoid-lemon hover:text-floral-white ${
            currentService === "consulting"
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-grey text-afenoid-dark-green"
          }`}
        >
          Digital Transformation Consulting
        </button>
        <button
          onClick={() => handleNavigation("auditing")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform tracking-[9%] hover:bg-afenoid-lemon hover:text-floral-white ${
            currentService === "auditing"
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-grey text-afenoid-dark-green"
          }`}
        >
          Digital Trust Services
        </button>
        <button
          onClick={() => handleNavigation("training")}
          className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform tracking-[9%] hover:bg-afenoid-lemon hover:text-floral-white ${
            currentService === "training"
              ? "bg-afenoid-green text-floral-white"
              : "bg-afenoid-light-grey text-afenoid-dark-green"
          }`}
        >
          Digital Skills Development
        </button>
      </div>
      <section>{renderContent()}</section>
      {isContactOpen && (
        <RequestConsultation isOpen={isContactOpen} onClose={closeContactModal} />
      )}
    </section>
  );
};

export { MainSection };
