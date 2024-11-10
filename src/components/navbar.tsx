import React from "react";
import { MainLogo } from "./mainLogo";
import { Button } from "../ui";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const navlinks = [
    {text: "Home", link: "/"},
    {text: "Services", link: "/services"},
    {text: "Resources", link: "/resources"},
    {text: "About Us", link: "/about-us"},
    {text: "Case Studies", link: "/case-studies"},
  ];

  const location = useLocation();


  return (
    <nav className="bg-afenoid-white flex items-center justify-between px-[5rem] py-2 sticky top-0 ">
      <MainLogo/>
      
      <div className="flex items-center justify-evenly gap-6">
        {navlinks.map((navlink, index) => {

          const isActive = location.pathname === navlink.link

          return (<Link 
            to={navlink.link}
            key={index}
            className={`transition ease-in-out delay-100 text-afenoid-dark-green tracking-[0.09rem] cursor-pointer  duration-300 ${isActive ? "font-bold hover:scale-100" : "hover:scale-[1.05] hover:text-afenoid-lemon"}`}
          >
            {navlink.text}
          </Link>
)})}
        <Button variant="primary" label="Contact Us" customClassName="font-light"/>
      </div>
    </nav>
  );
}
 
export {Navbar};