import React from "react";
import { Navbar, Footer } from "../../components";

interface OutletProps {
  children: React.ReactNode;
}

const Outlet:React.FC<OutletProps> = ({children}) => {
  return (
    <section className="max-w-[2000px] mx-auto">
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export { Outlet };
