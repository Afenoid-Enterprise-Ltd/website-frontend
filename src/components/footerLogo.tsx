import React from "react";
import { FooterLogoSVG } from "../assets";

interface FooterlogoProps {
  customClassName: string
}

const FooterLogo: React.FC<FooterlogoProps> = ({customClassName}) => {
  return (
    <div className={customClassName}>
      <img src={FooterLogoSVG} alt="Logo" />
    </div>
  );
}
 
export {FooterLogo};