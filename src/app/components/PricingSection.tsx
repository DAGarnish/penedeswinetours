"use client";

import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PricingSection() {
  const [guests, setGuests] = useState(8);
  const [addToOpenGroup, setAddToOpenGroup] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const pricingMap: Record<number, number> = {
    8: 148,
    7: 164,
    6: 188,
    5: 208,
    4: 248,
    3: 304,
    2: 464,
    1: 880,
  };

  const currentPrice = pricingMap[guests];

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setAddToOpenGroup(isChecked);
    if (isChecked) {
      setShowCalendar(true);
    } else {
      setSelectedDates([]);
    }
  };

  const toggleDate = (dateStr: string) => {
    setSelectedDates((prev) => 
      prev.includes(dateStr) 
        ? prev.filter((d) => d !== dateStr) 
        : [...prev, dateStr]
    );
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: startDay }, (_, i) => i);

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  return (
    <section id="pricing" className="py-24 bg-white border-t border-stone-200/40">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="text-terracotta-600 font-serif text-sm tracking-widest uppercase block mb-3">
          PRICING
        </span>
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 leading-tight mb-6">
          Cost Per Guest
        </h2>
        <p className="text-stone-600 max-w-2xl mx-auto leading-relaxed mb-12">
          Use the slider to estimate the price based on your group size. We specialize in intimate groups to guarantee a personalized and luxurious experience.
        </p>

        <div className="bg-stone-50 rounded-3xl border border-stone-200/50 p-8 md:p-12 shadow-sm max-w-2xl mx-auto transition-all hover:shadow-md relative">
          <div className="mb-10">
            <h3 className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-2">Group Size</h3>
            <div className="text-4xl md:text-5xl font-serif text-terracotta-600 mb-8 transition-all">
              {guests} {guests === 1 ? 'Guest' : 'Guests'}
            </div>
            
            <input 
              type="range" 
              min="1" 
              max="8" 
              value={guests} 
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setGuests(val);
                if (val === 8 && addToOpenGroup) {
                  setAddToOpenGroup(false);
                  setSelectedDates([]);
                }
              }}
              className="w-full h-2.5 bg-stone-200 rounded-lg appearance-none cursor-pointer accent-terracotta-600"
            />
            <div className="flex justify-between text-xs text-stone-400 mt-3 font-medium">
              <span>1</span>
              <span>8</span>
            </div>
          </div>

          {guests < 8 && (
            <div className="mb-8 flex items-center justify-center space-x-3 bg-white p-4 rounded-xl border border-stone-200/60 transition-all">
              <input
                type="checkbox"
                id="openGroup"
                checked={addToOpenGroup}
                onChange={handleCheckboxChange}
                className="w-5 h-5 accent-terracotta-600 cursor-pointer rounded border-stone-300 focus:ring-terracotta-600 focus:ring-2"
              />
              <label htmlFor="openGroup" className="text-stone-700 font-medium cursor-pointer select-none">
                Add to open group to reduce price?
              </label>
              
              {addToOpenGroup && (
                <button 
                  onClick={() => setShowCalendar(true)}
                  className="ml-2 text-xs bg-stone-100 hover:bg-stone-200 text-stone-700 px-3 py-1.5 rounded-full transition-colors font-medium"
                >
                  {selectedDates.length > 0 ? `${selectedDates.length} Dates Selected` : 'Select Dates'}
                </button>
              )}
            </div>
          )}

          <div className="pt-8 border-t border-stone-200/70 flex flex-col items-center">
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">Price Per Person</p>
            <div className="text-5xl md:text-6xl font-serif text-stone-900 transition-all">
              €{currentPrice}
            </div>
            <p className="text-xs text-stone-500 mt-4 max-w-xs mx-auto leading-relaxed">
              Fully inclusive of transport, private sommelier, all tastings, and the celebrity-chef curated lunch. No hidden fees.
            </p>
          </div>
        </div>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-6 relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowCalendar(false)}
              className="absolute top-4 right-4 p-2 bg-stone-100 rounded-full hover:bg-stone-200 transition-colors"
            >
              <X className="w-4 h-4 text-stone-600" />
            </button>
            
            <h3 className="font-serif text-xl text-stone-900 mb-1">Select Available Dates</h3>
            <p className="text-xs text-stone-500 mb-6">Choose all dates you are available to join an open group.</p>

            <div className="flex items-center justify-between mb-4">
              <button onClick={prevMonth} className="p-1.5 hover:bg-stone-100 rounded-lg transition-colors">
                <ChevronLeft className="w-5 h-5 text-stone-600" />
              </button>
              <span className="font-medium text-stone-800">
                {monthNames[month]} {year}
              </span>
              <button onClick={nextMonth} className="p-1.5 hover:bg-stone-100 rounded-lg transition-colors">
                <ChevronRight className="w-5 h-5 text-stone-600" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2 text-center">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                <div key={d} className="text-xs font-semibold text-stone-400 py-1">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {blanks.map(b => (
                <div key={`blank-${b}`} className="p-2"></div>
              ))}
              {days.map(d => {
                const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                const isSelected = selectedDates.includes(dateStr);
                const isPast = new Date(year, month, d) < new Date(new Date().setHours(0,0,0,0));

                return (
                  <button
                    key={d}
                    disabled={isPast}
                    onClick={() => toggleDate(dateStr)}
                    className={`w-full aspect-square rounded-full flex items-center justify-center text-sm transition-colors ${
                      isPast 
                        ? 'text-stone-300 cursor-not-allowed'
                        : isSelected
                          ? 'bg-terracotta-600 text-white font-medium shadow-md'
                          : 'text-stone-700 hover:bg-stone-100'
                    }`}
                  >
                    {d}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex justify-between items-center">
              <span className="text-xs text-stone-500">
                {selectedDates.length} date(s) selected
              </span>
              <button 
                onClick={() => setShowCalendar(false)}
                className="px-4 py-2 bg-stone-900 text-white rounded-xl text-sm font-medium hover:bg-stone-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
