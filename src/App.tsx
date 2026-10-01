import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QuoteProvider } from './context/QuoteContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { MobileStickyBar } from './components/common/MobileStickyBar';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { QuoteModal } from './components/common/QuoteModal';
import { ScrollToTop } from './components/common/ScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SolutionsPage } from './pages/SolutionsPage';
import { ResidentialSolarPage } from './pages/ResidentialSolarPage';
import { CommercialSolarPage } from './pages/CommercialSolarPage';
import { IndustrialSolarPage } from './pages/IndustrialSolarPage';
import { BatteryPage } from './pages/BatteryPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { SubsidyFinancePage } from './pages/SubsidyFinancePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { LucknowSeoPage } from './pages/LucknowSeoPage';

export function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-500 selection:text-white pb-16 lg:pb-0">
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              
              {/* Solutions Routes */}
              <Route path="/solar-solutions" element={<SolutionsPage />} />
              <Route path="/residential-solar" element={<ResidentialSolarPage />} />
              <Route path="/commercial-solar" element={<CommercialSolarPage />} />
              <Route path="/industrial-solar" element={<IndustrialSolarPage />} />
              <Route path="/battery-bess" element={<BatteryPage />} />

              {/* Products & Services */}
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/services" element={<ServicesPage />} />

              {/* Calculator & Subsidy */}
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/pm-surya-ghar" element={<SubsidyFinancePage />} />

              {/* Projects & Contact */}
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/contact" element={<ContactPage />} />

              {/* Dedicated SEO Landing Routes */}
              <Route path="/solar-company-lucknow" element={<LucknowSeoPage keywordFocus="lucknow-general" />} />
              <Route path="/5kw-solar-system" element={<LucknowSeoPage keywordFocus="5kw" />} />
              <Route path="/10kw-solar-system" element={<LucknowSeoPage keywordFocus="10kw" />} />
              <Route path="/solar-maintenance" element={<LucknowSeoPage keywordFocus="maintenance" />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          <Footer />

          {/* Floating UI Elements */}
          <MobileStickyBar />
          <WhatsAppButton />
          <QuoteModal />
        </div>
      </BrowserRouter>
    </QuoteProvider>
  );
}

export default App;
