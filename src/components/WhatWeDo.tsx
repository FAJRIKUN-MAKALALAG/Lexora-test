import React, { useState } from 'react';
import { motion } from 'motion/react';
import bg2Img from '../assets/bg2.png';
import box1Img from '../assets/box1.png';
import box2Img from '../assets/box2.png';
import box3Img from '../assets/box3.png';
import box4Img from '../assets/box4.png';
import arrowImg from '../assets/herosection/arrow.png';

const WhatWeDo: React.FC = () => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const cards = [
    {
      id: '01',
      title: 'Firm Closure',
      subtitle: 'Dates',
      bgImg: box1Img,
      description: 'Important schedule and closure dates for Lexora partners.',
    },
    {
      id: '02',
      title: 'Pro Bono',
      subtitle: 'Services',
      bgImg: box2Img,
      description: 'Lorem ipsum dolor sit amet Lorem ipsum',
    },
    {
      id: '03',
      title: "Members'",
      subtitle: 'Library',
      bgImg: box3Img,
      description: 'Access complete legal archives and publications.',
    },
    {
      id: '04',
      title: 'Specialists',
      subtitle: 'Directory',
      bgImg: box4Img,
      description: 'Find certified specialist lawyers across various disciplines.',
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full bg-[#F7F7F7]"
      aria-labelledby="what-we-do-heading"
    >
      {/* Upper Content Area with bg2.png (1440x451 ratio) */}
      <div
        className="w-full aspect-[1440/451] min-h-[360px] sm:min-h-[400px] lg:min-h-[451px] py-10 sm:py-12 md:py-16 px-6 sm:px-12 md:px-20 lg:px-28 bg-cover bg-center border-b border-gray-200 flex flex-col justify-center"
        style={{ backgroundImage: `url(${bg2Img})` }}
      >
        <div className="max-w-6xl">
          {/* Eyebrow / Tagline */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xl sm:text-2xl font-serif text-[#333333] font-bold" aria-hidden="true">“</span>
            <span className="text-[#8B1A1A] font-semibold text-xs sm:text-sm tracking-widest uppercase border-b-2 border-[#8B1A1A] pb-0.5">
              WHAT WE DO
            </span>
          </div>

          {/* Main Headline */}
          <h2
            id="what-we-do-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#222222] uppercase tracking-wide font-oswald mb-6 leading-[1.15] max-w-4xl"
          >
            WE CARRY OUT VARIOUS STATUTORY FUNCTIONS
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#555555] text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl">
            The mission of the Lexora is to serve its members and the public by sustaining an independent bar which upholds the rule of law and ensures access to justice. As part of its mission in ensuring access to justice for the needy, the Lexora has established Pro Bono SG...{' '}
            <button
              aria-label="Read more about Lexora statutory functions"
              className="text-[#8B735B] font-semibold hover:underline focus:outline-none focus:ring-1 focus:ring-[#8B735B] ml-1 cursor-pointer"
            >
              Read more
            </button>
          </p>
        </div>
      </div>

      {/* 4-Grid Cards Section */}
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 border-b border-gray-300"
        onMouseLeave={() => setActiveCardIndex(null)}
        role="region"
        aria-label="Statutory Functions Features"
      >
        {cards.map((card, idx) => {
          const isActive = activeCardIndex === idx;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setActiveCardIndex(idx)}
              onClick={() => setActiveCardIndex(idx)}
              role="article"
              tabIndex={0}
              aria-label={`Feature ${card.id}: ${card.title} ${card.subtitle}`}
              className={`group relative flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#9E8043] ${
                isActive ? 'bg-[#3E3E3E] text-white shadow-xl' : 'bg-white text-[#222222]'
              }`}
            >
              {/* Card Content Top */}
              <div className="relative p-6 sm:p-8 min-h-[220px] sm:min-h-[260px] md:min-h-[280px] flex flex-col justify-between overflow-hidden">
                {/* Background Image inside card */}
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                    isActive ? 'opacity-35 scale-105' : 'opacity-80 scale-100 group-hover:scale-105'
                  }`}
                  style={{ backgroundImage: `url(${card.bgImg})` }}
                  aria-hidden="true"
                />

                {/* Gradient Overlay for legibility */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive
                      ? 'bg-gradient-to-t from-[#222222] via-[#222222]/80 to-transparent opacity-90'
                      : 'bg-gradient-to-t from-white via-white/40 to-transparent opacity-80'
                  }`}
                  aria-hidden="true"
                />

                {/* ID Badge */}
                <div className="relative z-10">
                  <span
                    className={`font-mono text-xs font-bold tracking-widest px-2.5 py-1 inline-block transition-colors ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-200/80 text-gray-700'
                    }`}
                  >
                    {card.id}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="relative z-10 mt-auto pt-6">
                  <h3
                    className={`font-oswald text-2xl sm:text-3xl md:text-4xl font-normal uppercase leading-none tracking-wide transition-colors ${
                      isActive ? 'text-white' : 'text-[#222222]'
                    }`}
                  >
                    {card.title} <br />
                    <span
                      className={`font-oswald text-2xl sm:text-3xl md:text-4xl font-normal ${
                        isActive ? 'text-[#C5A059]' : 'text-[#8B1A1A]'
                      }`}
                    >
                      {card.subtitle}
                    </span>
                  </h3>
                </div>
              </div>

              {/* Card Bottom Row with arrow */}
              <div
                className={`relative z-10 p-6 sm:p-8 pt-2 flex items-center justify-between transition-colors border-t border-transparent ${
                  isActive ? 'border-white/10' : 'border-gray-100'
                }`}
              >
                <span
                  className={`text-xs sm:text-sm font-sans font-medium line-clamp-1 ${
                    isActive ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {card.description}
                </span>

                <div
                  className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ml-3 ${
                    isActive ? 'bg-[#C5A059] text-white' : 'bg-gray-100 group-hover:bg-[#8B1A1A]'
                  }`}
                >
                  <img
                    src={arrowImg}
                    alt=""
                    aria-hidden="true"
                    className={`h-3 w-auto object-contain transition-all filter ${
                      isActive
                        ? 'brightness-0 invert'
                        : 'brightness-0 group-hover:invert'
                    }`}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default WhatWeDo;
