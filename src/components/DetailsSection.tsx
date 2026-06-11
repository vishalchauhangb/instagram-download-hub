/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Zap, Layers, Volume2, CloudLightning, RefreshCcw } from 'lucide-react';

export default function DetailsSection() {
  const specs = [
    {
      icon: <Zap className="h-6 w-6 text-instagram-yellow" />,
      title: 'High-Speed Delivery',
      desc: 'Our servers utilize parallel API fetching to extract content metadata in under 2 seconds. Zero buffering or queuing.'
    },
    {
      icon: <Layers className="h-6 w-6 text-instagram-pink" />,
      title: 'Batch Carousel Support',
      desc: 'No more missing out on albums! We isolate all carousel items, allowing you to select and download photos individually.'
    },
    {
      icon: <Volume2 className="h-6 w-6 text-instagram-purple" />,
      title: 'Full Audio Tracking',
      desc: 'Unlike competitors that silent-strip audio, our video conversions retain full original soundtracks and atmospheric sounds.'
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
      title: 'Zero Login Required',
      desc: 'Protect your security. We never ask for your Instagram password, email addresses, or personal credentials.'
    },
    {
      icon: <CloudLightning className="h-6 w-6 text-sky-400" />,
      title: 'Full Quality Storage',
      desc: 'Download exact copies. Save standard MP4 reels at 1080p and premium JPEG photos at full raw resolutions.'
    },
    {
      icon: <RefreshCcw className="h-6 w-6 text-teal-400" />,
      title: 'Unlimited Downloads',
      desc: 'Use the platform as much as you need! No daily, weekly, or hourly download limits or subscription models.'
    }
  ];

  return (
    <section className="w-full" id="details-section">
      <div className="rounded-3xl bg-[#161618] border border-white/5 p-8 sm:p-10 lg:p-12 relative overflow-hidden">
        {/* Abstract background glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-[#fd1d1d]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-[#833ab4]/5 blur-3xl" />

        {/* Header Title inside */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold font-mono text-white/40 tracking-wider uppercase block mb-2">
            Technical Specifications
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight">
            Designed for Speed and Security
          </h2>
          <p className="mt-3 text-sm text-white/50 leading-relaxed">
            InstaDownloader is built on lightning-fast modern cloud modules designed to fetch, parse, and serve Instagram public content efficiently on any viewport.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specs.map((spec, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-4.5 rounded-2xl hover:bg-white/[0.02] border border-transparent hover:border-white/5 transition duration-300"
            >
              {/* Icon Sphere */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10">
                {spec.icon}
              </div>

              <div>
                <h3 className="font-display font-semibold text-sm sm:text-base text-white tracking-wide">
                  {spec.title}
                </h3>
                <p className="mt-2 text-xs text-white/50 leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Stats / Pitch */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap gap-8 items-center justify-center md:justify-start">
            <div>
              <span className="block text-2xl font-extrabold font-display text-white">2.1s</span>
              <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Avg. Processing</span>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-white/10" />
            <div>
              <span className="block text-2xl font-extrabold font-display text-white">100%</span>
              <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Original Resolution</span>
            </div>
            <div className="hidden sm:block h-8 w-[1px] bg-white/10" />
            <div>
              <span className="block text-2xl font-extrabold font-display text-white">Secure</span>
              <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">HTTPS Encryption</span>
            </div>
          </div>
          
          <div className="text-center md:text-right">
            <span className="text-xs font-semibold text-white/50 block mb-1">
              Need a quick backup?
            </span>
            <span className="text-[10px] text-[#fd1d1d] font-bold uppercase tracking-widest font-mono">
              Try clicking a sample link above to test!
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
