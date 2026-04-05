/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, CheckCircle, Star, Phone, Mail, MapPin, ChevronDown, Instagram, Clock, ShieldCheck, Sparkles, Facebook, Quote, ChevronLeft, ChevronRight, Globe, Home } from "lucide-react";
import { translations } from "./translations";


// Error Boundary Component
interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-neutral-50 p-4 text-center">
          <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-4">Something went wrong</h2>
            <p className="text-neutral-600 mb-6">The application encountered an unexpected error. Please try refreshing the page.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-colors"
            >
              Refresh Page
            </button>
            {import.meta.env.DEV && (
              <pre className="mt-6 p-4 bg-neutral-100 rounded text-left text-xs overflow-auto max-h-40">
                {this.state.error?.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}



const Section = ({ children, className = "", innerClassName = "", id, delay = 0 }: { children: React.ReactNode; className?: string; innerClassName?: string; id?: string; delay?: number }) => (
  <section id={id} className={`py-20 px-6 ${className}`}>
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`max-w-6xl mx-auto ${innerClassName}`}
    >
      {children}
    </motion.div>
  </section>
);


const Logo = ({ className = "" }: { className?: string }) => (
  <Home className={`text-primary ${className}`} strokeWidth={2.5} />
);

const Card = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number; key?: React.Key }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(0,0,0,0.08)" }}
    className={`p-8 bg-white border border-neutral-200 shadow-sm rounded-2xl transition-all ${className}`}
  >
    {children}
  </motion.div>
);

const BeforeAfterSlider = ({ before, after, t }: { before: string; after: string; t: any }) => {
  const [sliderPos, setSliderPos] = React.useState(50);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const position = ((clientX - container.left) / container.width) * 100;
    setSliderPos(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <div 
      ref={containerRef}
      className="relative w-full aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-3xl cursor-col-resize select-none border-4 border-white shadow-2xl"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img 
          src={before} 
          alt="Before" 
          className="absolute inset-0 w-full h-full object-cover" 
          loading="lazy"
        />
      </div>

      <div 
        className="absolute inset-y-0 w-0.5 bg-white z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
          <div className="flex gap-1.5">
            <div className="w-1 h-4 bg-neutral-400 rounded-full" />
            <div className="w-1 h-4 bg-neutral-400 rounded-full" />
          </div>
        </div>
      </div>
      
      <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] z-20 border border-white/20">{t.transformation.before}</div>
      <div className="absolute top-6 right-6 bg-primary/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] z-20 border border-white/20">{t.transformation.after}</div>
    </div>
  );
};

const BeforeAfterGallery = ({ t }: { t: any }) => {
  const projects = [
    { before: "/media/before1.jpeg", after: "/media/after1.jpeg" },
    { before: "/media/before2.jpeg", after: "/media/after2.jpeg" },
    { before: "/media/before3.jpg", after: "/media/after3.jpeg" },
    { before: "/media/before4.jpeg", after: "/media/after4.jpeg" },
    { before: "/media/before5.jpeg", after: "/media/after5.jpeg" },
    { before: "/media/before6.jpeg", after: "/media/after6.jpeg" },
    { before: "/media/before7.jpeg", after: "/media/after7.jpeg" },
    { before: "/media/before8.jpeg", after: "/media/after8.jpeg" },
    { before: "/media/before9.jpeg", after: "/media/after9.jpeg" },
  ];

  const [startIndex, setStartIndex] = React.useState(0);
  const [windowWidth, setWindowWidth] = React.useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isDesktop = windowWidth >= 768;
  const itemsPerPage = isDesktop ? 3 : 1;

  return (
    <Section id="portfolio" className="bg-neutral-50 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{t.transformation.title}</h2>
          <p className="text-neutral-600 max-w-xl">{t.transformation.subtitle}</p>
        </motion.div>
        <div className="flex gap-4">
          <button 
            onClick={() => setStartIndex(prev => Math.max(prev - 1, 0))} 
            className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center transition-all active:scale-95 hover:bg-red-600 hover:shadow-lg"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => setStartIndex(prev => Math.min(prev + 1, projects.length - itemsPerPage))} 
            className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center transition-all active:scale-95 hover:bg-red-600 hover:shadow-lg"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Laptop/Tablet/Mobile: Carousel */}
      <div className="relative w-full">
        <div className="overflow-hidden px-4 md:px-0">
          <motion.div 
            className="flex"
            animate={{ x: `-${startIndex * (100 / itemsPerPage)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {projects.map((project, idx) => (
              <div key={idx} className={`flex-shrink-0 px-2 md:px-3 ${isDesktop ? 'w-1/3' : 'w-full'}`}>
                <div className="max-w-md mx-auto md:max-w-none">
                  <BeforeAfterSlider before={project.before} after={project.after} t={t} />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default function App() {
  return (
    <ErrorBoundary>
      <AppContent />
    </ErrorBoundary>
  );
}

function AppContent() {
  const [lang, setLang] = React.useState<'en' | 'fr'>('en');
  const t = translations[lang];

  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    details: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('https://services.leadconnectorhq.com/hooks/o7aUwpKbtkP4AOP0pEjC/webhook-trigger/c66736a7-834c-4043-b1b0-17c60adcb344', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      setStatus('success');
      setFormData({ fullName: '', phone: '', email: '', city: '', service: '', details: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <main className="bg-white text-neutral-900 min-h-screen selection:bg-primary selection:text-white scroll-smooth">
      {/* Navbar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50"
      >
        <nav className="bg-white border border-neutral-200/50 rounded-full px-3 py-2 flex items-center justify-between shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="flex items-center gap-6">
            <a href="#" className="pl-3 flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Logo className="w-6 h-6" />
              <span className="text-lg font-bold tracking-tight text-neutral-900 whitespace-nowrap">Renovation Yee Ja</span>
            </a>
            
            <div className="hidden lg:flex items-center bg-neutral-100/50 rounded-full p-1 gap-1">
              <a 
                href="#hero" 
                className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#E0E0FF] text-neutral-900 shadow-sm transition-all"
              >
                {t.nav.home}
              </a>
              <a 
                href="#services" 
                className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-all"
              >
                {t.nav.services}
              </a>
              <a 
                href="#process" 
                className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-all"
              >
                {t.nav.process}
              </a>
              <a 
                href="#testimonials" 
                className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-all"
              >
                {t.nav.reviews}
              </a>
              <a 
                href="#portfolio" 
                className="px-4 py-1.5 rounded-full text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-all"
              >
                Portfolio
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-neutral-100/50 rounded-full p-1 mr-2">
              <button 
                onClick={() => setLang('en')} 
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${lang === 'en' ? 'bg-white text-primary shadow-sm' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('fr')} 
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold transition-all ${lang === 'fr' ? 'bg-white text-primary shadow-sm' : 'text-neutral-400 hover:text-neutral-600'}`}
              >
                FR
              </button>
            </div>
            
            <a href="#contact" className="hidden sm:flex bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-rose-700 transition-all text-sm items-center gap-2 shadow-lg shadow-primary/20">
              {t.nav.getQuote} <ArrowRight size={16} />
            </a>
          </div>
        </nav>
      </motion.div>

      {/* Hero - Attention & Intent */}
      <Section id="hero" className="pt-32 pb-24 text-center relative overflow-hidden min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <motion.div 
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            style={{
              backgroundImage: `url('/media/hero.jpeg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white font-medium text-xs sm:text-sm mb-6 sm:mb-8 backdrop-blur-md border border-white/20"
          >
            <Star size={14} className="fill-white text-white" /> {t.hero.badge}
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 sm:mb-8 text-white drop-shadow-2xl leading-[1.1] max-w-4xl mx-auto"
          >
            {t.hero.title}
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto font-medium drop-shadow-lg leading-relaxed"
          >
            {t.hero.subtitle}
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <a href="#contact" className="bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:bg-red-600 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1">
              {t.hero.cta} <ArrowRight size={18} />
            </a>
            <p className="text-xs sm:text-sm text-white/80 font-semibold flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-sm">
              <Clock size={12} /> {t.hero.consultation}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Services */}
      <Section id="services">
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 tracking-tight">{t.services.title}</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base">{t.services.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4">
          {t.services.items.map((item: string, i: number) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-neutral-100 hover:border-primary/30 hover:shadow-md transition-all group relative overflow-hidden flex flex-col items-start gap-4"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="bg-primary/10 p-3 rounded-2xl text-primary group-hover:scale-110 transition-transform">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold relative z-10 leading-tight">{item}</h3>
            </motion.div>
          ))}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 lg:col-span-3 bg-primary text-white rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-center md:items-start relative overflow-hidden gap-6 mt-4"
          >
            <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
              <ShieldCheck size={200} />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-3">{t.services.cta.title}</h3>
              <p className="text-white/80 max-w-md text-base sm:text-lg">{t.services.cta.subtitle}</p>
            </div>
            <a href="#contact" className="relative z-10 bg-white text-primary px-8 py-4 rounded-full font-bold text-base hover:bg-neutral-50 transition-colors flex items-center gap-2 shrink-0">
              {t.services.cta.button} <ArrowRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* Social Proof */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-center gap-8 opacity-80"
        >
          <p className="text-neutral-500 font-medium text-sm uppercase tracking-widest">{t.services.socialProof}</p>
          <div className="flex -space-x-3">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
            ].map((img, i) => (
              <img key={i} src={img} alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-xs font-bold text-neutral-600">
              +50
            </div>
          </div>
          <div className="flex items-center gap-2 text-neutral-600 font-medium">
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-lg">5.0</span>
          </div>
        </motion.div>
      </Section>

      {/* Process - Validating the Next Action */}
      <Section id="process" className="bg-neutral-950 text-white">
        <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">{t.process.title}</h2>
        <p className="text-neutral-400 text-center mb-16 max-w-2xl mx-auto">{t.process.subtitle}</p>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-neutral-800 -translate-y-1/2 z-0"></div>
          
          {t.process.steps.map((item, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center bg-neutral-950 p-6">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 ring-8 ring-neutral-950">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Why Choose KA - Side by Side */}
      <Section id="about" className="!py-0 !px-0" innerClassName="!max-w-none !mx-0">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Image Side */}
          <div className="relative h-[400px] md:h-auto w-full">
            {/* Mobile Image: Colors when in view */}
            <motion.img 
              src="/media/ka.png" 
              alt="Professional Painter" 
              initial={{ filter: "grayscale(100%) brightness(105%) contrast(105%)" }}
              whileInView={{ filter: "grayscale(0%) brightness(100%) contrast(100%)" }}
              viewport={{ margin: "-20% 0px -20% 0px" }}
              className="w-full h-full object-cover md:hidden transition-all duration-700"
            />
            {/* Desktop Image: Colors on hover */}
            <img 
              src="/media/ka.png" 
              alt="Professional Painter" 
              className="hidden md:block w-full h-full object-cover grayscale brightness-105 contrast-105 hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Content Side */}
          <div className="bg-neutral-900 text-white p-12 md:p-20 lg:p-24 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight whitespace-nowrap">{t.about.title}</h2>
            <p className="text-xl font-medium mb-8 text-white/80">{t.about.subtitle}</p>
            
            <p className="mb-8 text-white/70 leading-relaxed text-lg">
              {t.about.desc}
            </p>
            
            <ul className="space-y-4 mb-10">
              {t.about.points.map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-white/90 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <p className="mb-10 text-white/90 font-medium text-lg">
              <span className="underline underline-offset-4 decoration-primary">{t.about.goal.split(':')[0]}</span>: {t.about.goal.split(':')[1]}
            </p>
            
            <div>
              <a href="#contact" className="inline-block bg-primary text-white px-8 py-4 font-bold hover:bg-red-600 transition-colors rounded-sm">
                {t.about.cta}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Before/After Gallery */}
      <BeforeAfterGallery t={t} />

      {/* Proof - Validating the Outcome */}
      <Section id="testimonials" className="overflow-hidden">
        <h2 className="text-4xl font-bold mb-4 text-center tracking-tight">{t.testimonials.title}</h2>
        <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto">{t.testimonials.subtitle}</p>
        
        <div className="relative w-full py-4">
          <motion.div 
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          >
            {[...t.testimonials.items, ...t.testimonials.items].map((testimonial, i) => (
              <div key={i} className="w-[350px] md:w-[400px] shrink-0">
                <Card className="h-full flex flex-col justify-between bg-neutral-50 border-none !p-8 relative">
                  <div className="absolute bottom-6 right-6 text-primary/10 font-serif text-8xl leading-none select-none pointer-events-none">
                    <Quote size={80} className="text-primary/10" />
                  </div>
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, j) => <Star key={j} size={18} className="fill-yellow-400 text-yellow-400" />)}
                    </div>
                    <p className="text-neutral-700 italic mb-8 leading-relaxed text-lg">"{testimonial.text}"</p>
                  </div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-neutral-200 rounded-full overflow-hidden flex items-center justify-center shrink-0">
                      <svg className="w-8 h-8 text-neutral-400 mt-2" fill="currentColor" viewBox="0 0 24 24"><path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                    <div>
                      <p className="font-bold text-neutral-900">{testimonial.name}</p>
                      <p className="text-sm text-neutral-500">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Frictionless CTA Form */}
      <Section id="contact" className="bg-neutral-50 border-y border-neutral-100 relative overflow-hidden group/main">
        {/* Background Images with Fade */}
        <div className="absolute inset-0 z-0 pointer-events-auto">
          <div className="grid grid-cols-6 grid-rows-6 h-full">
            {[
              "/media/1.jpeg", "/media/2.jpeg", "/media/3.jpeg", "/media/4.jpeg", "/media/1.jpeg", "/media/2.jpeg",
              "/media/3.jpeg", "/media/4.jpeg", "/media/1.jpeg", "/media/2.jpeg", "/media/3.jpeg", "/media/4.jpeg",
              "/media/1.jpeg", "/media/2.jpeg", "/media/3.jpeg", "/media/4.jpeg", "/media/1.jpeg", "/media/2.jpeg",
              "/media/3.jpeg", "/media/4.jpeg", "/media/1.jpeg", "/media/2.jpeg", "/media/3.jpeg", "/media/4.jpeg",
              "/media/1.jpeg", "/media/2.jpeg", "/media/3.jpeg", "/media/4.jpeg", "/media/1.jpeg", "/media/2.jpeg",
              "/media/3.jpeg", "/media/4.jpeg", "/media/1.jpeg", "/media/2.jpeg", "/media/3.jpeg", "/media/4.jpeg"
            ].map((img, i) => (
              <div key={i} className="relative group/item">
                <img src={img} alt="" className="w-full h-full object-cover opacity-5 group-hover/main:blur-sm group-hover/main:opacity-10 transition-all duration-500" />
                <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/item:opacity-100 group-hover/item:blur-0 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto relative z-10 px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-3 tracking-tight">{t.contact.title}</h2>
            <p className="text-neutral-600 text-base md:text-lg">{t.contact.subtitle}</p>
          </div>
          
          <Card className="!p-6 md:!p-10 shadow-xl shadow-neutral-200/50 border-none">
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} md-size={40} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{t.contact.form.success.title}</h3>
                <p className="text-neutral-600 mb-8 text-sm md:text-base">{t.contact.form.success.desc}</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-primary font-bold hover:underline"
                >
                  {t.contact.form.success.button}
                </button>
              </motion.div>
            ) : (
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-neutral-900">{t.contact.form.name} *</label>
                    <input 
                      type="text" 
                      className="w-full px-3 md:px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-sm md:text-base" 
                      placeholder="Jean Francois" 
                      required 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-neutral-900">{t.contact.form.phone} *</label>
                    <input 
                      type="tel" 
                      className="w-full px-3 md:px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-sm md:text-base" 
                      placeholder="(438) 990-5160" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-neutral-900">{t.contact.form.email} *</label>
                      <input 
                        type="email" 
                        className="w-full px-3 md:px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-sm md:text-base" 
                        placeholder="jean@example.com" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-neutral-900">{t.contact.form.city} *</label>
                      <input 
                        type="text" 
                        className="w-full px-3 md:px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-sm md:text-base" 
                        placeholder="Montreal" 
                        required 
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-neutral-900">{t.contact.form.serviceLabel} *</label>
                  <select 
                    className="w-full px-3 md:px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white appearance-none text-sm md:text-base" 
                    required 
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="" disabled>{t.contact.form.servicePlaceholder}</option>
                    {t.contact.services.map((option, i) => (
                      <option key={i}>{option}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-neutral-900">{t.contact.form.details} (Optional)</label>
                  <textarea 
                    className="w-full px-3 md:px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-white text-sm md:text-base" 
                    rows={3} 
                    placeholder={t.contact.form.detailsPlaceholder}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  ></textarea>
                </div>
                
                {status === 'error' && (
                  <p className="text-red-500 text-xs md:text-sm font-medium">{t.contact.form.error}</p>
                )}

                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-white font-bold text-base md:text-lg py-4 md:py-5 rounded-xl hover:bg-rose-700 transition-all mt-2 md:mt-4 flex justify-center items-center gap-2 shadow-lg shadow-primary/20 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? t.contact.form.sending : t.contact.form.submit} <ArrowRight size={18} md-size={20} />
                </button>
                <p className="text-center text-[10px] md:text-xs text-neutral-500 mt-3 md:mt-4 flex items-center justify-center gap-1.5">
                  <ShieldCheck size={12} md-size={14} /> {t.contact.form.secure}
                </p>
              </form>
            )}
          </Card>
        </div>
      </Section>


      {/* Footer */}
      <footer className="bg-neutral-950 text-neutral-400 py-12 border-t border-neutral-900">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12"
        >
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col gap-6 md:max-w-sm">
            <div className="text-white flex items-center gap-3">
              <Logo className="w-8 h-8" />
              <span className="text-xl font-bold tracking-tight">Renovation Yee Ja</span>
            </div>
            <p className="leading-relaxed text-neutral-400 text-sm">{t.footer.desc}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12 md:gap-16 lg:gap-24">
            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">{t.footer.links}</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#hero" className="hover:text-primary transition-colors">{t.nav.home}</a></li>
                <li><a href="#services" className="hover:text-primary transition-colors">{t.nav.services}</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">{t.nav.contact || 'Contact'}</a></li>
              </ul>
            </div>

            {/* Column 3: Contact Us */}
            <div>
              <h4 className="text-white font-bold mb-6">{t.footer.contact}</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                  <span className="whitespace-pre-line">{t.footer.location}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span>+1 (438) 990-5160</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span>{t.footer.hours.week}</span>
                    <span>{t.footer.hours.sat}</span>
                    <span>{t.footer.hours.sun}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-neutral-900 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>{t.footer.rights}</p>
        </div>
      </footer>

      {/* Floating Call Button */}
      <motion.a
        href="tel:4389905160"
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-4 right-4 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-red-600 transition-colors group"
        aria-label="Call Renovation Yee Ja"
      >
        <Phone size={24} className="group-hover:animate-bounce" />
        <span className="absolute right-full mr-4 bg-white text-neutral-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-neutral-100">
          {t.floatingCall} +1 (438) 990-5160
        </span>
      </motion.a>
    </main>
  );
}
