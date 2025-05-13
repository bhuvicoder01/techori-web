import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ITSolutions from "./pages/IT Solution";
import WiFiSolutions from "./pages/WiFiSolutions";
import SaasProducts from "./pages/SaasProducts";
import RoboticsDevelopment from "./pages/robotics-development";
import WebAppDevelopment from "./pages/WebAppDevelopment";
import Terms from "./pages/terms";
import PrivacyPolicy from "./pages/privacy-policy";
import EnterpriseWebPortal from "./pages/EnterpriseWebPortal.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="/Wifi-solutions" element={<WiFiSolutions />} />
          <Route path="/it-solutions" element={<ITSolutions />} />
          <Route path="/saas-products" element={<SaasProducts />} />
          <Route path="/robotics-development" element={<RoboticsDevelopment />} />
          <Route path="/webapp-development" element={<WebAppDevelopment />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      
          <Route path="/EnterpriseWebPortal" element={<EnterpriseWebPortal />} /
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
