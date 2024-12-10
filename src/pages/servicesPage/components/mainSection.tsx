// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Overview } from "./overview";
// import { Auditing } from "./auditing";
// import { Consulting } from "./consulting";
// import { Training } from "./training";

// const MainSection = () => {
//   const { pathname } = useLocation();

//   const pathnameId = pathname.split("/")[1].split("#")[1];

//   const [activeTabId, setActiveTabId] = useState<number>(1);
//   const [linkId, setLinkId] = useState<string>("");

//   const setToOne = () => {
//     setActiveTabId(1);
//   };

//   const setToTwo = () => {
//     if (pathnameId === "consulting") {
//       setActiveTabId(2);
//       setLinkId("consulting");
//     } else {
//       setActiveTabId(1);
//     }
//   };

//   const setToThree = () => {
//     if (pathnameId === "auditing") {
//       setActiveTabId(3);
//       setLinkId("auditing");
//     } else {
//       setActiveTabId(1);
//     }
//   };

//   const setToFour = () => {
//     if (pathnameId === "training") {
//       setActiveTabId(4);
//       setLinkId("training");
//     } else {
//       setActiveTabId(1);
//     }
//   };

//   const renderContent = () => {
//     switch (activeTabId) {
//       case 1:
//         return <Overview />;
//       case 2:
//         return <Consulting />;
//       case 3:
//         return <Auditing />;
//       case 4:
//         return <Training />;
//       default:
//         return <Overview />;
//     }
//   };

//   return (
//     <section className="w-screen">
//       <div className="bg-afenoid-light-grey py-8 w-full flex justify-center items-center gap-4 mt-[2rem] mb-[8rem] mlg:px-[3rem] mlg:overflow-x-auto mlg:justify-start no-scrollbar">
//         <button
//           onClick={setToOne}
//           className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
//             activeTabId === 1
//               ? "bg-afenoid-green text-floral-white"
//               : "bg-white text-black"
//           }`}
//         >
//           Overview
//         </button>
//         <button
//           onClick={setToTwo}
//           className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
//             activeTabId === 2
//               ? "bg-afenoid-green text-floral-white"
//               : "bg-white text-black"
//           }`}
//         >
//           Consulting
//         </button>
//         <button
//           onClick={setToThree}
//           className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
//             activeTabId === 3
//               ? "bg-afenoid-green text-floral-white"
//               : "bg-white text-black"
//           }`}
//         >
//           Auditing
//         </button>

//         <button
//           onClick={setToFour}
//           className={`text-nowrap font-proxima-nova px-8 py-4 transition-all duration-300 ease-in-out transform hover:bg-afenoid-lemon hover:text-floral-white ${
//             activeTabId === 4
//               ? "bg-afenoid-green text-floral-white"
//               : "bg-white text-black"
//           }`}
//         >
//           Training
//         </button>
//       </div>

//       <section id={linkId}>{renderContent()}</section>
//     </section>
//   );
// };

// export { MainSection };

import { useLocation, useNavigate } from "react-router-dom";
import { Overview } from "./overview";
import { Auditing } from "./auditing";
import { Consulting } from "./consulting";
import { Training } from "./training";

const MainSection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the current service from the hash
  const currentService = (() => {
    const hash = location.hash.replace("#", "");
    return hash || "overview";
  })();

  // Render content based on the current tab
  const renderContent = () => {
    switch (currentService) {
      case "consulting":
        return <Consulting />;
      case "auditing":
        return <Auditing />;
      case "training":
        return <Training />;
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
      <div className="bg-afenoid-light-grey py-8 w-full flex justify-center items-center gap-4 mt-[2rem] mb-[8rem] mlg:px-[3rem] mlg:overflow-x-auto mlg:justify-start no-scrollbar">
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
    </section>
  );
};

export { MainSection };
