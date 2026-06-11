/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Download, Check, RefreshCw, Eye, ThumbsUp, MessageCircle, FileDown, ShieldAlert, BadgeCheck } from 'lucide-react';
import { InstagramMediaResult, MediaItem } from '../types';

interface ResultCardProps {
  isLoading: boolean;
  result: InstagramMediaResult | null;
  onClear: () => void;
  statusStep: number;
}

const STEPS = [
  'Verifying Instagram post format...',
  'Connecting to Instagram metadata cloud...',
  'Extracting original media links & resolutions...',
  'Bundling download streams...'
];

export default function ResultCard({ isLoading, result, onClear, statusStep }: ResultCardProps) {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  // Simulated download process for individual file
  const handleDownloadFile = async (item: MediaItem) => {
    setDownloadingId(item.id);
    
    // Simulate short network delay for the server extraction stream
    await new Promise((resolve) => setTimeout(resolve, 1400));
    
    try {
      // Trigger a direct link download using standard browser mechanics
      const response = await fetch(item.url, { mode: 'cors' });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = blobUrl;
      const extension = item.type === 'video' ? 'mp4' : 'jpg';
      link.download = `instagram_${result?.username || 'media'}_${item.id}.${extension}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
    } catch (e) {
      // Non-cors fallback
      window.open(item.url, '_blank');
    }
    
    setDownloadingId(null);
  };

  if (isLoading) {
    return (
      <div className="w-full rounded-3xl bg-[#161618]/50 border border-white/5 p-8 text-center" id="processing-loader">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-left max-w-2xl mx-auto">
          {/* Animated custom processing icon */}
          <div className="relative flex h-36 w-36 shrink-0 items-center justify-center rounded-2xl bg-[#161618] border border-white/5 overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent z-10" />
            <div className="relative z-20 w-10 h-10 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            <span className="absolute bottom-3 left-3 z-20 text-[10px] uppercase tracking-widest text-white/60 font-black font-mono">
              Crawling Node
            </span>
          </div>

          <div className="flex-grow space-y-4">
            <div>
              <h3 className="font-display font-extrabold text-xl text-white mb-1">
                Parsing Link Data
              </h3>
              <p className="text-xs text-white/50 max-w-sm">
                Authenticating CDN pathways to isolate high-definition Instagram media streams.
              </p>
            </div>

            {/* Interactive Multi-step indicators */}
            <div className="w-full bg-black/40 rounded-xl p-3 border border-white/5">
              {STEPS.map((step, idx) => {
                const isDone = statusStep > idx;
                const isCurrent = statusStep === idx;
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-3 py-1 text-left text-[11px] transition-opacity duration-300 ${
                      isDone ? 'text-emerald-400 font-medium' : isCurrent ? 'text-white font-semibold' : 'text-white/20'
                    }`}
                  >
                    {isDone ? (
                      <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 text-[9px]">
                        ✓
                      </span>
                    ) : isCurrent ? (
                      <span className="relative flex h-3.5 w-3.5 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-[#fd1d1d] opacity-75" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#fd1d1d]" />
                      </span>
                    ) : (
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/5" />
                    )}
                    <span>{step}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="w-full rounded-3xl bg-[#161618]/30 border border-dashed border-white/10 py-14 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/5 text-white/30 mb-4">
          <FileDown className="h-7 w-7" />
        </div>
        <h3 className="font-semibold text-white/70 text-sm">Waiting for Instagram link</h3>
        <p className="mt-1 text-xs text-white/40 max-w-xs mx-auto">
          Paste an Instagram Link above or select a sample link to simulate the dynamic download view instantly.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full rounded-3xl bg-[#161618] border border-white/10 overflow-hidden" id="result-card-container">
      {/* Upper header section */}
      <div className="flex items-center justify-between bg-white/[0.02] px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-white/60 font-mono tracking-wider uppercase">
            {result.type} Successfully Parsed
          </span>
        </div>
        <button
          onClick={onClear}
          className="text-xs text-white/45 hover:text-white font-medium transition cursor-pointer"
        >
          Clear Result
        </button>
      </div>

      {/* Main Grid: Left is Thumbnail/Preview, Right is Authorship Info & Download triggers */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6">
        
        {/* Media Thumbnail Container */}
        <div className="md:col-span-5 flex flex-col gap-3">
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden bg-black border border-white/5 group">
            {/* Visual Indicator of Reels vs regular post */}
            <span className="absolute top-3 right-3 z-10 rounded-lg bg-black/60 backdrop-blur-md px-2 py-1 text-[10px] font-semibold text-white tracking-widest uppercase font-mono">
              {result.type}
            </span>

            {/* Media Item Frame */}
            {result.type === 'video' || result.type === 'reel' ? (
              <video
                src={result.mediaList[0].url}
                className="h-full w-full object-cover"
                controls
                poster={result.mediaList[0].previewUrl}
              />
            ) : (
              <img
                src={result.mediaList[0].previewUrl}
                alt="Instagram source cover preview"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            )}
          </div>
          
          <div className="flex items-center justify-between text-xs text-white/50 bg-white/[0.01] p-2.5 rounded-xl border border-white/5">
            <span className="flex items-center gap-1"><ThumbsUp className="h-3 w-3 text-[#fd1d1d]" /> {result.likes}</span>
            <span className="flex items-center gap-1"><MessageCircle className="h-3 w-3 text-[#833ab4]" /> {result.comments}</span>
            <span>{result.timeAgo}</span>
          </div>
        </div>

        {/* Action Panel Details */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <div className="space-y-4">
            
            {/* User Profile */}
            <div className="flex items-center gap-3">
              <img
                src={result.userAvatar}
                alt={result.username}
                className="h-10 w-10 rounded-full object-cover border border-white/10"
              />
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-white text-sm">@{result.username}</span>
                  {result.isVerified && (
                    <BadgeCheck className="h-4.5 w-4.5 text-blue-400 fill-blue-400/10" />
                  )}
                </div>
                <p className="text-[11px] text-white/40">Instagram Contributor</p>
              </div>
            </div>

            {/* Caption excerpt */}
            <div className="bg-black/30 border border-white/5 p-3.5 rounded-2xl">
              <p className="text-xs text-white/70 leading-relaxed line-clamp-3">
                {result.caption}
              </p>
            </div>

            {/* Warnings context */}
            <div className="flex items-center gap-2 text-[10px] text-white/30">
              <ShieldAlert className="h-3.5 w-3.5 text-instagram-orange" />
              <span>Downloads are intended for personal media archives, please credit the creator.</span>
            </div>
          </div>

          {/* Download trigger links area */}
          <div className="mt-6 pt-5 border-t border-white/5 space-y-3">
            <h4 className="text-xs font-bold font-display text-white/60 tracking-widest uppercase">
              Available Files ({result.mediaList.length})
            </h4>

            <div className="max-h-[220px] overflow-y-auto space-y-2.5 pr-1">
              {result.mediaList.map((item, index) => {
                const isDownloading = downloadingId === item.id;
                return (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between p-3 rounded-xl bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] transition"
                  >
                    {/* File metadata */}
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black border border-white/5 text-[10px] font-bold font-mono text-white/60 uppercase">
                        {item.type}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs text-white">Item #{index + 1}</span>
                          <span className="bg-white/5 rounded px-1.5 py-0.5 text-[9px] font-mono text-white/50 font-medium">
                            {item.quality}
                          </span>
                        </div>
                        <p className="text-[10px] text-white/30 font-mono mt-0.5">Approx. {item.size}</p>
                      </div>
                    </div>

                    {/* Download buttons */}
                    <div className="flex items-center gap-2">
                      {/* Live preview */}
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/5 transition"
                        title="View Original File in full size"
                      >
                        <Eye className="h-4 w-4" />
                      </a>

                      {/* Primary Save Button */}
                      <button
                        onClick={() => handleDownloadFile(item)}
                        disabled={isDownloading}
                        className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 h-9 rounded-lg bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-95 text-xs font-bold text-white px-4 hover:shadow-md hover:shadow-orange-500/15 transition active:scale-[0.98] cursor-pointer disabled:opacity-50"
                      >
                        {isDownloading ? (
                          <>
                            <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                            <span>Saving...</span>
                          </>
                        ) : (
                          <>
                            <Download className="h-3.5 w-3.5" />
                            <span>Save to Device</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
