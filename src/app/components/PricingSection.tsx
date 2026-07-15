"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function PricingSection({ onBookNow }: { onBookNow?: (message: string) => void }) {
  const [guests, setGuests] = useState(8);
  const [addToOpenGroup, setAddToOpenGroup] = useState(false);
  const [selectedDates, setSelectedDates] = useState<{ date: string; hasPreference: boolean }[]>([]);
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
    setAddToOpenGroup(e.target.checked);
  };

  const toggleDate = (dateStr: string, isShiftClick: boolean) => {
    setSelectedDates((prev) => {
      const exists = prev.find(d => d.date === dateStr);
      if (exists) {
        return prev.filter(d => d.date !== dateStr);
      } else {
        return [...prev, { date: dateStr, hasPreference: !isShiftClick }];
      }
    });
  };

  const handleBookNow = () => {
    let msg = `Dear team,\n\nI am interested in booking a tour for ${guests} ${guests === 1 ? 'guest' : 'guests'}.`;
    
    if (selectedDates.length > 0) {
      const prefDates = selectedDates.filter(d => d.hasPreference).map(d => d.date);
      const noPrefDates = selectedDates.filter(d => !d.hasPreference).map(d => d.date);
      
      let dateMsg = "";
      if (prefDates.length > 0 && noPrefDates.length > 0) {
        dateMsg = `the following dates (in order of preference): ${prefDates.join(", ")} and these additional dates (no preference): ${noPrefDates.join(", ")}`;
      } else if (prefDates.length > 0) {
        dateMsg = `the following dates (in order of preference): ${prefDates.join(", ")}`;
      } else {
        dateMsg = `the following dates (no preference): ${noPrefDates.join(", ")}`;
      }

      if (addToOpenGroup) {
        msg += `\nI would also like to join an open group to reduce the price. I am available on ${dateMsg}.`;
      } else {
        msg += `\nI am available on ${dateMsg}.`;
      }
    }
    
    if (onBookNow) onBookNow(msg);
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
            </div>
          )}

          <div className="pt-8 border-t border-stone-200/70 flex flex-col items-center w-full">
            <p className="text-sm font-semibold text-stone-500 uppercase tracking-widest mb-3">Price Per Person</p>
            <div className="text-5xl md:text-6xl font-serif text-stone-900 transition-all">
              €{currentPrice}
            </div>
            <p className="text-xs text-stone-500 mt-4 max-w-xs mx-auto leading-relaxed mb-10 text-center">
              Fully inclusive of transport, private sommelier, all tastings, and the celebrity-chef curated lunch. No hidden fees.
            </p>

            {/* Static Calendar */}
            <div className="mb-10 bg-white rounded-2xl shadow-sm border border-stone-200/50 p-6 w-full max-w-sm mx-auto">
              <h3 className="font-serif text-xl text-stone-900 mb-1">Select Available Dates</h3>
              <p className="text-xs text-stone-500 mb-6">Choose all dates you are available. Click in order of preference (hold Shift while clicking for no preference).</p>

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
                  const selectionItem = selectedDates.find(item => item.date === dateStr);
                  const isSelected = !!selectionItem;
                  const isPast = new Date(year, month, d) < new Date(new Date().setHours(0,0,0,0));
                  
                  let prefNumber = null;
                  if (selectionItem?.hasPreference) {
                    const prefDates = selectedDates.filter(item => item.hasPreference);
                    prefNumber = prefDates.findIndex(item => item.date === dateStr) + 1;
                  }

                  return (
                    <button
                      key={d}
                      disabled={isPast}
                      onClick={(e) => toggleDate(dateStr, e.shiftKey)}
                      className={`w-full aspect-square rounded-full flex items-center justify-center text-sm transition-colors relative ${
                        isPast 
                          ? 'text-stone-300 cursor-not-allowed'
                          : isSelected
                            ? 'bg-terracotta-600 text-white font-medium shadow-md'
                            : 'text-stone-700 hover:bg-stone-100'
                      }`}
                    >
                      {d}
                      {prefNumber !== null && (
                        <span className="absolute -top-1 -right-1 bg-stone-900 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                          {prefNumber}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
              
              {selectedDates.length > 0 && (
                <div className="mt-4 pt-3 border-t border-stone-100 text-xs text-stone-500 font-medium">
                  {selectedDates.length} date(s) selected
                </div>
              )}
            </div>

            <button 
              onClick={handleBookNow}
              className="px-8 py-4 bg-terracotta-600 hover:bg-terracotta-700 text-white font-semibold text-sm tracking-wider uppercase rounded-lg shadow-lg hover:shadow-xl transition-all w-full max-w-sm"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
