/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Search, Clipboard, X, Link, ShieldCheck, AlertCircle } from 'lucide-react';

interface DownloadFormProps {
  url: string;
  setUrl: (url: string) => void;
  onDownload: (submittedUrl: string) => void;
  isLoading: boolean;
}

export default function DownloadForm({ url, setUrl, onDownload, isLoading }: DownloadFormProps) {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Auto-validate URL when it changes
  useEffect(() => {
    if (!url) {
      setIsValid(null);
      setErrorMessage('');
      return;
    }

    const trimmed = url.trim();
    // Validate if it contains instagram.com
    const isInsta = /instagram\.com\/(p|reel|stories|tv|share)/i.test(trimmed);
    
    if (isInsta) {
      setIsValid(true);
      setErrorMessage('');
    } else {
      setIsValid(false);
      setErrorMessage('Please enter a valid Instagram URL (e.g., instagram.com/p/...)');
    }
  }, [url]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) {
      setErrorMessage('Please paste an Instagram link to begin');
      return;
    }
    
    onDownload(url);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (text) {
        setUrl(text);
      }
    } catch (err) {
      // Fallback instruction if browser denies clipboard permissions
      alert("Please paste the link manually into the box by pressing Ctrl+V (or Cmd+V on Mac).");
    }
  };

  const clearInput = () => {
    setUrl('');
    setIsValid(null);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="relative z-10 w-full" id="instagram-form">
        {/* Glow Effects behind input */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] opacity-20 blur-lg transition duration-500 group-focus-within:opacity-40" />
        
        <div className="relative flex flex-col md:flex-row items-stretch gap-3 rounded-2xl bg-[#161618] border border-white/10 p-2">
          {/* Link Icon / Search Indicator */}
          <div className="flex items-center pl-4 text-white/30 hidden md:flex">
            <Link className={`h-5 w-5 transition-colors ${isValid ? 'text-[#fd1d1d]' : ''}`} />
          </div>

          {/* Actual Input */}
          <input
            type="text"
            id="url-input"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste Instagram video, photo, story, or reels link here..."
            disabled={isLoading}
            className="flex-1 bg-transparent px-4 py-4 md:py-3 text-sm md:text-base text-white placeholder-white/30 outline-none focus:placeholder-white/50 disabled:opacity-50"
          />

          {/* Action cluster inside search bar */}
          <div className="flex items-center gap-1.5 px-2">
            {/* Clear Input */}
            {url && (
              <button
                type="button"
                onClick={clearInput}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-white/40 hover:bg-white/[0.04] hover:text-white transition"
                title="Clear current text"
              >
                <X className="h-4 w-4" />
              </button>
            )}

            {/* Tap to Paste */}
            <button
              type="button"
              onClick={handlePaste}
              disabled={isLoading}
              className="flex items-center gap-1 sm:gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 active:scale-95 px-3 py-2 text-xs font-semibold text-white/70 hover:text-white border border-white/10 transition"
              title="Paste from clipboard"
            >
              <Clipboard className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Paste</span>
            </button>

            {/* Primary Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="relative overflow-hidden flex h-12 md:h-11 items-center justify-center rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] px-7 text-xs sm:text-sm font-bold text-white hover:opacity-95 hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-300 disabled:opacity-50 select-none cursor-pointer"
            >
              <span>{isLoading ? 'Processing...' : 'Download'}</span>
            </button>
          </div>
        </div>
      </form>

      {/* Real-time Inline Helpers / Warnings */}
      {url && (
        <div className="mt-3 flex items-center justify-between px-2 text-xs animate-fade-in">
          {isValid === true ? (
            <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="h-4 w-4" /> Valid Instagram link structure detected!
            </span>
          ) : isValid === false ? (
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <AlertCircle className="h-4 w-4" /> {errorMessage}
            </span>
          ) : null}
          <span className="text-slate-500 hidden sm:inline">Secure CDN Delivery</span>
        </div>
      )}
    </div>
  );
}
