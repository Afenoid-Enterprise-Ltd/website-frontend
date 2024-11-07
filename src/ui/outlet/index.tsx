import React from "react";
import { Navbar, Footer } from "../../components";

interface OutletProps {
  children: React.ReactNode;
}

const Outlet:React.FC<OutletProps> = ({children}) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export { Outlet };
