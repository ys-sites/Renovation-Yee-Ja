import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Instagram, Play, ChevronLeft, ChevronRight } from 'lucide-react';



const BACKGROUND_IMAGES = [
  "/media/1.jpeg", "/media/2.jpeg", "/media/3.jpeg", "/media/4.jpeg", "/media/5.jpeg", "/media/1.jpeg",
  "/media/2.jpeg", "/media/3.jpeg", "/media/4.jpeg", "/media/5.jpeg", "/media/1.jpeg", "/media/2.jpeg",
  "/media/3.jpeg", "/media/4.jpeg", "/media/5.jpeg", "/media/1.jpeg", "/media/2.jpeg", "/media/3.jpeg"
];

const VIDEOS = [
  {
    id: 1,
    title: "Doing it properly",
    videoUrl: "/media/vid1.mp4",
    poster: "/media/3.jpeg",
    igLink: "https://www.instagram.com/reel/DViwbMGETk7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 2,
    title: "La peinture",
    videoUrl: "/media/vid2_new.mp4",
    poster: "/media/4.jpeg",
    igLink: "https://www.instagram.com/reel/DVYn2kAET6p/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 3,
    title: "Fresh start",
    videoUrl: "/media/vid3.mp4",
    poster: "/media/5.jpeg",
    igLink: "https://www.instagram.com/reel/DVONZCHFBZj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  },
  {
    id: 4,
    title: "Walk-in transformation",
    videoUrl: "/media/vid4.mp4",
    poster: "/media/3.jpeg",
    igLink: "https://www.instagram.com/reel/DVPM5wUkaGH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  }
];

export default function SocialMediaSection({ t }: { t: any }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reduce background complexity for mobile
  const rowsCount = isMobile ? 7 : 5;
  const imagesPerRow = isMobile ? 6 : BACKGROUND_IMAGES.length;
  const mobileImages = BACKGROUND_IMAGES.slice(0, imagesPerRow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };

  return (
    <div className="relative w-full min-h-[70vh] overflow-hidden flex items-center justify-center">
      {/* Background Grid - Animated Rows */}
      <div className="absolute inset-0 z-0 flex flex-col gap-2 opacity-30 will-change-transform overflow-hidden">
        {/* Animated Rows */}
        {[...Array(rowsCount)].map((_, rowIndex) => (
          <motion.div 
            key={rowIndex}
            className="flex gap-2 will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 60 + (rowIndex * 10), 
              ease: "linear", 
              repeat: Infinity 
            }}
          >
            {[...(isMobile ? mobileImages : BACKGROUND_IMAGES), ...(isMobile ? mobileImages : BACKGROUND_IMAGES)].map((img, i) => (
              <div key={i} className="w-48 h-36 md:w-64 md:h-48 rounded-lg overflow-hidden shrink-0">
                <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>

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
            {t.transformation.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-300 max-w-2xl mx-auto text-lg"
          >
            {t.transformation.subtitle}
          </motion.p>
        </div>

        {/* Video Display */}
        <div className="relative">
          {/* Mobile: Carousel with Arrows */}
          <div className="md:hidden relative flex items-center justify-center max-w-sm mx-auto">
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-30 w-10 h-16 flex items-center justify-center bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all rounded-r-full"
            >
              <ChevronLeft size={24} className="mr-1" />
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
                  <VideoCard video={VIDEOS[currentIndex]} index={0} t={t} />
                </motion.div>
              </AnimatePresence>
            </div>

            <button 
              onClick={nextSlide}
              className="absolute right-0 z-30 w-10 h-16 flex items-center justify-center bg-black/60 backdrop-blur-md text-white hover:bg-black/80 transition-all rounded-l-full"
            >
              <ChevronRight size={24} className="ml-1" />
            </button>
          </div>

          {/* Laptop/Tablet: Grid without Arrows */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {VIDEOS.map((video, index) => (
              <VideoCard key={video.id} video={video} index={index} t={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function VideoCard({ video, index, t }: { video: any, index: number, key?: React.Key, t: any }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayPending, setIsPlayPending] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current || isPlayPending) return;

    if (!videoRef.current.paused) {
      videoRef.current.pause();
    } else {
      setIsPlayPending(true);
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlayPending(false);
          })
          .catch(error => {
            console.log("Playback prevented:", error);
            setIsPlayPending(false);
          });
      } else {
        setIsPlayPending(false);
      }
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
            {t.transformation.viewOnIg || "View on IG"}
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
          preload="none"
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
