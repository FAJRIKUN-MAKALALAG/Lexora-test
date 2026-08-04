import React, { useState } from 'react';
import bg2Img from '../assets/bg2.png';
import box1Img from '../assets/box1.png';
import box2Img from '../assets/box2.png';
import box3Img from '../assets/box3.png';
import box4Img from '../assets/box4.png';
import arrowImg from '../assets/herosection/arrow.png';

const WhatWeDo = () => {
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
    <section className="w-full bg-[#F7F7F7]">
      {/* Upper Content Area with bg2.png (1440x451 ratio) */}
      <div
        className="w-full aspect-[1440/451] min-h-[360px] sm:min-h-[400px] lg:min-h-[451px] py-10 sm:py-12 md:py-16 px-6 sm:px-12 md:px-20 lg:px-28 bg-cover bg-center border-b border-gray-200 flex flex-col justify-center"
        style={{ backgroundImage: `url(${bg2Img})` }}
      >
        <div className="max-w-6xl">
          {/* Eyebrow / Tagline */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-xl sm:text-2xl font-serif text-[#333333] font-bold">“</span>
            <span className="text-[#8B1A1A] font-semibold text-xs sm:text-sm tracking-widest uppercase border-b-2 border-[#8B1A1A] pb-0.5">
              WHAT WE DO
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#222222] uppercase tracking-wide font-oswald mb-6 leading-[1.15] max-w-4xl">
            WE CARRY OUT VARIOUS STATUTORY FUNCTIONS
          </h2>

          {/* Description Paragraph */}
          <p className="text-[#555555] text-xs sm:text-sm md:text-base leading-relaxed max-w-3xl">
            The mission of the Lexora is to serve its members and the public by sustaining an independent bar which upholds the rule of law and ensures access to justice. As part of its mission in ensuring access to justice for the needy, the Lexora has established Pro Bono SG...{' '}
            <button className="text-[#8B735B] font-semibold hover:underline focus:outline-none ml-1 cursor-pointer">
              Read more
            </button>
          </p>
        </div>
      </div>

      {/* 4-Grid Cards Section */}
      <div
        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 border-b border-gray-300"
        onMouseLeave={() => setActiveCardIndex(null)}
      >
        {cards.map((card, idx) => {
          const isActive = activeCardIndex === idx;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setActiveCardIndex(idx)}
              className={`group relative flex flex-col justify-between cursor-pointer transition-all duration-500 overflow-hidden ${
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
                />

                {/* Gradient Overlay for legibility */}
                <div
                  className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                    isActive
                      ? 'bg-gradient-to-t from-[#3E3E3E] via-[#3E3E3E]/70 to-[#3E3E3E]/40 opacity-100'
                      : 'bg-gradient-to-t from-white/90 via-white/50 to-transparent opacity-100'
                  }`}
                />

                {/* Number */}
                <div
                  className={`relative z-10 text-xs font-semibold tracking-wider transition-colors duration-300 mb-6 ${
                    isActive ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  {card.id}
                </div>

                {/* Title & Description */}
                <div className="relative z-10">
                  <h3 className="font-oswald text-2xl sm:text-3xl font-medium uppercase leading-tight mb-2 transition-colors duration-300">
                    {card.title} <br />
                    {card.subtitle}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <p className="text-xs text-gray-200 max-w-[220px] leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Bar / Action */}
              <div
                className={`relative z-10 py-4 px-6 flex items-center border-t transition-all duration-500 ${
                  isActive
                    ? 'bg-[#8B735B] text-white border-[#7A644E] justify-between'
                    : 'bg-[#F9F9F9] text-[#444444] border-gray-200 justify-start'
                }`}
              >
                {isActive ? (
                  <>
                    <span className="font-montserrat text-xs font-bold tracking-widest uppercase animate-fade-in">
                      MORE DETAIL
                    </span>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs opacity-70"></span>
                      <img
                        src={arrowImg}
                        alt="Arrow"
                        className="h-3.5 w-auto object-contain ml-1 transform group-hover:translate-x-1 transition-transform filter brightness-0 invert"
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex items-center space-x-1 text-gray-500 group-hover:text-[#8B1A1A] transition-colors">
                    <span className="text-xs text-gray-400"></span>
                    <img
                      src={arrowImg}
                      alt="Arrow"
                      className="h-3.5 w-auto object-contain transform group-hover:translate-x-1 transition-transform opacity-60 group-hover:opacity-100"
                    />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeDo;
