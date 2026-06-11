/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type DownloadType = 'video' | 'photo' | 'story' | 'reel';

export interface MediaItem {
  id: string;
  url: string;
  previewUrl: string;
  type: 'video' | 'photo';
  quality: string;
  size: string;
}

export interface InstagramMediaResult {
  id: string;
  username: string;
  userAvatar: string;
  isVerified: boolean;
  caption: string;
  likes: string;
  comments: string;
  timeAgo: string;
  type: DownloadType;
  mediaList: MediaItem[];
  sourceUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FeatureCard {
  id: DownloadType;
  title: string;
  description: string;
  iconName: string;
  placeholderUrl: string;
  sampleLinks: string[];
}
