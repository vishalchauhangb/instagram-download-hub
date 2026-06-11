/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Copy, ArrowRight, ClipboardSignature, DownloadCloud, HardDriveDownload } from 'lucide-react';

export default function HowToUse() {
  const steps = [
    {
      num: '01',
      title: 'Copy URL Link',
      desc: 'Open Instagram app or website, locate the target post, tap share menu and pick "Copy Link".',
      icon: <Copy className="h-5 w-5 text-instagram-pink" />
    },
    {
      num: '02',
      title: 'Paste Link Above',
      desc: 'Paste your copied link into our centralized secure input bar, or click one of our single-tap suggestions.',
      icon: <ClipboardSignature className="h-5 w-5 text-instagram-purple" />
    },
    {
      num: '03',
      title: 'Tap Download',
      desc: 'Press the "Download" button to run our smart high-speed crawler which instantly decodes the video or photo nodes.',
      icon: <DownloadCloud className="h-5 w-5 text-instagram-orange" />
    },
    {
      num: '04',
      title: 'Save to Device',
      desc: 'Review the high-definition media previews, hit "Save to Device", and enjoy offline backup in 1080p!',
      icon: <HardDriveDownload className="h-5 w-5 text-emerald-400" />
    }
  ];

  return (
    <section className="w-full" id="how-to-use-section">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-xs font-bold tracking-widest text-[#fd1d1d] uppercase bg-[#fd1d1d]/10 px-3 py-1 rounded-full border border-[#fd1d1d]/20 inline-block mb-3">
          Simplified Backup Steps
        </span>
        <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
          How to Download from Instagram?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-white/50">
          Our online platform makes it incredibly simple to save media. Follow these four quick guidelines to backup high-quality photo frames and reels to your computer or mobile storage.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="group relative rounded-2xl bg-[#161618] p-6 border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition duration-300 flex flex-col justify-between"
          >
            {/* Step Index Number */}
            <div className="absolute top-4 right-5 text-3xl font-black font-display text-white/[0.04] group-hover:text-white/[0.08] transition duration-300">
              {step.num}
            </div>

            <div>
              {/* Icon Frame */}
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition border border-white/5 group-hover:scale-105 duration-300">
                {step.icon}
              </div>

              <h3 className="font-display font-bold text-sm sm:text-base text-white tracking-wide mb-2 group-hover:text-[#fd1d1d] transition duration-300">
                {step.title}
              </h3>
              
              <p className="text-xs text-white/50 leading-relaxed">
                {step.desc}
              </p>
            </div>

            {/* Simulated connector arrows for desktop */}
            {idx < 3 && (
              <div className="hidden lg:block absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 text-white/20">
                <ArrowRight className="h-4 w-4" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
