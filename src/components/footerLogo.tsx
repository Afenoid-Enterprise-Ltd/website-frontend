import React from "react";
import { FooterLogoSVG } from "../assets";

interface FooterlogoProps {
  customClassName: string;
  mblHeight?: number;
  mblWidth?: number;
}

const FooterLogo: React.FC<FooterlogoProps> = ({customClassName, mblHeight, mblWidth}) => {
  return (
    <div className={customClassName}>
      <img src={FooterLogoSVG} alt="Logo" width={mblWidth} height={mblHeight} loading="lazy"/>
    </div>
  );
}
 
export {FooterLogo};