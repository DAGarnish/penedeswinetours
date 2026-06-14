"use client";

import React, { useState } from "react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    guests: "2",
    pickupLocation: "",
    dietaryNotes: "",
    isVegetarian: false,
    isVegan: false,
    isGlutenFree: false,
    additionalRequests: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    }
  };

  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = "Please specify your hotel or villa in Sitges";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call for premium inquiry
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-stone-50 shadow-2xl border border-stone-200/50 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 border-b border-stone-200/60 bg-gradient-to-r from-vineyard-900 to-stone-900 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-stone-300 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p className="text-gold-400 font-serif text-sm tracking-widest uppercase mb-1">
            Exclusive Day Tour
          </p>
          <h3 className="text-2xl font-serif text-white">Secure Your Winery Escape</h3>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-vineyard-50 text-vineyard-800 rounded-full flex items-center justify-center mx-auto border border-vineyard-100">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-serif text-stone-900">Inquiry Received</h4>
              <p className="text-stone-600 max-w-sm mx-auto text-sm leading-relaxed">
                Salud! We have received your booking inquiry. Our private sommelier host will contact you within 2 hours to finalize your itinerary and pickup details.
              </p>
              <button
                onClick={onClose}
                className="mt-6 px-6 py-2.5 bg-stone-900 hover:bg-stone-800 text-white text-sm tracking-wider uppercase rounded-lg transition-colors"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Progress Bar */}
              <div className="flex items-center space-x-2 text-xs text-stone-500 uppercase tracking-wider mb-4">
                <span className={`${step === 1 ? "text-terracotta-600 font-semibold" : ""}`}>
                  1. Details
                </span>
                <span>&rarr;</span>
                <span className={`${step === 2 ? "text-terracotta-600 font-semibold" : ""}`}>
                  2. Culinary & Requests
                </span>
              </div>

              {step === 1 ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-terracotta-500 bg-white text-stone-900 text-sm"
                      placeholder="e.g., Katherine Miller"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-terracotta-500 bg-white text-stone-900 text-sm"
                      placeholder="e.g., katherine@example.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-terracotta-500 bg-white text-stone-900 text-sm"
                      />
                      {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                        Guests *
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-terracotta-500 bg-white text-stone-900 text-sm"
                      >
                        {[2, 3, 4, 5, 6, 7, 8, "9+"].map((num) => (
                          <option key={num} value={num}>
                            {num} Guests
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Sitges Pickup Address (Hotel/Villa) *
                    </label>
                    <input
                      type="text"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-terracotta-500 bg-white text-stone-900 text-sm"
                      placeholder="e.g., ME Sitges Terramar / Villa Bella Vista"
                    />
                    {errors.pickupLocation && (
                      <p className="text-red-500 text-xs mt-1">{errors.pickupLocation}</p>
                    )}
                    <span className="text-xs text-stone-500 mt-1 block">
                      Door-to-door luxury transport included.
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full py-3 mt-4 bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-sm tracking-wider uppercase rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-md"
                  >
                    <span>Specify Culinary Preferences</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="p-4 bg-gold-50/70 border border-gold-100 rounded-lg">
                    <p className="text-xs text-gold-700 uppercase font-bold tracking-widest mb-2">
                      Gourmet Xarcuteria Pairing
                    </p>
                    <p className="text-xs text-stone-600 leading-relaxed mb-3">
                      Select custom dietary requirements. Our former A-list celebrity chef curates exquisite artisanal replacements so every guest dines in luxury.
                    </p>
                    
                    <div className="space-y-2">
                      <label className="flex items-center space-x-3 text-sm text-stone-700">
                        <input
                          type="checkbox"
                          name="isVegetarian"
                          checked={formData.isVegetarian}
                          onChange={handleInputChange}
                          className="rounded text-terracotta-600 focus:ring-terracotta-500"
                        />
                        <span>Vegetarian (Gourmet plant-based charcuterie & aged cheeses)</span>
                      </label>
                      
                      <label className="flex items-center space-x-3 text-sm text-stone-700">
                        <input
                          type="checkbox"
                          name="isVegan"
                          checked={formData.isVegan}
                          onChange={handleInputChange}
                          className="rounded text-terracotta-600 focus:ring-terracotta-500"
                        />
                        <span>Vegan (House-cured specialties, dried fruits, premium olives)</span>
                      </label>

                      <label className="flex items-center space-x-3 text-sm text-stone-700">
                        <input
                          type="checkbox"
                          name="isGlutenFree"
                          checked={formData.isGlutenFree}
                          onChange={handleInputChange}
                          className="rounded text-terracotta-600 focus:ring-terracotta-500"
                        />
                        <span>Gluten-Free (Artisanal seed crackers & premium meat cuts)</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">
                      Allergies & Additional Requests (Optional)
                    </label>
                    <textarea
                      name="dietaryNotes"
                      value={formData.dietaryNotes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2.5 rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-terracotta-500 bg-white text-stone-900 text-sm"
                      placeholder="Let us know if you are celebrating a special occasion or have any specific allergies."
                    />
                  </div>

                  <div className="flex space-x-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 py-3 border border-stone-200 hover:bg-stone-100 text-stone-700 font-semibold text-sm tracking-wider uppercase rounded-lg transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 py-3 bg-vineyard-800 hover:bg-vineyard-950 text-white font-semibold text-sm tracking-wider uppercase rounded-lg transition-colors shadow-md flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        "Submit Booking Inquiry"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
