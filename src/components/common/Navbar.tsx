import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Mail, 
  Menu, 
  X, 
  ChevronDown, 
  Sun, 
  Zap, 
  ShieldCheck, 
  FileText,
  Home,
  Building,
  Factory,
  BatteryCharging
} from 'lucide-react';
import { COMPANY_INFO } from '../../config/companyInfo';
import { getDirectWhatsAppUrl } from '../../utils/whatsappHelper';
import { useQuote } from '../../context/QuoteContext';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const { openQuoteModal } = useQuote();

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
    setProductsDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs transition-all">
      {/* Top Notification / Direct Contact Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="w-full max-w-[1500px] mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1.5 text-amber-400 font-medium">
              <Sun className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '12s' }} />
              Lucknow’s Trusted Solar EPC Partner
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <a 
              href={COMPANY_INFO.address.googleMapsUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              <MapPin className="w-3 h-3 text-amber-400" />
              <span>Chinhat, Lucknow</span>
            </a>
            <span className="hidden lg:inline-block text-slate-500">|</span>
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="hidden lg:flex items-center gap-1 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 ml-auto sm:ml-0">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-1.5 font-semibold text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>Call Now</span>
            </a>
            <a
              href={getDirectWhatsAppUrl()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-300 bg-emerald-950/80 hover:bg-emerald-900 px-2.5 py-1 rounded border border-emerald-700/50 transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-2 xl:gap-4">
          
          {/* Logo (Left, Fixed Shrink-0) */}
          <Link to="/" onClick={closeMenu} className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 p-0.5 shadow-md group-hover:scale-105 transition-transform flex items-center justify-center">
              <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center relative overflow-hidden">
                <Sun className="w-6 h-6 text-amber-400" />
                <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-emerald-500 rounded-full flex items-center justify-center">
                  <Zap className="w-2 h-2 text-white" />
                </div>
              </div>
            </div>
            <div className="leading-tight">
              <div className="flex items-center gap-1">
                <span className="font-extrabold text-lg sm:text-xl xl:text-2xl tracking-tight text-slate-900">
                  BARBARIC
                </span>
                <span className="font-extrabold text-lg sm:text-xl xl:text-2xl tracking-tight text-amber-500">
                  SOLUTION
                </span>
              </div>
              <p className="text-[9px] sm:text-[10px] xl:text-[11px] font-bold tracking-wider uppercase text-emerald-700 whitespace-nowrap">
                Complete Solar Energy Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links (Center, Evenly Justified, No Wrapping) */}
          <nav className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1.5 2xl:gap-2.5 flex-1 px-1 xl:px-3">
            <Link
              to="/"
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                isActive('/') ? 'text-amber-600 bg-amber-50 font-bold' : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                isActive('/about') ? 'text-amber-600 bg-amber-50 font-bold' : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              About Us
            </Link>

            {/* Solar Solutions Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  location.pathname.includes('solar') || location.pathname.includes('solutions')
                    ? 'text-amber-600 bg-amber-50 font-bold'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                <span>Solar Solutions</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solutionsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <Link
                    to="/solar-solutions"
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="block px-4 py-2.5 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 font-semibold"
                  >
                    All Solar Solutions
                  </Link>
                  <div className="h-px bg-slate-100 my-1"></div>
                  <Link
                    to="/residential-solar"
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    <Home className="w-4 h-4 text-amber-500" />
                    <span>Residential Solar</span>
                  </Link>
                  <Link
                    to="/commercial-solar"
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    <Building className="w-4 h-4 text-emerald-500" />
                    <span>Commercial Solar</span>
                  </Link>
                  <Link
                    to="/industrial-solar"
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    <Factory className="w-4 h-4 text-blue-500" />
                    <span>Industrial Solar EPC</span>
                  </Link>
                  <Link
                    to="/battery-bess"
                    onClick={() => setSolutionsDropdownOpen(false)}
                    className="flex items-center gap-2 px-4 py-2 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    <BatteryCharging className="w-4 h-4 text-purple-500" />
                    <span>Battery & BESS Storage</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div 
              className="relative shrink-0"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  location.pathname.startsWith('/products')
                    ? 'text-amber-600 bg-amber-50 font-bold'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                <span>Products</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${productsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 w-60 bg-white rounded-xl shadow-xl border border-slate-100 py-2 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <Link
                    to="/products"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-4 py-2 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600 font-semibold"
                  >
                    Product Gallery
                  </Link>
                  <Link
                    to="/products?cat=panels"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-4 py-2 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Solar Panels (TOPCon/Mono)
                  </Link>
                  <Link
                    to="/products?cat=inverters"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-4 py-2 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Inverters (On-Grid/Hybrid)
                  </Link>
                  <Link
                    to="/products?cat=batteries"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-4 py-2 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    LiFePO4 Lithium Batteries
                  </Link>
                  <Link
                    to="/products?cat=structures"
                    onClick={() => setProductsDropdownOpen(false)}
                    className="block px-4 py-2 text-xs xl:text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-600"
                  >
                    Structures & Protection
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                isActive('/services') ? 'text-amber-600 bg-amber-50 font-bold' : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Services
            </Link>

            <Link
              to="/projects"
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                isActive('/projects') ? 'text-amber-600 bg-amber-50 font-bold' : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Projects
            </Link>

            <Link
              to="/calculator"
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                isActive('/calculator') ? 'text-amber-600 bg-amber-50 font-bold' : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              <span className="flex items-center gap-1">
                <span>Calculator</span>
                <span className="hidden 2xl:inline-block bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded-full">New</span>
              </span>
            </Link>

            <Link
              to="/pm-surya-ghar"
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                isActive('/pm-surya-ghar') ? 'text-amber-600 bg-amber-50 font-bold' : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Subsidy
            </Link>

            <Link
              to="/contact"
              className={`px-2.5 xl:px-3 py-2 rounded-lg text-xs xl:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                isActive('/contact') ? 'text-amber-600 bg-amber-50 font-bold' : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA on Navbar (Right, Fixed Shrink-0, Never Wraps) */}
          <div className="hidden lg:flex items-center shrink-0">
            <button
              onClick={() => openQuoteModal()}
              type="button"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs xl:text-sm px-4 xl:px-5 py-2.5 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer transform active:scale-95 whitespace-nowrap shrink-0"
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">GET FREE QUOTE</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => openQuoteModal()}
              type="button"
              className="bg-amber-500 text-white text-xs font-bold px-3 py-2 rounded-lg"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              isActive('/') ? 'bg-amber-50 text-amber-600 font-bold' : 'text-slate-700'
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={`block px-3 py-2.5 rounded-lg text-base font-medium ${
              isActive('/about') ? 'bg-amber-50 text-amber-600 font-bold' : 'text-slate-700'
            }`}
          >
            About Us
          </Link>

          <div className="border-t border-slate-100 pt-2 pb-1">
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Solar Solutions</p>
            <Link
              to="/solar-solutions"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700"
            >
              All Solar Solutions Overview
            </Link>
            <Link
              to="/residential-solar"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 pl-6"
            >
              🏡 Residential Solar (2kW - 10kW)
            </Link>
            <Link
              to="/commercial-solar"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 pl-6"
            >
              🏢 Commercial Solar (10kW - 100kW)
            </Link>
            <Link
              to="/industrial-solar"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 pl-6"
            >
              🏭 Industrial Solar EPC (100kW - 1MW+)
            </Link>
            <Link
              to="/battery-bess"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 pl-6"
            >
              🔋 Battery & BESS Storage
            </Link>
          </div>

          <div className="border-t border-slate-100 pt-2 pb-1">
            <p className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Products & Services</p>
            <Link
              to="/products"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700"
            >
              Products Catalog (Panels, Inverters, LiFePO4)
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700"
            >
              Services (EPC, Net-Metering, AMC)
            </Link>
          </div>

          <Link
            to="/calculator"
            onClick={closeMenu}
            className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-emerald-700 bg-emerald-50"
          >
            <span>📊 Solar Savings Calculator</span>
            <span className="text-xs bg-emerald-200 px-2 py-0.5 rounded-full">Calculate</span>
          </Link>

          <Link
            to="/pm-surya-ghar"
            onClick={closeMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700"
          >
            🏛️ PM Surya Ghar & Subsidy
          </Link>

          <Link
            to="/projects"
            onClick={closeMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700"
          >
            📸 Completed Projects
          </Link>

          <Link
            to="/solar-company-lucknow"
            onClick={closeMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-amber-700"
          >
            📍 Solar Company in Lucknow (Local Hub)
          </Link>

          <Link
            to="/contact"
            onClick={closeMenu}
            className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700"
          >
            📞 Contact Us
          </Link>

          <div className="pt-4 border-t border-slate-200 space-y-2">
            <button
              onClick={() => {
                closeMenu();
                openQuoteModal();
              }}
              type="button"
              className="w-full py-3 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md text-center"
            >
              GET FREE QUOTATION
            </button>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-xl"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Now</span>
              </a>
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 bg-emerald-600 text-white text-sm font-medium rounded-xl"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
