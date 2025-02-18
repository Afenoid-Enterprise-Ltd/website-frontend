import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to the corresponding section
      const element = document.getElementById(hash.substring(1)); // Remove "#" and find element
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If no hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // Run effect when pathname or hash changes

  return null; // This component does not render anything
};

export {ScrollToTop};
