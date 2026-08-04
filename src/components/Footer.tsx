import React from 'react';
import { motion } from 'motion/react';
import frame12Img from '../assets/Frame12.png';
import rectangle10Img from '../assets/Rectangle10.png';
import logoImg from '../assets/herosection/logo.png';
import arrowImg from '../assets/herosection/arrow.png';
import { Briefcase, Building2, Gavel, Landmark } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full relative bg-[#EBECEE] overflow-visible" role="contentinfo">
      {/* 1. Career Support Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="w-full pt-16 md:pt-20 pb-0 overflow-visible"
      >
        <div className="w-full relative bg-[#E2E5E9] min-h-[200px] md:h-[220px] lg:h-[240px] flex flex-col md:flex-row items-stretch overflow-visible">
          
          {/* Left Content (Light Grey Box) */}
          <div className="w-full md:w-1/2 lg:w-[52%] py-6 sm:py-8 px-6 sm:px-12 md:pl-16 lg:pl-28 flex items-center z-10">
            <div className="flex items-start gap-4 sm:gap-6 max-w-xl">
              {/* Briefcase Icon */}
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 border border-[#9E8043] rounded-sm flex items-center justify-center bg-[#E2E5E9]">
                  <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-[#9E8043]" aria-hidden="true" />
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl md:text-[34px] font-normal font-oswald text-[#1F1F1F] leading-tight tracking-wide mb-1.5">
                  Support for your career growth
                </h3>
                <p className="text-sm sm:text-base text-[#555555] font-sans mb-4">
                  A guidance on career and work related issues
                </p>
                <a
                  href="#career"
                  aria-label="Find career guidance"
                  className="inline-flex items-center gap-2.5 text-[#9E8043] font-semibold text-xs sm:text-sm tracking-widest uppercase hover:underline group focus:outline-none focus:ring-1 focus:ring-[#9E8043]"
                >
                  <span>FIND CAREER</span>
                  <span className="text-xs font-mono tracking-widest text-[#9E8043]" aria-hidden="true">···</span>
                  <img
                    src={arrowImg}
                    alt=""
                    aria-hidden="true"
                    className="h-3 w-auto object-contain transform group-hover:translate-x-1 transition-transform filter brightness-0 sepia-[0.8] hue-rotate-[10deg] saturate-[300%]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side Background with Rectangle10.png over grey background */}
          <div className="w-full md:w-1/2 lg:w-[48%] relative min-h-[220px] md:min-h-full overflow-visible flex items-center justify-end">
            {/* Rectangle10.png behind Frame12.png */}
            <img
              src={rectangle10Img}
              alt=""
              aria-hidden="true"
              className="absolute right-0 top-0 bottom-0 h-full w-full object-cover md:object-fill pointer-events-none z-0"
            />

            {/* Floating Circular Badge Icons (Layer 2 - Middle) */}
            <div className="absolute top-4 left-[12%] md:left-[8%] w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#D4C5A9] shadow-md flex items-center justify-center z-10" aria-hidden="true">
              <Building2 className="w-5 h-5 text-[#8B1A1A]" />
            </div>

            <div className="absolute bottom-6 left-[8%] md:left-[14%] w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#D4C5A9] shadow-md flex items-center justify-center z-10" aria-hidden="true">
              <Gavel className="w-5 h-5 text-[#8B1A1A]" />
            </div>

            <div className="absolute top-1/2 -translate-y-1/2 right-[10%] md:right-[8%] w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#D4C5A9] shadow-md flex items-center justify-center z-10" aria-hidden="true">
              <Landmark className="w-5 h-5 text-[#8B1A1A]" />
            </div>

            {/* Frame12.png Hand with Phone */}
            <div className="absolute right-6 md:right-[157px] -top-14 md:-top-20 bottom-0 z-30 pointer-events-none flex items-end">
              <img
                src={frame12Img}
                alt="Mobile support preview"
                className="h-[280px] sm:h-[320px] md:h-[380px] lg:h-[410px] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>

        </div>
      </motion.div>

      {/* 2. Main Footer (Dark Charcoal Section) */}
      <div className="w-full bg-[#383838] text-white pt-14 pb-8 px-6 sm:px-12 md:px-20 lg:px-28 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Logo Center */}
          <div className="mb-8">
            <img src={logoImg} alt="Lexora Law Partners Logo" className="h-12 sm:h-14 md:h-16 w-auto object-contain" />
          </div>

          {/* Navigation Links */}
          <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-10 gap-y-3 text-[16px] font-montserrat font-normal tracking-widest uppercase text-white/80 mb-10">
            <a href="#faqs" className="hover:text-white transition-colors focus:outline-none focus:underline">FAQS</a>
            <span className="text-white/30" aria-hidden="true">|</span>
            <a href="#advertising" className="hover:text-white transition-colors focus:outline-none focus:underline">ADVERTISING RATES</a>
            <span className="text-white/30" aria-hidden="true">|</span>
            <a href="#terms" className="hover:text-white transition-colors focus:outline-none focus:underline">TERMS OF USE</a>
            <span className="text-white/30" aria-hidden="true">|</span>
            <a href="#privacy" className="hover:text-white transition-colors focus:outline-none focus:underline">PRIVACY POLICY</a>
          </nav>

          {/* Bottom Divider Line */}
          <div className="w-full border-t border-white/10 mb-6" aria-hidden="true" />

          {/* Copyright Row */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 font-sans gap-3">
            <div>
              © Copyright 2025 The Lexora of Singapore. All rights reserved
            </div>
            <div>
              Latest update 26 June 2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
