import React from "react";
import { motion } from "motion/react";

export const Section = ({ children, className = "", innerClassName = "", id, delay = 0 }: { children: React.ReactNode; className?: string; innerClassName?: string; id?: string; delay?: number }) => (
  <section id={id} className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`max-w-7xl mx-auto ${innerClassName}`}
    >
      {children}
    </motion.div>
  </section>
);

export const Card = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10, boxShadow: "0px 15px 30px rgba(0,0,0,0.08)" }}
    className={`p-8 bg-white border border-gray-100 shadow-sm rounded-2xl transition-all ${className}`}
  >
    {children}
  </motion.div>
);
