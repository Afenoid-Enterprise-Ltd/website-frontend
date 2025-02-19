import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { MainLogo } from "./mainLogo";
import { Button, Text } from "../ui";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { ConsultationForm } from "./consultationForm";
import { GoArrowRight } from "react-icons/go";

const Navbar: React.FC = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 976px)");

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mblNavOpen, setMblNavOpen] = useState<boolean>(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openMblNav = () => {
    setMblNavOpen((prev) => !prev);
  };

  const closeMblNav = () => {
    setMblNavOpen(false);
  };

  useEffect(() => {
    if (mblNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mblNavOpen]);

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleHoverIn = (section: string) => {
    if (section === "Services" || section === "Case Studies") {
      setActiveDropdown(section);
    } else {
      setActiveDropdown(null);
    }
  };

  const handleHoverOut = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`w-full h-[10vh] bg-white flex items-center justify-between px-[5rem] sticky top-0 z-[999] max-h-[200px] py-6 ${
        scrollDetected && offset !== 0 ? "shadow-md py-10 mxxl:py-8" : ""
      } mmd:px-[3rem] mxs:px-[2rem] mxxs:px-4 mxxl:px-[3rem] mxxl:py-10`}
    >
      <Link to="/">
        <MainLogo />
      </Link>

      {!isSmallDevice ? (
        <div className="flex items-center justify-evenly gap-6">
          {navlinks.map((navlink, index) => {
            const linkText = navlink.link.split("/")[1];
            const isActive = name === linkText;

            return (
              <div
                className="relative"
                key={index}
                onMouseEnter={() => handleHoverIn(navlink.text)}
              >
                <Link
                  to={navlink.link}
                  className={`text-base font-proxima-nova transition ease-in-out delay-100 text-afenoid-dark-green tracking-[0.09rem] cursor-pointer duration-300 ${
                    isActive
                      ? "font-bold hover:scale-100"
                      : "hover:scale-[1.05] hover:text-afenoid-lemon"
                  }`}
                >
                  {navlink.text}
                </Link>
              </div>
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
      {activeDropdown && (
        <NavDropdown
          section={activeDropdown}
          mouseEnter={() => handleHoverIn(activeDropdown)}
          mouseLeave={handleHoverOut}
        />
      )}
      {isSmallDevice && (name === "services" || name === "case-studies") && (
        <MobileNavbarDropdown pageLocation={name} />
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
        <div className="flex flex-col items-center p-6 space-y-4 bg-white">
          {navlinks.map((navlink, index) => (
            <Link
              to={navlink.link}
              key={index}
              className="text-afenoid-dark-green font-proxima-nova"
              onClick={closeNav}
            >
              {navlink.text}
            </Link>
          ))}
          <div className="">
            <Button
              variant="primary"
              label="Contact Us"
              customClassName="font-light"
              onClick={openModal}
            />
          </div>
        </div>
      </div>
    </>
  );
};

interface NavdropdownProps {
  mouseEnter: () => void;
  mouseLeave: () => void;
  section: string;
}

export const NavDropdown: React.FC<NavdropdownProps> = (props) => {
  const { mouseEnter, mouseLeave, section } = props;
  const [isExiting, setIsExiting] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // When mouseLeave is triggered, start exit animation
    const handleExit = () => {
      setIsExiting(true);
      // Wait for animation to complete before removing from DOM
      setTimeout(() => {
        setShouldRender(false);
      }, 300); // Match this with your animation duration
    };

    if (!section) {
      handleExit();
    } else {
      setIsExiting(false);
      setShouldRender(true);
    }
  }, [section]);

  const servicesLinks = [
    { text: "Overview", route: "/services" },
    {
      text: "Digital Transformation Consulting",
      route: "/services#consulting",
    },
    { text: "Digital Trust Services", route: "/services#auditing" },
    { text: "Digital Skills Development", route: "/services#training" },
  ];

  const caseStudiesLinks = [
    { text: "All", route: "/case-studies" },
    {
      text: "Payment card industry data security standard (pci dss)",
      route: "/case-studies#pcidss",
    },
    { text: "isms (iso 27001)", route: "/case-studies#iso27001" },
    { text: "bcms (iso 22301)", route: "/case-studies#iso22301" },
  ];

  const renderContent = () => {
    switch (section) {
      case "Services":
        return (
          <div
            className="w-full flex justify-start gap-[25rem]
          "
          >
            <div className="w-[25%] flex flex-col gap-8">
              <Text
                variant="h3"
                fontFamily="raleway"
                align="left"
                fontWeight="medium"
                customClassName="!text-[1.5rem] leading-[1.4]"
              >
                We strengthen your organization by implementing proven security
                frameworks and industry standards. 
              </Text>
              <div>
                <Button
                  variant="primary"
                  label="Explore"
                  customClassName="font-light"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 w-[30%]">
              {servicesLinks.map((link, index) => (
                <div
                  key={index}
                  className={`opacity-0 translate-y-4 animate-fadeSlideIn`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={link.route}
                    className={`text-afenoid-dark-green hover:text-afenoid-lemon uppercase font-proxima-nova text-base flex justify-start items-center gap-4 ${
                      link.text === "Overview" ? "font-bold" : "font-normal"
                    }`}
                  >
                    {link.text}
                    <GoArrowRight size={25} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      case "Case Studies":
        return (
          <div className="w-full flex justify-start gap-[25rem]">
            <div className="w-[30%] flex flex-col gap-8">
              <Text
                variant="h3"
                fontFamily="raleway"
                align="left"
                fontWeight="medium"
                customClassName="!text-[1.5rem] leading-[1.4]"
              >
                Discover how organisations have transformed their security
                posture and achieved excellence with Afenoid's guidance.
              </Text>
              <div>
                <Button
                  variant="primary"
                  label="Explore"
                  customClassName="font-light"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 w-[30%]">
              {caseStudiesLinks.map((link, index) => (
                <div
                  key={index}
                  className={`opacity-0 translate-y-4 animate-fadeSlideIn`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={link.route}
                    className={`text-afenoid-dark-green hover:text-afenoid-lemon uppercase font-proxima-nova text-base flex justify-start items-center gap-4 ${
                      link.text === "All" ? "font-bold" : "font-normal"
                    }`}
                  >
                    {link.text}
                    <GoArrowRight size={25} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  if (!shouldRender) return null;

  return (
    <motion.nav
      className={`absolute left-0 top-[10vh] z-[998] bg-white w-full px-[5rem] mmd:px-[3rem] mxs:px-[2rem] mxxs:px-4 mxxl:px-[3rem] py-20 flex justify-start items-center border-t-2 border-gray-500 overflow-hidden transition-all duration-300 ease-out origin-top
      ${
        isExiting
          ? "animate-dropdownSlideUp opacity-0 translate-y-4"
          : "animate-dropdownSlideDown opacity-100"
      }`}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      {renderContent()}
    </motion.nav>
  );
};

interface MobileNavbarDropdownProps {
  pageLocation: string;
}

export const MobileNavbarDropdown: React.FC<MobileNavbarDropdownProps> = (
  props
) => {
  const { pageLocation } = props;

  const { hash } = useLocation();
  let name = hash.split("#")[1];

  const servicesTab = [
    { text: "Overview", route: "/services" },
    {
      text: "Digital Transformation Consulting",
      route: "/services#consulting",
    },
    { text: "Digital Trust Services", route: "/services#auditing" },
    { text: "Digital Skills Development", route: "/services#training" },
  ];

  const caseStudiesTab = [
    {
      text: "pci dss",
      route: "/case-studies#pcidss",
    },
    { text: "iso 27001", route: "/case-studies#iso27001" },
    { text: "iso 22301", route: "/case-studies#iso22301" },
  ];

  const [subMenuArr, setSubMenuArr] = useState<typeof servicesTab | null>(null);

  useEffect(() => {
    if (pageLocation === "services") {
      setSubMenuArr(servicesTab);
    } else if (pageLocation === "case-studies") {
      setSubMenuArr(caseStudiesTab);
    } else {
      setSubMenuArr(null);
    }
  }, [pageLocation]);

  return (
    <nav className="w-screen 2xl:w-full py-4 mmd:px-[3rem] mxs:px-[2rem] mxxs:px-4 mxxl:px-[3rem]">
      <div className="w-full flex justify-start items-center gap-8 overflow-x-auto no-scrollbar">
        {subMenuArr?.map((item, index) => {
          const routeText = item.route.split("#")[1];
          const isActive = name === routeText;

          return (
            <div
              className={`${
                isActive
                  ? "border-b-4 border-afenoid-green p-1 transform"
                  : "border-none"
              }`}
            >
              <Link
                key={index}
                to={item.route}
                className={`block text-nowrap font-proxima-nova text-[10px] uppercase transition-all duration-300 ease ${
                  isActive
                    ? "font-bold scale-102 text-afenoid-green"
                    : "font-normal text-afenoid-dark-green"
                }`}
              >
                {item.text}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};
