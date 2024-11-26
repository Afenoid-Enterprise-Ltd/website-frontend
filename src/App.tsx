import "./App.css";
import { Loader } from "./ui";
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const HomePage = lazy(() =>
  import("./pages").then((module) => ({ default: module.HomePage }))
);
const ErrorPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ErrorPage }))
);
const ComponentsPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ComponentsPage }))
);
const AboutUsPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.AboutUsPage }))
);
const ServicesPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ServicesPage }))
);
const ResourcesPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ResourcesPage }))
);
const CaseStudiesPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.CaseStudiesPage }))
);

function App() {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait" initial = {false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:title" />
            <Route path="components" element={<ComponentsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes> 
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default App;
