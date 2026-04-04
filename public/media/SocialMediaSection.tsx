import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Play, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from './img1.jpeg';
import img2 from './img2.jpeg';
import img3 from './img3.jpeg';
import img4 from './img4.jpeg';
import img5 from './img5.jpeg';
import img6 from './img6.jpeg';
import img7 from './img7.jpeg';
import img8 from './img8.jpeg';
import img9 from './img9.jpeg';
import img10 from './img10.jpeg';
import img11 from './img11.jpeg';

import vid1 from './vid1.mp4';
import vid2 from './vid2.mp4';
import vid3 from './vid3.mp4';
import vid4 from './vid4.mp4';

const BACKGROUND_IMAGES = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11, img1,
  img2, img3, img4, img5, img6, img7
];

const VIDEOS = [
  {
    id: 1,
    title: "Doing it properly",
    videoUrl: vid1,
    poster: img1,
    igLink: "https://www.instagram.com/reel/DViwbMGETk7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 2,
    title: "La peinture",
    videoUrl: vid2,
    poster: img2,
    igLink: "https://www.instagram.com/reel/DVYn2kAET6p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 3,
    title: "Fresh start",
    videoUrl: vid3,
    poster: img3,
    igLink: "https://www.instagram.com/reel/DVONZCHFBZj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 4,
    title: "Walk-in transformation",
    videoUrl: vid4,
    poster: img4,
    igLink: "https://www.instagram.com/reel/DVPM5wUkaGH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  }
];

export default function SocialMediaSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };

  return (
    <div className="relative w-full min-h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Background Grid - Zooming out animation */}
      <motion.div 
        className="absolute inset-0 z-0 grid grid-cols-3 md:grid-cols-6 gap-2 opacity-60"
        initial={{ scale: 1.3 }}
        animate={{ scale: 1 }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        {BACKGROUND_IMAGES.map((img, i) => (
          <motion.div 
            key={i}
            className="relative w-full h-32 md:h-48 rounded-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.1, zIndex: 10, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <img src={img} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 hover:bg-transparent transition-colors duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Overlay gradient to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-950/40 to-neutral-950/85 z-10 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-md font-medium text-sm mb-6 border border-white/20"
          >
            <Instagram size={16} /> Follow our journey
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            See Our Work in Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 max-w-2xl mx-auto text-lg"
          >
            Get a behind-the-scenes look at how we transform spaces across Montreal.
          </motion.p>
        </div>

        {/* Video Display */}
        <div className="relative">
          {/* Mobile: Carousel with Arrows */}
          <div className="md:hidden relative flex items-center justify-center max-w-sm mx-auto">
            <button 
              onClick={prevSlide}
              className="absolute -left-12 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <VideoCard video={VIDEOS[currentIndex]} index={0} />
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={nextSlide}
              className="absolute -right-12 z-30 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Laptop/Tablet: Grid without Arrows */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, index }: { video: any, index: number, key?: React.Key }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 group hover:border-white/30 transition-colors shadow-2xl"
    >
      {/* Header - Clickable to IG */}
      <a 
        href={video.igLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/10 transition-colors cursor-pointer gap-2"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-rose-500 to-purple-600 p-[2px] shrink-0">
            <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center">
              <Instagram size={14} className="text-white" />
            </div>
          </div>
          <span className="text-white font-medium text-sm truncate">{video.title}</span>
        </div>
        <div className="flex-none">
          <span className="block text-[11px] sm:text-xs text-neutral-400 font-medium px-3 py-1.5 rounded-full bg-white/10 group-hover:bg-white/20 group-hover:text-white transition-colors whitespace-nowrap">
            View on IG
          </span>
        </div>
      </a>

      {/* Video Container */}
      <div 
        className="relative aspect-[9/16] bg-black cursor-pointer overflow-hidden"
        onClick={togglePlay}
      >
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.poster}
          className="w-full h-full object-cover"
          loop
          playsInline
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        
        {/* Play Button Overlay */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform">
              <Play size={24} className="text-white ml-1" fill="currentColor" />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
