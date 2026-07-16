"use client";

import React, { useState } from "react";
import BookingModal from "./components/BookingModal";
import FaqSection from "./components/FaqSection";
import PricingSection from "./components/PricingSection";
import ContactForm from "./components/ContactForm";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingMessage, setBookingMessage] = useState("");

  const handleBookNow = (message: string) => {
    setBookingMessage(message);
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-[#fcfbf9] text-stone-900 font-sans selection:bg-terracotta-100 selection:text-terracotta-900">
      
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#fcfbf9]/85 backdrop-blur-md border-b border-stone-200/40 transition-all">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-stone-800">
              PENEDÈS <span className="text-terracotta-600">WINE TOURS</span>
            </span>
            <span className="text-[10px] tracking-widest uppercase text-stone-500 font-semibold -mt-1">
              Starting and ending in Sitges
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide text-stone-600">
            <a href="#itinerary" className="hover:text-terracotta-600 transition-colors">The Itinerary</a>
            <a href="#culinary" className="hover:text-terracotta-600 transition-colors">Culinary Promise</a>
            <a href="#pricing" className="hover:text-terracotta-600 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-terracotta-600 transition-colors">Logistics & FAQ</a>
          </nav>

          <div>
            <a
              href="#contact"
              className="inline-block px-5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs tracking-wider uppercase rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              Book Your Experience
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-6 pb-24 md:pt-16 md:pb-32">
        {/* Subtle romantic background gradient shape */}
        <div className="absolute top-0 right-0 -z-10 w-[70%] h-[80%] bg-gradient-to-bl from-terracotta-50/40 via-gold-50/20 to-transparent rounded-bl-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">


            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-stone-900 leading-[1.15] tracking-tight">
              Sitges Wine Tasting Tour | Massís del Garraf <br className="hidden md:block"/>
              <span className="text-terracotta-600 italic font-medium">Premium Vineyard Tours, on Sitges' Doorstep</span>
            </h1>

            <p className="text-stone-600 text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              A perfect blend of an urban tour then escape to the singular Massís del Garraf natural park, in the renowned Penedès region. Sip highly expressive organic, vegan wines shaped by limestone soils and the Mediterranean breeze, and enjoy a xarcuteria board back at base, curated by our former A-list celebrity private chef, all in very close proximity to Sitges.
            </p>

            {/* Micro value statements */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2 border-y border-stone-200/50">
              <div className="flex items-center space-x-2.5">
                <span className="text-terracotta-500 font-bold text-lg">14h</span>
                <span className="text-stone-600 text-sm leading-tight">Afternoon escape starting at 14:00</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="text-terracotta-500 font-bold text-lg">Private</span>
                <span className="text-stone-600 text-sm leading-tight">Private guide & small groups (1-8)</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="text-terracotta-500 font-bold text-lg">Local</span>
                <span className="text-stone-600 text-sm leading-tight">No sitting in cars for hours</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <a
                href="#pricing"
                className="inline-block px-8 py-4 bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-sm tracking-wider uppercase rounded-lg shadow-lg hover:shadow-xl transition-all text-center cursor-pointer"
              >
                Book Your Experience
              </a>
              <a
                href="#itinerary"
                className="px-8 py-4 border border-stone-300 hover:bg-stone-100 text-stone-700 font-semibold text-sm tracking-wider uppercase rounded-lg transition-all text-center"
              >
                View Itinerary
              </a>
            </div>

            <p className="text-stone-500 text-xs italic">
              * Fully customizable for private groups. High dietary requirements accommodated with elegance.
            </p>
          </div>

          {/* Hero Image / Visual Representation */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200">
              {/* Premium image asset */}
              <img
                src="/vineyard_hero.png"
                alt="Bespoke Penedès Wine Tour experience from Sitges"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-900/10 flex flex-col justify-end p-8 text-white">
                <div className="mb-2 flex items-center space-x-1 text-gold-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-serif text-2xl mb-1">“The highlight of our stay in Sitges.”</p>
                <p className="text-xs text-stone-300 uppercase tracking-widest font-semibold">
                  — The Hamilton Family, London
                </p>
              </div>
              

            </div>
            
            {/* Visual background details */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gold-400/10 rounded-full blur-xl -z-10" />
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-terracotta-500/10 rounded-full blur-2xl -z-10" />
          </div>
        </div>
      </section>

      {/* Trust & Proof Banner */}
      <section className="bg-stone-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs uppercase tracking-widest text-gold-400 font-bold mb-8">
            As Recommended by Luxury Concierges in Sitges
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-stone-800 pb-6 md:pb-0 md:pr-8 last:border-0">
              <p className="font-serif text-stone-200 italic">"Our guests at the villa expect the absolute best. Penedès Wine Tours delivers a seamless experience that consistently wows them from town to the vines."</p>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">— Elite Sitges Villa Rentals</p>
            </div>
            <div className="space-y-2 border-b md:border-b-0 md:border-r border-stone-800 pb-6 md:pb-0 md:pr-8 last:border-0">
              <p className="font-serif text-stone-200 italic">"The afternoon timeline is perfect. Guests get to experience world-class vineyards, taste wines, and relax into the evening at El Clastré."</p>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">— Lead Concierge, Premium Sitges Hotel</p>
            </div>
            <div className="space-y-2 last:border-0">
              <p className="font-serif text-stone-200 italic">"A great trip out from Barcelona on the train to do Sitges and a fantastic vineyard tour, halving the total travel time, and it only takes up one day to do it all."</p>
              <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider">— Barcelona & Sitges Lifestyle Guide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Curated Portfolio Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-terracotta-600 font-serif text-sm tracking-widest uppercase block mb-3">
              Exclusive Access
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight">
              Our Curated Portfolio
            </h2>
            <p className="text-stone-600 mt-4 text-sm md:text-base leading-relaxed">
              Each day trip visits two contrasting vineyards from our carefully selected portfolio, giving you exclusive access to the most authentic, ecological, and character-driven estates in the Garraf.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Hospital de Sitges */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-stone-200">
                <img src="/hospital_de_sitges.png" alt="Hospital de Sitges" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow space-y-2">
                  <h3 className="font-serif text-lg text-stone-900">Hospital de Sitges</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Once a hospital, now a historic urban vineyard where tradition, organic farming, and the sea breeze come together.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/50">
                  <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold block mb-1">Signature Taste</span>
                  <p className="text-xs text-stone-600 font-medium">Malvasia Dolça <span className="font-normal">— Iconic, honeyed, and perfectly balanced.</span></p>
                </div>
              </div>
            </div>

            {/* Clos dels Guarans */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-stone-200">
                <img src="/clos_dels_guarans.png" alt="Clos dels Guarans" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow space-y-2">
                  <h3 className="font-serif text-lg text-stone-900">Clos dels Guarans</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    A small family winery recovering ancestral varieties and working the vines with nature to produce expressive, easy-to-drink wines.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/50">
                  <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold block mb-1">Signature Taste</span>
                  <p className="text-xs text-stone-600 font-medium">L'Abellar <span className="font-normal">— A structural white aged in chestnut barrels.</span></p>
                </div>
              </div>
            </div>

            {/* Finca Mas Perdut */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-stone-200">
                <img src="/finca_mas_perdut.png" alt="Finca Mas Perdut" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow space-y-2">
                  <h3 className="font-serif text-lg text-stone-900">Finca Mas Perdut</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Fifth-generation winemakers since 1868, defending the living vineyard and bottling the pure essence of limestone earth in amphoras.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/50">
                  <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold block mb-1">Signature Taste</span>
                  <p className="text-xs text-stone-600 font-medium">Cervell <span className="font-normal">— A juicy natural red crafted in demijohns.</span></p>
                </div>
              </div>
            </div>

            {/* VallDolina */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-stone-200">
                <img src="/valldolina.png" alt="VallDolina" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow space-y-2">
                  <h3 className="font-serif text-lg text-stone-900">VallDolina</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    A spectacularly integrated estate in Olesa de Bonesvalls championing biodynamics, low production, and profound terroir expression.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/50">
                  <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold block mb-1">Signature Taste</span>
                  <p className="text-xs text-stone-600 font-medium">Gran Reserva Cava <span className="font-normal">— Deeply aromatic, crisp, and alive.</span></p>
                </div>
              </div>
            </div>

            {/* Finca Valldosera */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-stone-200">
                <img src="/finca_valldosera.png" alt="Finca Valldosera" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow space-y-2">
                  <h3 className="font-serif text-lg text-stone-900">Finca Valldosera</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Founded in 1980 deeply within the Massís, focusing on the Subirat Parent grape to create wines with incredible aging potential.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/50">
                  <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold block mb-1">Signature Taste</span>
                  <p className="text-xs text-stone-600 font-medium">Subirat Parent <span className="font-normal">— Subtle, floral, and elegantly mineral.</span></p>
                </div>
              </div>
            </div>

            {/* Vega de Ribes */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-stone-200">
                <img src="/vega_de_ribes.png" alt="Vega de Ribes" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow space-y-2">
                  <h3 className="font-serif text-lg text-stone-900">Vega de Ribes</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Pioneers in organic agriculture since the 12th century, bringing highly typical marine-influenced wines to the forefront.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/50">
                  <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold block mb-1">Signature Taste</span>
                  <p className="text-xs text-stone-600 font-medium">Sasserra <span className="font-normal">— An iconic, complex 100% Malvasía.</span></p>
                </div>
              </div>
            </div>

            {/* Masia de la Roqua */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-stone-200">
                <img src="/masia_de_la_roqua.png" alt="Masia de la Roqua" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow space-y-2">
                  <h3 className="font-serif text-lg text-stone-900">Masia de la Roqua</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Built upon the limestone rock in 1164. Today they ferment with wild yeasts to keep their ecosystem as alive as possible.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/50">
                  <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold block mb-1">Signature Taste</span>
                  <p className="text-xs text-stone-600 font-medium">El Truc Blanc <span className="font-normal">— An agile, delicate natural white.</span></p>
                </div>
              </div>
            </div>

            {/* Puig Batet */}
            <div className="bg-stone-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col">
              <div className="aspect-[4/3] w-full relative overflow-hidden bg-stone-200">
                <img src="/puig_batet.png" alt="Puig Batet" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6 space-y-4 flex-grow flex flex-col">
                <div className="flex-grow space-y-2">
                  <h3 className="font-serif text-lg text-stone-900">Puig Batet</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Three generations working centenary vineyards, producing highly artisanal wines shaped by both sea and mountain elements.
                  </p>
                </div>
                <div className="pt-4 border-t border-stone-200/50">
                  <span className="text-xs uppercase tracking-widest text-terracotta-600 font-semibold block mb-1">Signature Taste</span>
                  <p className="text-xs text-stone-600 font-medium">Xic <span className="font-normal">— A lively young white with Garraf DNA.</span></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The Itinerary Section */}
      <section id="itinerary" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-terracotta-600 font-serif text-sm tracking-widest uppercase block mb-3">
              Effortless Half-Day Flow
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
              A Wine Tasting Day Trip Designed Around Your Holiday
            </h2>
            <p className="text-stone-600 mt-4 text-sm md:text-base leading-relaxed">
              We know your holiday time is precious. That is why we curating our itinerary to fit perfectly into a morning or afternoon, leaving your beach days and dinner plans completely untouched.
            </p>
          </div>

          {/* Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm space-y-4 hover:shadow-md transition-shadow relative">
              <span className="absolute top-4 right-6 text-4xl font-serif font-bold text-stone-100">01</span>
              <div className="w-10 h-10 bg-terracotta-50 text-terracotta-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-stone-900">The Historic Introduction</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Meet at 14:00 at the iconic Celler de l'Hospital de Sitges. Enjoy an opening tasting and discover the rich history of winemaking right in the heart of town.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm space-y-4 hover:shadow-md transition-shadow relative">
              <span className="absolute top-4 right-6 text-4xl font-serif font-bold text-stone-100">02</span>
              <div className="w-10 h-10 bg-vineyard-50 text-vineyard-800 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-11.314l.707.707m11.314 11.314l.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-stone-900">The Garraf Expedition</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Our driver whisks you away to two contrasting vineyards close by in the Massís del Garraf. Walk the vines and enjoy curated tastings of different grapes, including expressive local reds.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm space-y-4 hover:shadow-md transition-shadow relative">
              <span className="absolute top-4 right-6 text-4xl font-serif font-bold text-stone-100">03</span>
              <div className="w-10 h-10 bg-stone-100 text-stone-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-stone-900">Return to the Heritage Vines</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Journey back to Celler de l'Hospital de Sitges for an exclusive tour of their beautiful grounds and historic boutique urban vineyard.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm space-y-4 hover:shadow-md transition-shadow relative">
              <span className="absolute top-4 right-6 text-4xl font-serif font-bold text-stone-100">04</span>
              <div className="w-10 h-10 bg-gold-50 text-gold-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-stone-900">The Xarcuteria Pairing</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                Settle into our custom-curated culinary highlight—a premium Catalan charcuterie and cheese board, with wine pairings.
              </p>
            </div>

            {/* Step 5 */}
            <div className="bg-white p-6 rounded-2xl border border-stone-200/50 shadow-sm space-y-4 hover:shadow-md transition-shadow relative lg:col-span-1 md:col-span-2">
              <span className="absolute top-4 right-6 text-4xl font-serif font-bold text-stone-100">05</span>
              <div className="w-10 h-10 bg-stone-900 text-white rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              </div>
              <h3 className="font-serif text-lg text-stone-900">Evening at El Clastré</h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                The formal tour concludes, but the evening is yours. Guests are welcome to stay on and relax into the night at El Clastré, soaking up the vibrant atmosphere.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* The Culinary Promise Section */}
      <section id="culinary" className="py-24 bg-gradient-to-b from-[#fcfbf9] to-stone-50 border-t border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Visual representations */}
          <div className="lg:col-span-5 relative space-y-6">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-200">
              <img
                src="/xarcuteria_board.png"
                alt="Catalan Gourmet Xarcuteria Board"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-stone-200">
              <img
                src="/vegan_board.png"
                alt="Vegetarian artisanal board"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Copy Description */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-terracotta-600 font-serif text-sm tracking-widest uppercase block">
              Gourmet Vineyard Dining
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
              The Xarcuteria Experience
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              Set in a private, romantic pocket of the vineyard, you will dine on a custom-curated charcuterie board ("Xarcuteria"). This is exclusively prepared for our guests by our former A-list celebrity private chef.
            </p>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed">
              We source only the finest, award-winning acorn-fed Jamón Ibérico, artisan fuet, wild herb llonganissa, and small-batch Catalan cheeses aged in local cellars. Each bite is paired with the perfect wine from the estate.
            </p>
            
            {/* Dietary notes calling out premium veg */}
            <div className="p-5 bg-gold-50/60 border border-gold-400/20 rounded-xl space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-gold-500" />
                <h4 className="font-serif font-bold text-stone-900 text-sm">
                  Gourmet Vegetarian, Vegan, and Gluten-free Options
                </h4>
              </div>
              <p className="text-stone-600 text-xs md:text-sm leading-relaxed">
                Dietary requirements are never treated as an afterthought. Our chef custom-designs bespoke plates, featuring roasted local heritage vegetables, premium seed crackers, artisan cheeses, and house-cured green olives, ensuring every traveler dines in luxury.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs tracking-wider uppercase rounded-lg transition-all"
              >
                Inquire About Culinary Options
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* The Garraf Deep Dive */}
      <section className="py-24 bg-white border-t border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          
          {/* Intro */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-terracotta-600 font-serif text-sm tracking-widest uppercase block mb-3">
              The Garraf Difference
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight mb-6">
              A Singular Terroir, Unlike Any Other
            </h2>
            <p className="text-stone-600 text-base md:text-lg leading-relaxed">
              While the inland plains of the Penedès are famous for high-yield clay soils, the Massís del Garraf is a protected natural park rising from the Mediterranean Sea. Here, heroic viticulture is practiced on rugged limestone mountains, producing highly expressive, low-yield wines that simply cannot be replicated anywhere else.
            </p>
          </div>

          {/* Feature 1: Soil */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden shadow-xl border-4 border-stone-100">
              <img src="/garraf_soil.png" alt="Shallow limestone soil of the Garraf" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            <div className="space-y-6 lg:order-last">
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight">
                Shallow Limestone & "Roca Calcárea"
              </h3>
              <p className="text-stone-600 leading-relaxed">
                In the Garraf, the topsoil is incredibly shallow before hitting solid limestone bedrock. This poor water retention forces the vines to struggle, pushing their roots deep into the rock fractures to find microelements.
              </p>
              <p className="text-stone-600 leading-relaxed">
                The result? Drastically lower yields than the inland Penedès, but grapes with massive concentration. The wines boast marked minerality, incredible structure, and an unmistakable "chalky" typicity.
              </p>
            </div>
          </div>

          {/* Feature 2: Climate & Sea */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 order-last lg:order-first">
              <h3 className="text-2xl md:text-3xl font-serif text-stone-900 leading-tight">
                "La Marinada" & The Mediterranean Forest
              </h3>
              <p className="text-stone-600 leading-relaxed">
                Rising up to 593 meters directly from the coast, our vineyards are constantly bathed in the sea breeze known locally as <em>la marinada</em>. This acts as a natural thermoregulator, keeping the vines cooler than the hot inland plains and allowing for a long, stable maturation.
              </p>
              <p className="text-stone-600 leading-relaxed">
                The marine influence leaves a literal trace of salinity on the grape skins, giving Garraf wines their famous savory, saline finish. Surrounded by wild Mediterranean forests of pine, rosemary, and fennel, the grapes also absorb herbal and balsamic notes that transport you straight to the terroir with every sip.
              </p>
            </div>
            <div className="relative aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden shadow-xl border-4 border-stone-100">
              <img src="/garraf_sea.png" alt="The Mediterranean Sea breeze hitting the Garraf vines" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-12 bg-white border-t border-stone-200/40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-terracotta-600 font-serif text-sm tracking-widest uppercase block mb-3">
              Town Centre Location
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
              Meet at our historic Sitges winery
            </h2>
          </div>
          <div className="w-full rounded-2xl overflow-hidden shadow-xl border-4 border-stone-100 bg-stone-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000.1604155042437!2d1.809572112735882!3d41.240063504999206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a381fe22a69d21%3A0x94eca3e1d06be14d!2sCeller%20de%20l&#39;Hospital%20de%20Sitges!5e0!3m2!1sen!2ses!4v1784193119467!5m2!1sen!2ses" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection onBookNow={handleBookNow} />

      {/* Accordion FAQ Section */}
      <FaqSection />

      {/* Final Call to Action */}
      <section className="bg-gradient-to-r from-vineyard-900 to-stone-950 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,84,56,0.15),transparent)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10">
          <p className="text-gold-400 font-serif text-sm tracking-widest uppercase font-bold">
            Limited Openings This Summer
          </p>
          <h2 className="text-4xl md:text-5xl font-serif leading-tight">
            Ready to Escape Sitges for the Perfect Vineyard trip?
          </h2>
          <p className="text-stone-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Secure your preferred dates today. We keep our groups intimately small to ensure a premium, truly personal experience at each estate.
          </p>
          <div className="pt-4">
            <a
              href="#pricing"
              className="inline-block px-8 py-4 bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-sm tracking-wider uppercase rounded-lg shadow-xl hover:shadow-2xl transition-all cursor-pointer"
            >
              Book Your Vineyard Experience
            </a>
          </div>
          <p className="text-xs text-stone-400">
            No upfront reservation fee required. Cancel or reschedule with 48h notice.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-stone-50 border-t border-stone-200/40">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center space-y-4 mb-12">
             <span className="text-terracotta-600 font-serif text-sm tracking-widest uppercase block">
              Get in Touch
            </span>

            <p className="text-stone-600 max-w-2xl mx-auto">
              Ready to book? All of our tours are completely stress-free with zero hidden costs.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-6">
              <div className="flex items-center space-x-2 text-stone-700">
                <svg className="w-5 h-5 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm font-medium">Private Guide</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-700">
                <svg className="w-5 h-5 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm font-medium">All Transport Included</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-700">
                <svg className="w-5 h-5 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm font-medium">All Tastings Covered</span>
              </div>
              <div className="flex items-center space-x-2 text-stone-700">
                <svg className="w-5 h-5 text-terracotta-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span className="text-sm font-medium">Chef-Curated Lunch</span>
              </div>
            </div>

            <p className="text-stone-600 text-sm">
              Fill out the form below and our concierge team will get back to you shortly.
            </p>
          </div>
          <ContactForm initialMessage={bookingMessage} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 border-t border-stone-900 text-stone-500 py-16 text-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <p className="font-serif text-white font-bold tracking-wide">
              PENEDÈS <span className="text-terracotta-500">WINE TOURS</span>
            </p>
            <p className="text-xs leading-relaxed text-stone-400">
              Curating exclusive, half-day tours from Sitges into the heart of the Massís del Garraf wine country. Premium local hosts, Mercedes-class pickup, and A-list chef dining.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-stone-300 mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li><a href="#itinerary" className="hover:text-white transition-colors">The Itinerary</a></li>
              <li><a href="#culinary" className="hover:text-white transition-colors">Culinary Promise</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Logistics & FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-stone-300 mb-4">Departures</h4>
            <p className="text-xs leading-relaxed text-stone-400">
              Tours begin at 14:00 from the historic Celler de l'Hospital de Sitges in town.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-stone-300 mb-4">Inquiries & Booking</h4>
            <button
              onClick={() => {
                const prefix = "34";
                const num = "603904089";
                window.open(`https://wa.me/${prefix}${num}`, '_blank');
              }}
              className="flex items-center space-x-2.5 text-stone-400 hover:text-white transition-colors group mt-2"
            >
              <svg className="w-5 h-5 text-[#25D366] opacity-90 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.031 0C5.383 0 0 5.383 0 12.031c0 2.124.553 4.195 1.603 6.002L.031 24l6.105-1.603A11.968 11.968 0 0012.031 24c6.647 0 12.031-5.383 12.031-12.031S18.679 0 12.031 0zm0 21.969c-1.807 0-3.578-.485-5.124-1.401l-.367-.217-3.805.998.998-3.712-.238-.379A9.923 9.923 0 012.062 12.031c0-5.503 4.482-9.985 9.985-9.985 5.503 0 9.985 4.482 9.985 9.985s-4.482 9.969-9.985 9.969zm5.474-7.481c-.301-.151-1.782-.881-2.059-.982-.278-.101-.482-.151-.685.151-.202.301-.777.982-.953 1.183-.176.202-.352.227-.654.076-1.554-.78-2.686-1.41-3.694-2.835-.261-.368.261-.342.846-1.512.101-.202.05-.379-.026-.53-.076-.151-.685-1.654-.937-2.264-.246-.595-.494-.515-.685-.525-.176-.008-.379-.011-.581-.011-.202 0-.53.076-.807.379-.278.301-1.059 1.034-1.059 2.522 0 1.488 1.084 2.927 1.236 3.129.151.202 2.133 3.256 5.166 4.565 2.124.919 2.871.986 3.921.833 1.134-.165 2.502-.998 2.855-1.963.353-.965.353-1.792.247-1.963-.106-.171-.383-.272-.685-.423z"/>
              </svg>
              <span className="text-sm font-medium tracking-wide">Concierge WhatsApp</span>
            </button>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-stone-900 flex flex-col md:flex-row items-center justify-between text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Penedès Wine Tours. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Booking Inquiry Modal */}
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
