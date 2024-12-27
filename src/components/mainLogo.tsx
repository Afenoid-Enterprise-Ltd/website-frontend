import { useState, useEffect } from "react";
import { MainLogoSVG } from "../assets";

const MainLogo = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <img
        src={MainLogoSVG}
        alt="Logo"
        width={screenWidth <= 425 ? 90 : 120}
        loading="lazy"
      />
    </div>
  );
};

export { MainLogo };
