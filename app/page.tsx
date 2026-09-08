'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Scale,
  Shield,
  Award,
  Languages,
  CalendarCheck,
  CheckCircle2,
  Users,
  Briefcase,
  Home as HomeIcon,
  FileText,
  FileCheck2,
  Globe2,
  Car,
  Gavel,
  ChevronRight,
  Menu,
  X,
  ExternalLink,
  MessageSquare,
  Building2,
  Send,
} from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Family Law');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Family Law',
    message: '',
  });

  const services = [
    {
      id: 'family-law',
      title: 'Family Law',
      icon: Users,
      description:
        'Compassionate guidance through separation, divorce, child custody, spousal support, and division of family property.',
      highlight: 'Divorce & Separation, Custody, Support',
    },
    {
      id: 'criminal-defense',
      title: 'Criminal Defense',
      icon: Shield,
      description:
        'Strategic and vigorous defense for summary and indictable offenses, bail hearings, and charter rights protection.',
      highlight: 'Bail Hearings, Summary & Indictable Matters',
    },
    {
      id: 'personal-injury',
      title: 'Personal Injury',
      icon: Car,
      description:
        'Dedicated legal advocacy for victims of motor vehicle collisions, slip-and-falls, and long-term disability disputes.',
      highlight: 'Accident Benefits, Slip & Fall, Disability',
    },
    {
      id: 'civil-litigation',
      title: 'Civil Litigation',
      icon: Gavel,
      description:
        'Focused representation for breach of contract, property disputes, debt collection, and complex commercial disagreements.',
      highlight: 'Contract Disputes, Debt Claims, Court Actions',
    },
    {
      id: 'real-estate-law',
      title: 'Real Estate Law',
      icon: HomeIcon,
      description:
        'Seamless residential and commercial purchases, sales, mortgage refinances, and comprehensive title investigations.',
      highlight: 'Purchases, Sales, Refinancing, Title Searches',
    },
    {
      id: 'estate-planning',
      title: 'Estate Planning',
      icon: FileText,
      description:
        'Meticulous drafting of wills, powers of attorney, trust structures, and probate estate administration guidance.',
      highlight: 'Wills, Powers of Attorney, Estate Probate',
    },
    {
      id: 'business-law',
      title: 'Business Law',
      icon: Briefcase,
      description:
        'Corporate incorporation, shareholder agreements, commercial lease reviews, asset purchases, and regulatory filings.',
      highlight: 'Incorporation, Commercial Leases, Agreements',
    },
    {
      id: 'immigration-law',
      title: 'Immigration Law',
      icon: Globe2,
      description:
        'Assistance with family sponsorships, study and work permits, permanent residency applications, and appeal hearings.',
      highlight: 'Sponsorships, Permits, Express Entry, Appeals',
    },
    {
      id: 'legal-consultation',
      title: 'Legal Consultation & Notary',
      icon: FileCheck2,
      description:
        'Initial case evaluation, document authentication, statutory declarations, affidavits, and Notary Public commissioning.',
      highlight: 'Notary Public, Affidavits, Strategic Advisory',
    },
  ];

  const whyChooseUs = [
    {
      icon: Scale,
      title: 'Personalized Legal Service',
      description:
        'Every legal matter is unique. Sunny C. Ho personally oversees your file, providing direct access, prompt updates, and tailor-made legal strategies.',
    },
    {
      icon: Award,
      title: 'Proven Local Experience',
      description:
        'Deep practical understanding of Ontario court procedures, York Region legal systems, and standard practices across the Greater Toronto Area.',
    },
    {
      icon: Languages,
      title: 'Multilingual Support',
      description:
        'Clear, barrier-free communication. Consultations and file management are comfortably offered in English, Cantonese, and Mandarin.',
    },
    {
      icon: CalendarCheck,
      title: 'Transparent Consultations',
      description:
        'Straightforward initial case evaluation, realistic outcomes, and clear fee structures with no hidden surprises or unexpected billing.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleServiceSelectAndScroll = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-stone-900 flex flex-col font-sans">
      {/* Top Notification / Trust Bar */}
      <div className="bg-[#8B2635] text-white text-xs sm:text-sm py-2 px-4 border-b border-[#701D29]">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Serving Richmond Hill & York Region, Ontario</span>
            <span className="hidden md:inline text-stone-300">|</span>
            <span className="hidden md:inline text-stone-200">English, Cantonese & Mandarin Consultations</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:+19057099938"
              className="flex items-center gap-1.5 font-medium hover:text-stone-200 transition-colors"
              id="top-bar-phone"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+1 905-709-9938</span>
            </a>
            <span className="text-stone-400 hidden sm:inline">•</span>
            <span className="hidden sm:inline text-stone-200">Mon–Fri: 9AM – 5PM</span>
          </div>
        </div>
      </div>

      {/* Header / Sticky Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group" id="logo-link">
              <div className="w-10 h-10 rounded-md bg-[#8B2635] text-white flex items-center justify-center shadow-sm group-hover:bg-[#A02334] transition-colors">
                <Scale className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-[#8B2635] transition-colors leading-tight">
                  Sunny C. Ho
                </span>
                <span className="text-[11px] sm:text-xs tracking-wider uppercase text-stone-500 font-medium">
                  Barrister &amp; Solicitor, Notary Public
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700" id="desktop-nav">
              <a href="#home" className="hover:text-[#8B2635] transition-colors py-2">
                Home
              </a>
              <a href="#services" className="hover:text-[#8B2635] transition-colors py-2">
                Services
              </a>
              <a href="#about" className="hover:text-[#8B2635] transition-colors py-2">
                About
              </a>
              <a href="#why-us" className="hover:text-[#8B2635] transition-colors py-2">
                Why Choose Us
              </a>
              <a href="#contact" className="hover:text-[#8B2635] transition-colors py-2">
                Contact &amp; Location
              </a>
            </nav>

            {/* Header Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+19057099938"
                id="header-call-btn"
                className="inline-flex items-center gap-2 bg-[#8B2635] hover:bg-[#701D29] text-white px-4 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-xs hover:shadow-md active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:+19057099938"
                id="mobile-call-icon-btn"
                className="sm:hidden p-2 rounded-lg bg-[#8B2635]/10 text-[#8B2635] hover:bg-[#8B2635]/20"
                aria-label="Call Sunny C. Ho Law Firm"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                type="button"
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-stone-700 hover:bg-stone-100 focus:outline-hidden"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50 hover:text-[#8B2635]"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50 hover:text-[#8B2635]"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50 hover:text-[#8B2635]"
            >
              About Sunny C. Ho
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50 hover:text-[#8B2635]"
            >
              Why Choose Us
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:bg-stone-50 hover:text-[#8B2635]"
            >
              Contact &amp; Location
            </a>
            <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
              <a
                href="tel:+19057099938"
                id="mobile-drawer-call-btn"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#8B2635] text-white font-medium text-sm shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>Call +1 905-709-9938</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-stone-300 text-stone-700 font-medium text-sm hover:bg-stone-50"
              >
                <span>Request Consultation</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="home" className="relative bg-gradient-to-b from-stone-50/80 via-[#F8F5F2]/50 to-white pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 border-b border-stone-200/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headline, Copy & Actions (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B2635]/10 border border-[#8B2635]/20 text-[#8B2635] text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
                  <Scale className="w-3.5 h-3.5" />
                  <span>Barrister &amp; Solicitor · Notary Public</span>
                </div>

                {/* Main Reassuring Headline */}
                <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-950 leading-[1.15] mb-6">
                  Trusted Legal Counsel in Richmond Hill
                </h1>

                {/* Supporting Sentence */}
                <p className="text-lg sm:text-xl text-stone-600 leading-relaxed font-normal mb-8 max-w-2xl">
                  Providing experienced, client-focused legal representation across Ontario. We deliver dependable advocacy, strategic solutions, and dedicated personal attention when you need it most.
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                  <a
                    href="tel:+19057099938"
                    id="hero-call-cta"
                    className="inline-flex justify-center items-center gap-2.5 bg-[#8B2635] hover:bg-[#701D29] text-white px-7 py-3.5 rounded-lg font-semibold text-base transition-all shadow-md hover:shadow-lg active:scale-95"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call +1 905-709-9938</span>
                  </a>
                  <a
                    href="#contact"
                    id="hero-consultation-cta"
                    className="inline-flex justify-center items-center gap-2 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 px-7 py-3.5 rounded-lg font-semibold text-base transition-all shadow-xs hover:border-stone-400 active:scale-95"
                  >
                    <span>Get a Consultation</span>
                    <ChevronRight className="w-4 h-4 text-stone-500" />
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="pt-6 border-t border-stone-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-stone-600 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B2635] shrink-0" />
                    <span>York Region Practice</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B2635] shrink-0" />
                    <span>Direct Partner Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B2635] shrink-0" />
                    <span>Multilingual Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8B2635] shrink-0" />
                    <span>Confidential Advisory</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Sunny Ho Portrait (5 cols) */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end" id="hero-image-wrapper">
                <div className="relative w-full max-w-md">
                  {/* Subtle backdrop glow/accent */}
                  <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-tr from-[#8B2635]/20 via-stone-200 to-[#8B2635]/10 transform rotate-1 blur-xs" />

                  {/* Professional Portrait Card */}
                  <div
                    id="hero-portrait-card"
                    className="relative rounded-2xl bg-white p-3 sm:p-4 shadow-xl border border-stone-200/90 overflow-hidden"
                  >
                    <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-stone-100 shadow-inner">
                      <Image
                        src="/images/sunny-ho.png"
                        alt="Sunny C. Ho, Barrister & Solicitor, Notary Public"
                        fill
                        priority
                        sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 420px"
                        className="object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      {/* Subtle gradient vignette at bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent opacity-90 pointer-events-none" />

                      {/* Floating Credential Banner */}
                      <div className="absolute bottom-0 inset-x-0 p-4 text-white">
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#8B2635]/90 text-[11px] uppercase tracking-wider font-semibold mb-1">
                          <Scale className="w-3 h-3 text-white" />
                          <span>Principal Counsel</span>
                        </div>
                        <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                          Sunny C. Ho
                        </h2>
                        <p className="text-xs sm:text-sm text-stone-200 font-medium tracking-wide">
                          Barrister &amp; Solicitor · Notary Public
                        </p>
                      </div>
                    </div>

                    {/* Sub-card details */}
                    <div className="mt-3 px-2 flex items-center justify-between text-xs text-stone-600">
                      <span className="flex items-center gap-1.5 font-medium">
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                        Law Society of Ontario
                      </span>
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider bg-stone-100 px-2 py-0.5 rounded">
                        Richmond Hill, ON
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-16 sm:py-24 bg-[#F8F5F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8B2635] font-semibold mb-2">
                <span>Areas of Practice</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                Comprehensive Legal Services
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Clear, diligent guidance designed to protect your rights, resolve conflicts, and secure your future across key areas of Ontario law.
              </p>
            </div>

            {/* 3-Column Desktop / 1-Column Mobile Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={service.id}
                    id={`service-card-${service.id}`}
                    className="bg-white rounded-xl p-7 border border-stone-200/90 shadow-xs hover:shadow-md hover:border-[#8B2635]/40 transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-[#8B2635]/10 text-[#8B2635] flex items-center justify-center mb-5 group-hover:bg-[#8B2635] group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl font-bold text-stone-900 mb-2.5 group-hover:text-[#8B2635] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-stone-600 text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-stone-400">
                        {service.highlight}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleServiceSelectAndScroll(service.title)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B2635] hover:text-[#701D29] group-hover:underline"
                      >
                        <span>Inquire</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Service Banner */}
            <div className="mt-12 bg-white rounded-xl p-6 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-center sm:text-left">
                <div className="w-12 h-12 rounded-full bg-[#8B2635]/10 text-[#8B2635] flex items-center justify-center shrink-0">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-stone-900">
                    Need Notary Public or Commissioning Services?
                  </h4>
                  <p className="text-stone-600 text-xs sm:text-sm">
                    Affidavits, statutory declarations, certified true copies, and travel consent letters handled promptly.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="shrink-0 bg-[#8B2635] hover:bg-[#701D29] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
              >
                Book Notary Service
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-16 sm:py-24 bg-white border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Lawyer Profile Card */}
              <div className="lg:col-span-5">
                <div className="bg-[#F8F5F2] rounded-2xl p-8 border border-stone-200 shadow-xs relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 rounded-xl bg-[#8B2635] text-white flex items-center justify-center shadow-md">
                      <Scale className="w-8 h-8" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-200/80 text-stone-700 text-xs font-semibold">
                      <Building2 className="w-3.5 h-3.5 text-[#8B2635]" />
                      Richmond Hill, ON
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-stone-900">
                    Sunny C. Ho
                  </h3>
                  <p className="text-[#8B2635] font-semibold text-sm mb-4">
                    Barrister &amp; Solicitor, Notary Public
                  </p>

                  <div className="space-y-3 text-sm text-stone-600 border-t border-stone-200/80 pt-4 mb-6">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8B2635]" />
                      <span>Member in Good Standing, Law Society of Ontario</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8B2635]" />
                      <span>Serving York Region &amp; the Greater Toronto Area</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8B2635]" />
                      <span>Fluent in English, Cantonese &amp; Mandarin</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8B2635]" />
                      <span>Appointed Notary Public &amp; Commissioner for Oaths</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-4 border border-stone-200 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-stone-500 uppercase font-medium">Direct Telephone</p>
                      <p className="font-semibold text-stone-900 text-sm sm:text-base">+1 905-709-9938</p>
                    </div>
                    <a
                      href="tel:+19057099938"
                      className="p-2.5 rounded-lg bg-[#8B2635] text-white hover:bg-[#701D29] transition-colors"
                      aria-label="Call Sunny C. Ho"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Bio & Core Philosophy */}
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8B2635] font-semibold mb-2">
                  <span>Professional Profile</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-6">
                  Experienced, Principled &amp; Accessible Counsel
                </h2>

                <div className="prose text-stone-600 text-base leading-relaxed space-y-4">
                  <p>
                    Sunny C. Ho is a dedicated Barrister and Solicitor serving individuals, families, and business owners in Richmond Hill, Markham, Vaughan, and across Ontario. Built on pillars of rigorous legal analysis, unyielding integrity, and deep personal care, the practice provides accessible, partner-level representation.
                  </p>
                  <p>
                    Navigating legal challenges—whether resolving a matrimonial dispute, securing real estate property, drafting an estate plan, or defending against a criminal charge—can be stressful and consequential. Sunny C. Ho takes the time to listen carefully, demystify complex Ontario statutes, and formulate practical, cost-effective solutions tailored to your unique circumstances.
                  </p>
                  <p>
                    As a Notary Public and member of the Law Society of Ontario, Mr. Ho is committed to the highest standards of professional conduct. Clients benefit from direct lawyer-to-client communication, transparent expectations, and thoughtful advocacy inside and outside the courtroom.
                  </p>
                </div>

                {/* Core Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-200 mt-6">
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80">
                    <p className="font-serif font-bold text-stone-900 mb-1">Integrity</p>
                    <p className="text-xs text-stone-600">Honest evaluations, ethical advocacy, and uncompromised fiduciary duty.</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80">
                    <p className="font-serif font-bold text-stone-900 mb-1">Diligence</p>
                    <p className="text-xs text-stone-600">Meticulous document preparation and thorough evidentiary review.</p>
                  </div>
                  <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80">
                    <p className="font-serif font-bold text-stone-900 mb-1">Clarity</p>
                    <p className="text-xs text-stone-600">Direct communication free of confusing legal jargon and hidden fees.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US SECTION */}
        <section id="why-us" className="py-16 sm:py-24 bg-[#F8F5F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8B2635] font-semibold mb-2">
                <span>The Firm&apos;s Advantage</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                Why Choose Sunny C. Ho
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                When you face critical legal choices, you deserve counsel who prioritizes your best interests, protects your assets, and treats your matter with utmost urgency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={index}
                    id={`why-card-${index}`}
                    className="bg-white rounded-xl p-7 border border-stone-200 shadow-xs hover:shadow-md transition-shadow flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-[#8B2635]/10 text-[#8B2635] flex items-center justify-center mb-5">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-stone-900 mb-2.5">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* LOCATION & CONTACT SECTION */}
        <section id="contact" className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-[#8B2635] font-semibold mb-2">
                <span>Get In Touch</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
                Location &amp; Consultation Request
              </h2>
              <p className="text-stone-600 text-base leading-relaxed">
                Reach out today to schedule your consultation or notary appointment. We are conveniently located in Richmond Hill, Ontario.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Left Column: Contact Details & Map (6 cols) */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                {/* Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="bg-[#F8F5F2] p-5 rounded-xl border border-stone-200">
                    <div className="w-10 h-10 rounded-lg bg-[#8B2635]/10 text-[#8B2635] flex items-center justify-center mb-3">
                      <Phone className="w-5 h-5" />
                    </div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">Direct Phone</p>
                    <a
                      href="tel:+19057099938"
                      className="font-bold text-base text-stone-900 hover:text-[#8B2635] transition-colors"
                      id="contact-phone-link"
                    >
                      +1 905-709-9938
                    </a>
                    <p className="text-xs text-stone-500 mt-1">Available during office hours</p>
                  </div>

                  {/* Office Hours */}
                  <div className="bg-[#F8F5F2] p-5 rounded-xl border border-stone-200">
                    <div className="w-10 h-10 rounded-lg bg-[#8B2635]/10 text-[#8B2635] flex items-center justify-center mb-3">
                      <Clock className="w-5 h-5" />
                    </div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">Office Hours</p>
                    <p className="font-bold text-base text-stone-900">Mon – Fri: 9AM – 5PM</p>
                    <p className="text-xs text-stone-500 mt-1">Evening &amp; weekend by appointment</p>
                  </div>
                </div>

                {/* Address Card */}
                <div className="bg-[#F8F5F2] p-5 rounded-xl border border-stone-200 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#8B2635]/10 text-[#8B2635] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold mb-1">Office Location</p>
                    <p className="font-bold text-base text-stone-900">
                      Richmond Hill, Ontario, Canada
                    </p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Plus Code: <span className="font-mono font-medium">RJV7+QV Richmond Hill, ON</span>
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a
                        href="https://www.google.com/maps/place/Sunny+C.+Ho,+Barrister+%26+Solicitor,+Notary+Public/@43.8444574,-79.3853592,17z"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B2635] hover:text-[#701D29] bg-white px-3 py-1.5 rounded-md border border-stone-200 shadow-2xs hover:border-[#8B2635]"
                        id="open-google-maps-link"
                      >
                        <span>Open in Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Embedded Google Map */}
                <div className="rounded-xl overflow-hidden border border-stone-200 shadow-xs h-72 sm:h-80 relative bg-stone-100">
                  <iframe
                    title="Sunny C. Ho Law Firm Location Map"
                    src="https://maps.google.com/maps?q=43.8444574,-79.3853592&hl=en&z=15&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full grayscale-25 contrast-105"
                  />
                  <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-md shadow-xs border border-stone-200 text-xs font-medium text-stone-800">
                    <span>📍 RJV7+QV Richmond Hill, ON</span>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="bg-[#F8F5F2] p-5 rounded-xl border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-stone-500 font-semibold">Connect on Social Media</p>
                    <p className="text-sm text-stone-700">Follow for firm updates &amp; legal advisories</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.facebook.com/SunnyHoRichmond"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-[#8B2635] hover:border-[#8B2635] text-xs font-semibold shadow-2xs transition-colors"
                      id="facebook-link"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com/sunnyholawyer/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-[#8B2635] hover:border-[#8B2635] text-xs font-semibold shadow-2xs transition-colors"
                      id="instagram-link"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form (6 cols) */}
              <div className="lg:col-span-6">
                <div className="bg-[#F8F5F2] rounded-2xl p-7 sm:p-9 border border-stone-200 shadow-xs">
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 text-[#8B2635] text-xs font-bold uppercase tracking-wider mb-1">
                      <MessageSquare className="w-4 h-4" />
                      <span>Send an Inquiry</span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-stone-900">
                      Request Legal Consultation
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">
                      Fill out the form below. All inquiries are held in strict confidence.
                    </p>
                  </div>

                  {formSubmitted ? (
                    <div className="bg-white rounded-xl p-8 border border-stone-200 text-center space-y-4 animate-in fade-in duration-300">
                      <div className="w-14 h-14 rounded-full bg-[#8B2635]/10 text-[#8B2635] flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h4 className="font-serif text-xl font-bold text-stone-900">
                        Inquiry Received
                      </h4>
                      <p className="text-stone-600 text-sm max-w-md mx-auto">
                        Thank you, <span className="font-semibold text-stone-900">{formData.name || 'valued client'}</span>. Your message has been safely received. Our office will contact you within 1 business day.
                      </p>
                      <div className="pt-2">
                        <button
                          type="button"
                          onClick={() => {
                            setFormSubmitted(false);
                            setFormData({
                              name: '',
                              email: '',
                              phone: '',
                              service: 'Family Law',
                              message: '',
                            });
                          }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B2635] hover:underline"
                        >
                          <span>Send another message</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" id="consultation-form">
                      {/* Name */}
                      <div>
                        <label htmlFor="client-name" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Full Name <span className="text-[#8B2635]">*</span>
                        </label>
                        <input
                          id="client-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Johnathan Smith"
                          className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#8B2635] focus:ring-1 focus:ring-[#8B2635] transition-all text-sm"
                        />
                      </div>

                      {/* Email and Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="client-email" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                            Email Address <span className="text-[#8B2635]">*</span>
                          </label>
                          <input
                            id="client-email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#8B2635] focus:ring-1 focus:ring-[#8B2635] transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label htmlFor="client-phone" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                            Phone Number <span className="text-[#8B2635]">*</span>
                          </label>
                          <input
                            id="client-phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (905) 000-0000"
                            className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#8B2635] focus:ring-1 focus:ring-[#8B2635] transition-all text-sm"
                          />
                        </div>
                      </div>

                      {/* Practice Area Selection */}
                      <div>
                        <label htmlFor="practice-area" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Practice Area of Interest
                        </label>
                        <select
                          id="practice-area"
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-stone-900 focus:outline-hidden focus:border-[#8B2635] focus:ring-1 focus:ring-[#8B2635] transition-all text-sm"
                        >
                          <option value="Family Law">Family Law (Divorce, Separation, Custody)</option>
                          <option value="Criminal Defense">Criminal Defense (Bail, Offenses)</option>
                          <option value="Personal Injury">Personal Injury (MVA, Slip &amp; Fall)</option>
                          <option value="Civil Litigation">Civil Litigation &amp; Dispute Resolution</option>
                          <option value="Real Estate Law">Real Estate Law (Purchase, Sale, Refinance)</option>
                          <option value="Estate Planning">Estate Planning &amp; Wills</option>
                          <option value="Business Law">Business Law &amp; Contracts</option>
                          <option value="Immigration Law">Immigration Law &amp; Permits</option>
                          <option value="Legal Consultation">General Consultation &amp; Notary Public</option>
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="client-message" className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                          Brief Summary of Your Situation <span className="text-[#8B2635]">*</span>
                        </label>
                        <textarea
                          id="client-message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Please provide a brief, confidential summary of your legal matter..."
                          className="w-full px-4 py-3 rounded-lg bg-white border border-stone-300 text-stone-900 placeholder:text-stone-400 focus:outline-hidden focus:border-[#8B2635] focus:ring-1 focus:ring-[#8B2635] transition-all text-sm resize-none"
                        />
                      </div>

                      {/* Confidentiality Notice */}
                      <p className="text-[11px] text-stone-500 leading-normal">
                        * Submitting this form does not establish a lawyer-client relationship. Please do not submit confidential documents until instructed.
                      </p>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        id="submit-consultation-btn"
                        className="w-full inline-flex justify-center items-center gap-2 bg-[#8B2635] hover:bg-[#701D29] text-white py-3.5 px-6 rounded-lg font-semibold text-sm transition-all shadow-md active:scale-95"
                      >
                        <Send className="w-4 h-4" />
                        <span>Submit Consultation Request</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
            {/* Firm Brand Column */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-md bg-[#8B2635] text-white flex items-center justify-center">
                  <Scale className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white tracking-tight">
                    Sunny C. Ho
                  </h3>
                  <p className="text-xs text-stone-400">
                    Barrister &amp; Solicitor, Notary Public
                  </p>
                </div>
              </div>

              <p className="text-stone-400 text-sm leading-relaxed max-w-sm">
                Dedicated legal counsel in Richmond Hill, Ontario. Providing trustworthy advocacy, pragmatic dispute resolution, and comprehensive notary services with integrity.
              </p>

              <div className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.facebook.com/SunnyHoRichmond"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-[#8B2635] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Sunny C. Ho Facebook Page"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/sunnyholawyer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-stone-800 hover:bg-[#8B2635] text-stone-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Sunny C. Ho Instagram Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-serif text-white font-semibold mb-4 text-base">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Areas of Practice</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Sunny C. Ho</a></li>
                <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Location &amp; Contact</a></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div>
              <h4 className="font-serif text-white font-semibold mb-4 text-base">Key Services</h4>
              <ul className="space-y-2 text-sm text-stone-400">
                <li>Family Law &amp; Divorce</li>
                <li>Criminal Defense</li>
                <li>Civil Litigation</li>
                <li>Real Estate Closings</li>
                <li>Wills &amp; Estates</li>
                <li>Notary Public Services</li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="font-serif text-white font-semibold mb-4 text-base">Firm Contact</h4>
              <div className="space-y-2.5 text-sm">
                <a
                  href="tel:+19057099938"
                  className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#A02334]" />
                  <span>+1 905-709-9938</span>
                </a>
                <div className="flex items-start gap-2 text-stone-400">
                  <MapPin className="w-4 h-4 text-[#A02334] shrink-0 mt-0.5" />
                  <span>Richmond Hill, Ontario, Canada (RJV7+QV)</span>
                </div>
                <div className="flex items-start gap-2 text-stone-400">
                  <Clock className="w-4 h-4 text-[#A02334] shrink-0 mt-0.5" />
                  <span>Mon–Fri: 9:00 AM – 5:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer & Copyright */}
          <div className="pt-8 border-t border-stone-800 text-xs text-stone-500 space-y-4">
            <p className="leading-relaxed">
              <strong className="text-stone-400">Legal Disclaimer:</strong> The content provided on this website is for general informational purposes only and does not constitute formal legal advice. Viewing this website or contacting Sunny C. Ho, Barrister &amp; Solicitor, Notary Public via electronic forms or email does not create a lawyer-client relationship. Confidential or time-sensitive information should not be sent prior to formal retainer.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-stone-500">
              <p>&copy; {new Date().getFullYear()} Sunny C. Ho, Barrister &amp; Solicitor, Notary Public. All rights reserved.</p>
              <p>Richmond Hill, Ontario, Canada</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
