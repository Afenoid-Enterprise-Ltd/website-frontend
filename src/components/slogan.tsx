import React from "react";
import { SkylineImg } from "../assets";

type SloganProps = {
  children: React.ReactNode
}

const Slogan:React.FC<SloganProps> = ({children}) => {
  return ( 
    <div className="w-screen">
        <img src={SkylineImg} alt="Skyline Pattern" />
        {children}
      </div>
  );
}
 
export { Slogan };