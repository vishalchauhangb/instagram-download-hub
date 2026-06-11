/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Video, Image, Sparkles, Film } from 'lucide-react';
import { DownloadType, FeatureCard } from '../types';
import { FEATURE_CARDS } from '../data';

interface QuickTabsProps {
  activeType: DownloadType;
  setActiveType: (type: DownloadType) => void;
  onSelectSample: (sampleUrl: string) => void;
}

export default function QuickTabs({ activeType, setActiveType, onSelectSample }: QuickTabsProps) {
  // Map identifier keys to Lucide icon components
  const renderIcon = (iconName: string, className: string) => {
    switch (iconName) {
      case 'Play':
        return <Video className={className} />;
      case 'Image':
        return <Image className={className} />;
      case 'Sparkles':
        return <Sparkles className={className} />;
      case 'Film':
        return <Film className={className} />;
      default:
        return <Video className={className} />;
    }
  };

  return (
    <div className="w-full">
      {/* 4 Feature Tabs/Cards Grid */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {FEATURE_CARDS.map((card: FeatureCard) => {
          const isActive = activeType === card.id;
          return (
            <button
              key={card.id}
              onClick={() => setActiveType(card.id)}
              className={`relative flex flex-col items-center sm:items-start rounded-2xl p-6 text-left transition-all duration-300 border focus:outline-none cursor-pointer group ${
                isActive
                  ? 'bg-[#161618] border-white/10 bg-gradient-to-b from-[#161618]/80 to-[#0A0A0B] shadow-lg shadow-black/80 scale-[1.02]'
                  : 'bg-[#161618] border-white/5 hover:bg-white/[0.03] hover:border-white/10'
              }`}
            >
              {/* Highlight bar inside card for active states */}
              {isActive && (
                <div className="absolute inset-x-0 -top-[1px] h-[3px] rounded-t-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" />
              )}

              {/* Icon Bubble */}
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-md'
                    : 'bg-white/5 text-white/70 group-hover:bg-[#fd1d1d]/10'
                }`}
              >
                {renderIcon(card.iconName, 'h-5 w-5')}
              </div>

              <h3 className="font-display font-semibold text-sm sm:text-base text-white tracking-wide">
                {card.title}
              </h3>
              
              <p className="mt-2 text-xs text-white/50 line-clamp-2 leading-relaxed hidden sm:block">
                {card.description}
              </p>

              {/* Active check bubble or link hint */}
              <div className="mt-4 flex w-full items-center justify-between text-[11px] font-semibold text-white/40">
                <span className="hidden sm:inline">Insta format</span>
                <span
                  className={`rounded-md px-1.5 py-0.5 tracking-wider font-mono lowercase ${
                    isActive
                      ? 'bg-white/10 text-white/90 border border-white/10'
                      : 'bg-white/[0.02] text-white/30'
                  }`}
                >
                  {card.id === 'photo' ? 'jpg bundle' : card.id === 'video' ? '4k original' : card.id === 'story' ? 'stories' : 'reels HD'}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
