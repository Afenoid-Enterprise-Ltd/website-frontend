import React from "react";
import { SkylineImg } from "../assets";

type SloganProps = {
  children: React.ReactNode;
};

const Slogan: React.FC<SloganProps> = ({ children }) => {
  return (
    <div className="w-screen 2xl:w-full">
      <div className="w-full">
        <img src={SkylineImg} alt="Skyline Pattern" className="w-full h-auto" loading="lazy"/>
      </div>

      {children}
    </div>
  );
};

export { Slogan };
