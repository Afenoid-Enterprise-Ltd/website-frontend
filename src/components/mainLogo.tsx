import { MainLogoSVG } from "../assets";


const MainLogo = () => {
  return (
    <div>
      <img src={MainLogoSVG} alt="Logo" className="scale-y-[0.85]" />
    </div>
  );
}
 
export {MainLogo};