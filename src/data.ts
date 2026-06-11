/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { InstagramMediaResult, FaqItem, FeatureCard } from './types';

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq1',
    question: 'How do I download Instagram videos or photos using this tool?',
    answer: 'Simply copy the video, photo, story, or reel URL from the Instagram app or website, paste it into the search bar above, and click "Download". Our system will process the link and generate high-speed download links immediately.'
  },
  {
    id: 'faq2',
    question: 'Is it free to download Instagram stories and reels?',
    answer: 'Yes! Our downloader is 100% free with unlimited downloads. You do not need to register, log in, or install any external third-party software or extensions.'
  },
  {
    id: 'faq3',
    question: 'What qualities and formats are supported?',
    answer: 'We support high-definition downloads. Videos are saved in standard MP4 format (usually in 720p or 1080p resolution). Photos and story frames are saved in high-resolution JPG/PNG format for maximum clarity on any viewport.'
  },
  {
    id: 'faq4',
    question: 'Can I download videos from private Instagram accounts?',
    answer: 'Due to privacy regulations and security policies, our online downloader can only process media files hosted on public Instagram accounts. Content from private accounts cannot be accessed or parsed.'
  },
  {
    id: 'faq5',
    question: 'Where do the downloaded media files get saved?',
    answer: 'By default, your operating system and web browser will save files in your native "Downloads" directory. On iOS (iPhone/iPad), you may be prompted to preview the image/video and tap "Save Image" or "Save to Files" to download to your camera roll.'
  }
];

export const FEATURE_CARDS: FeatureCard[] = [
  {
    id: 'video',
    title: 'Instagram Video',
    description: 'Download standard feed videos in full high-definition MP4 format with audio tracks retained.',
    iconName: 'Play',
    placeholderUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=600',
    sampleLinks: [
      'https://www.instagram.com/p/C9o_X32M4aP/',
      'https://www.instagram.com/p/CzYp_91Lg8x/'
    ]
  },
  {
    id: 'photo',
    title: 'Photos (Carousel)',
    description: 'Save single posts or batch save complete slide carousels of multiple high-resolution photos.',
    iconName: 'Image',
    placeholderUrl: 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?auto=format&fit=crop&q=80&w=600',
    sampleLinks: [
      'https://www.instagram.com/p/C39_m86oLe9/',
      'https://www.instagram.com/p/DBxy-v2P8cZ/'
    ]
  },
  {
    id: 'story',
    title: 'Stories Highlight',
    description: 'Fetch and save active 24-hour stories or profile highlights before they expire.',
    iconName: 'Sparkles',
    placeholderUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=600',
    sampleLinks: [
      'https://www.instagram.com/stories/highlights/17983642901/',
      'https://www.instagram.com/stories/cristiano/'
    ]
  },
  {
    id: 'reel',
    title: 'Insta Reels',
    description: 'Extract Instagram Reels with cinematic soundtracks and original high-fps quality.',
    iconName: 'Film',
    placeholderUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600',
    sampleLinks: [
      'https://www.instagram.com/reel/C8rP9pXoyZl/',
      'https://www.instagram.com/reel/C7-M76xsm9P/'
    ]
  }
];

export const MOCK_RESULTS: Record<string, InstagramMediaResult> = {
  // Video Mock
  'video-sample': {
    id: 'm_vid_1',
    username: 'wanderlust_globe',
    userAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150',
    isVerified: true,
    caption: 'Lost in the magical peak reflections of the Swiss Alps. 🇨🇭🏔️ Heavy snow and crisp blue skies make it a absolute winter fairy tale! #travel #switzerland #alps #mountains #exploration',
    likes: '48,251',
    comments: '1,280',
    timeAgo: '2 Days Ago',
    type: 'video',
    sourceUrl: 'https://www.instagram.com/p/C9o_X32M4aP/',
    mediaList: [
      {
        id: 'mv1',
        url: 'https://assets.mixkit.co/videos/preview/mixkit-beautiful-aerial-shot-of-snowy-mountains-and-a-frozen-lake-43093-large.mp4',
        previewUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800',
        type: 'video',
        quality: 'MP4 1080p (HQ)',
        size: '14.2 MB'
      }
    ]
  },
  // Photos / Carousel Mock
  'photo-sample': {
    id: 'm_photo_1',
    username: 'tokyo_neon',
    userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
    isVerified: false,
    caption: 'Neon alleyways of Shinjuku and Shibuya after a heavy spring shower. 🌃☔ Swipe for the full moody atmosphere. Which lighting do you prefer? #tokyo #streetphotography #neonvibes #japan',
    likes: '8,429',
    comments: '342',
    timeAgo: '5 Hours Ago',
    type: 'photo',
    sourceUrl: 'https://www.instagram.com/p/C39_m86oLe9/',
    mediaList: [
      {
        id: 'mp1',
        url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=1200',
        previewUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&q=80&w=500',
        type: 'photo',
        quality: 'JPEG 1440p (High Res)',
        size: '2.4 MB'
      },
      {
        id: 'mp2',
        url: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=1200',
        previewUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?auto=format&fit=crop&q=80&w=500',
        type: 'photo',
        quality: 'JPEG 1440p (High Res)',
        size: '1.9 MB'
      },
      {
        id: 'mp3',
        url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1200',
        previewUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=500',
        type: 'photo',
        quality: 'JPEG 1440p (High Res)',
        size: '1.7 MB'
      }
    ]
  },
  // Stories Mock
  'story-sample': {
    id: 'm_story_1',
    username: 'pastry_chef_julie',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    isVerified: true,
    caption: 'Morning baking ritual: fresh glazed match raspberries croissants! 🥐🍓 Still sizzling out the stone hearth. Tap the bio for recipe secrets!',
    likes: 'Active Story',
    comments: '2 hours remaining',
    timeAgo: '22h Ago',
    type: 'story',
    sourceUrl: 'https://www.instagram.com/stories/pastry_chef_julie/',
    mediaList: [
      {
        id: 'ms1',
        url: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1200',
        previewUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=500',
        type: 'photo',
        quality: 'JPEG 1080p (Full HD)',
        size: '1.1 MB'
      }
    ]
  },
  // Reels Mock
  'reel-sample': {
    id: 'm_reel_1',
    username: 'fitness_gains_hq',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150',
    isVerified: true,
    caption: 'Core burning tabata finisher! do these 4 exercises for 40 seconds on, 20 seconds off. Save the routine and beat your dynamic best! 🏋️‍♂️🔥 #tabata #reels #homeworkout #corestrength #cardio',
    likes: '1.2M Likes',
    comments: '8,419',
    timeAgo: '4 Days Ago',
    type: 'reel',
    sourceUrl: 'https://www.instagram.com/reel/C8rP9pXoyZl/',
    mediaList: [
      {
        id: 'mr1',
        url: 'https://assets.mixkit.co/videos/preview/mixkit-woman-doing-jumping-jacks-training-in-nature-41589-large.mp4',
        previewUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800',
        type: 'video',
        quality: 'Reel MP4 1080p (HD)',
        size: '18.9 MB'
      }
    ]
  }
};
