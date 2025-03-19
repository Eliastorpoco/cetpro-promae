
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs";
import Courses from "./pages/Courses";
import TrainingOfferings from "./pages/TrainingOfferings";
import AulaVirtual from "./pages/AulaVirtual";
import News from "./pages/News";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

// Organization structured data for global SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "CETPRO PROMAE Magdalena",
  "url": "https://cetpro-promae.edu.pe",
  "logo": "https://cetpro-promae.edu.pe/favicon.png",
  "description": "Centro de Educación Técnico-Productiva PROMAE Magdalena. Ofrecemos formación técnica de calidad con cursos especializados para el mundo laboral actual.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jr. Cuzco 620",
    "addressLocality": "Magdalena del Mar",
    "addressRegion": "Lima",
    "postalCode": "15086",
    "addressCountry": "Perú"
  },
  "telephone": "+51 2627395",
  "sameAs": [
    "https://www.facebook.com/cetpro.promaemagdalena"
  ]
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Helmet>
      <title>CETPRO PROMAE Magdalena - Formación Técnica Profesional</title>
      <meta name="description" content="Centro de Educación Técnico-Productiva PROMAE Magdalena. Ofrecemos formación técnica de calidad con cursos especializados para el mundo laboral actual." />
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/nosotros" element={<AboutUs />} />
          <Route path="/cursos" element={<Courses />} />
          <Route path="/oferta-formativa" element={<TrainingOfferings />} />
          <Route path="/aula-virtual" element={<AulaVirtual />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/contacto" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
