import React, { useState, useEffect } from "react";
import { MainLogo } from "./mainLogo";
import { Button } from "../ui";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ConsultationForm } from "./consultationForm";

const Navbar: React.FC = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const navlinks = [
    { text: "Home", link: "/" },
    { text: "Services", link: "/services" },
    { text: "Resources", link: "/resources" },
    { text: "About Us", link: "/about-us" },
    { text: "Case Studies", link: "/case-studies" },
  ];

  const { pathname } = useLocation();

  let name = pathname.split("/")[1];

  const [scrollDetected, setScrollDetected] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollDetected(true);
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [mblNavOpen, setMblNavOpen] = useState<boolean>(false);

  const openMblNav = () => {
    setMblNavOpen((prev) => !prev);
  };

  const closeMblNav = () => {
    setMblNavOpen(false);
  };

  return (
    <nav
      className={`w-full h-[12.5vh] bg-afenoid-white flex items-center justify-between px-[5rem] sticky top-0 z-[9999] ${
        scrollDetected && offset !== 0 ? "shadow-lg" : ""
      } mmd:px-[3rem] mxs:px-[2rem] mxxs:px-4`} 
    >
      <MainLogo />

      {!isSmallDevice ? (
        <div className="flex items-center justify-evenly gap-6">
          {navlinks.map((navlink, index) => {
            const linkText = navlink.link.split("/")[1];
            const isActive = name === linkText;

            return (
              <Link
                to={navlink.link}
                key={index}
                className={`font-proxima-nova transition ease-in-out delay-100 text-afenoid-dark-green tracking-[0.09rem] cursor-pointer duration-300 ${
                  isActive
                    ? "font-bold hover:scale-100"
                    : "hover:scale-[1.05] hover:text-afenoid-lemon"
                }`}
              >
                {navlink.text}
              </Link>
            );
          })}
          <Button
            variant="primary"
            label="Contact Us"
            customClassName="font-light"
            onClick={openModal}
          />
        </div>
      ) : (
        <>
          <button
            onClick={openMblNav}
            className="flex flex-col gap-2 border-none bg-transparent"
          >
            <span className="w-10 h-0.5 bg-afenoid-green"></span>
            <span className="w-10 h-0.5 bg-afenoid-green"></span>
            <span className="w-10 h-0.5 bg-afenoid-green"></span>
          </button>
          <MobileNavbar
            isOpen={mblNavOpen}
            navlinks={navlinks}
            closeNav={closeMblNav}
            openModal={openModal}
          />
        </>
      )}

      {isModalOpen && (
        <ConsultationForm isOpen={isModalOpen} onClose={closeModal} />
      )}
    </nav>
  );
};

export { Navbar };

interface MobileNavProps {
  isOpen: boolean;
  navlinks: { text: string; link: string }[];
  closeNav: () => void;
  openModal: () => void;
}

export const MobileNavbar: React.FC<MobileNavProps> = ({
  isOpen,
  navlinks,
  closeNav,
  openModal,
}) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const navElement = document.querySelector(".mobile-nav");
      if (navElement && !navElement.contains(event.target as Node)) {
        closeNav();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeNav]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[80] bg-black bg-opacity-50"
          onClick={closeNav}
        ></div>
      )}

      <div
        className={`mobile-nav fixed top-0 right-0 w-full h-[100vh] bg-white shadow-lg z-[100] transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end items-center p-4">
          <button
            onClick={closeNav}
            className="relative w-6 h-6 flex flex-col justify-center items-center mxxxs:w-2 mxxxs:h-2"
          >
            <span className="absolute w-6 h-0.5 bg-afenoid-green transform rotate-45"></span>
            <span className="absolute w-6 h-0.5 bg-afenoid-green transform -rotate-45"></span>
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-4 bg-white">
          {navlinks.map((navlink, index) => (
            <Link
              to={navlink.link}
              key={index}
              className="text-pastor-blue "
              onClick={closeNav}
            >
              {navlink.text}
            </Link>
          ))}
        </div>
        <div className="px-6">
          <Button
            variant="primary"
            label="Contact Us"
            customClassName="font-light"
            onClick={openModal}
          />
        </div>
      </div>
    </>
  );
};
