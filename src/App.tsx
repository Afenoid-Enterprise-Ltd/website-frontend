import "./App.css";
import { Loader } from "./ui";
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";
import { ScrollToTop } from "./components";

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
const ContactUsPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ContactUsPage }))
);
const ServicesPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ServicesPage }))
);
const ServicesSkillsPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ServiceSkillsPage }))
);
const ResourcesPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ResourcesPage }))
);
const CaseStudiesPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.CaseStudiesPage }))
);
const CasesPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.CasesPage }))
);
const CareerPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.CareerPage }))
);
const TermsOfServicePage = lazy(() =>
  import("./pages").then((module) => ({ default: module.TermsOfServicePage }))
);
const PrivacyPolicyPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.PrivacyPolicyPage }))
);
const SitemapPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.SiteMapPage }))
);
const ConstructionPage = lazy(() =>
  import("./pages").then((module) => ({ default: module.ConstructionPage }))
);

function App() {
  const location = useLocation();

  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait" initial={false}>
          <ScrollToTop />
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:skills" element={<ServicesSkillsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:title" element={<CasesPage />} />
            <Route path="/careers" element={<CareerPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/under-construction" element={<ConstructionPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
        <Toaster richColors={true} position="top-right" expand={true} />
      </Suspense>
    </>
  );
}

export default App;
