/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQ_ITEMS } from '../data';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('faq1'); // First one open by default

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full" id="faq-section">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold tracking-widest text-[#833ab4] uppercase bg-[#833ab4]/10 px-3 py-1 rounded-full border border-[#833ab4]/20 inline-block mb-3">
          Support & Help
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
          Frequently Answered Queries
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/50">
          Need assistance or got questions about video formats, audio sync, or download speeds? Browse our FAQ library for answers to everything you need.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {FAQ_ITEMS.map((item) => {
          const isOpen = openId === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl transition-all duration-300 border cursor-pointer ${
                isOpen
                  ? 'bg-[#161618] border-[#fd1d1d]/30 shadow-md shadow-black'
                  : 'bg-[#161618] border-white/5 hover:border-white/10'
              }`}
            >
              <button
                onClick={() => toggleFaq(item.id)}
                className="w-full h-full flex items-center justify-between text-left px-5 sm:px-6 py-4.5 group focus:outline-none cursor-pointer"
              >
                <div className="flex items-center gap-3.5 mr-3">
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition ${
                    isOpen 
                      ? 'bg-[#fd1d1d]/10 border-[#fd1d1d]/30 text-[#fd1d1d]' 
                      : 'bg-white/5 border-white/5 text-white/50 group-hover:text-white'
                  }`}>
                    <HelpCircle className="h-4 w-4" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-white/80 group-hover:text-white transition-colors">
                    {item.question}
                  </span>
                </div>
                
                {/* Expand Indicator */}
                <span className="text-white/30 group-hover:text-white transition-colors shrink-0">
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </span>
              </button>

              {/* Collapsed Description block */}
              {isOpen && (
                <div className="px-5 sm:px-6 pb-5 text-white/60 text-xs sm:text-sm leading-relaxed border-t border-white/5 pt-3 bg-white/[0.01] rounded-b-2xl">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
