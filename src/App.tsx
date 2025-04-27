import { Toaster } from "./assets/components/ui/toaster";
import { Toaster as Sonner } from "./assets/components/ui/toaster";
import { TooltipProvider } from "./assets/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./assets/pages/Index";
import WordPredictor from "./assets/pages/WordPredictor";
import About from "./assets/pages/About";
import Documentation from "./assets/pages/Documentation";
import Contact from "./assets/pages/Contact";
import NotFound from "./assets/pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/word-predictor" element={<WordPredictor />} />
          <Route path="/about" element={<About />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
