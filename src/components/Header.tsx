/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Instagram, Sparkles, ExternalLink, HelpCircle } from 'lucide-react';

interface HeaderProps {
  onScrollToFaq: () => void;
  onScrollToFeatures: () => void;
}

export default function Header({ onScrollToFaq, onScrollToFeatures }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white shadow-lg shadow-instagram-pink/10">
            <Instagram className="h-4.5 w-4.5" />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-white font-display">
              Instagram Download Hub
            </span>
            <span className="hidden sm:inline-block ml-2 rounded-md bg-white/[0.06] px-1.5 py-0.5 text-[10px] font-medium tracking-wide text-instagram-orange font-mono uppercase">
              Free & Secure
            </span>
          </div>
        </div>

        {/* Global Action items */}
        <nav className="flex items-center gap-1 sm:gap-4 md:gap-6">
          <button
            onClick={onScrollToFeatures}
            className="rounded-lg px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-white/70 transition hover:text-white"
          >
            Features
          </button>
          <button
            onClick={onScrollToFaq}
            className="rounded-lg px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-white/70 transition hover:text-white"
          >
            FAQs
          </button>
          
          <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

          {/* Social proof/trust metric */}
          <div className="hidden md:flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400 border border-emerald-500/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Server Status: Online / 1.2 GB/s</span>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="flex items-center gap-1.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] px-3.5 py-1.5 text-xs font-semibold text-white/90 transition border border-white/10 hover:border-white/20"
          >
            <span>Instagram</span>
            <ExternalLink className="h-3 w-3 text-white/50" />
          </a>
        </nav>
      </div>
    </header>
  );
}
