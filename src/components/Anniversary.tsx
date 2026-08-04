import React, { useState } from 'react';
import anniversaryBg from '../assets/aniversarybg.png';
import redLog from '../assets/redlog.png';
import paperImg from '../assets/herosection/paper.png';
import paper2Img from '../assets/paper2.png';
import rectangle6Img from '../assets/Rectangle6.png';

const Anniversary = () => {
  const [activeYear, setActiveYear] = useState<'2025' | '2026' | '2027'>('2025');

  const yearData = {
    '2025': {
      title: 'A new beginning - Laying the groundwork for our future',
      description:
        "As we embark on our journey towards LawSoc's 60th anniversary, 2025 marks the beginning of our refreshed digital presence. This year, we're reimagining how we connect with members — through new digital tools, enhanced services, and stories from the legal community.",
    },
    '2026': {
      title: 'Expanding capabilities - Building momentum for tomorrow',
      description:
        'Continuing our path towards the milestone, 2026 focuses on expanding our legal support networks, delivering enhanced member resources, and introducing next-generation educational initiatives across all legal practices.',
    },
    '2027': {
      title: 'Celebrating 60 years - Honoring legacy and envisioning the future',
      description:
        'The culmination of our 60th anniversary celebration in 2027 marks six decades of advocacy, legal excellence, and unwavering service to society as we shape the future of the legal profession.',
    },
  };

  return (
    <section className="relative w-full bg-[#FAFAFA] overflow-hidden">
      {/* 1. Top Hero/Video Banner with aniversarybg.png (1440x692 ratio) */}
      <div className="relative w-full aspect-[1440/692] min-h-[420px] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[692px] px-4 sm:px-8 bg-black/60 overflow-hidden flex flex-col items-center justify-center">
        {/* Background photo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[30%] pointer-events-none"
          style={{ backgroundImage: `url(${anniversaryBg})` }}
        />

        {/* Center 60th Anniversary Banner */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex items-center justify-center">
          {/* Red banner background (redlog.png) */}
          <img
            src={redLog}
            alt="Red Banner background"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] sm:w-[85%] md:w-[78%] h-auto max-h-[70px] sm:max-h-[90px] object-fill pointer-events-none shadow-md"
          />

          {/* Banner Text Container */}
          <div className="relative z-10 flex items-center justify-center space-x-2 sm:space-x-4 md:space-x-6 px-4">
            {/* CELEBRATING */}
            <span className="font-oswald text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium uppercase text-white tracking-wider sm:tracking-widest">
              CELEBRATING
            </span>

            {/* 60 Number */}
            <span className="font-oswald text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white leading-none px-1 drop-shadow-md">
              60
            </span>

            {/* Right side: TH + ANNIVERSARY */}
            <div className="flex flex-col items-start justify-center">
              <span className="font-oswald text-xs sm:text-sm md:text-base font-bold uppercase text-white tracking-widest leading-none mb-0.5 sm:mb-1">
                TH
              </span>
              <span className="font-oswald text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium uppercase text-white tracking-wider sm:tracking-widest leading-none">
                ANNIVERSARY
              </span>
            </div>
          </div>
        </div>

        {/* Play Video Button */}
        <div className="relative z-10 mt-8 sm:mt-12 flex flex-col items-center cursor-pointer group">
          <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#8B735B] group-hover:bg-[#76614b] flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
            {/* Play triangle icon */}
            <div className="w-0 h-0 border-y-[6px] sm:border-y-[8px] border-y-transparent border-l-[10px] sm:border-l-[14px] border-l-white ml-1" />
          </div>
          <span className="text-white text-[10px] sm:text-xs font-montserrat font-bold tracking-[0.2em] uppercase mt-2.5 opacity-90 group-hover:opacity-100 transition-opacity">
            PLAY VIDEO
          </span>
        </div>

        {/* Torn Paper Edge at the bottom of top banner */}
        <div className="absolute bottom-0 -left-[2%] -right-[2%] w-[104%] z-20 pointer-events-none overflow-hidden">
          <img
            src={paperImg}
            alt="Torn Paper Edge"
            className="w-full max-w-none h-auto block translate-y-[37.5%] scale-x-105"
          />
        </div>
      </div>

      {/* 2. Lower Content Area (White background with paper2.png on top right) */}
      <div className="relative w-full pt-16 sm:pt-20 md:pt-24 pb-12 sm:pb-16 px-6 sm:px-12 md:px-20 lg:px-28">
        {/* Paper2 background texture positioned top right right after paper.png */}
        <img
          src={paper2Img}
          alt="Paper texture background"
          className="absolute top-0 right-0 w-2/3 sm:w-1/2 md:w-5/12 max-w-[550px] h-auto pointer-events-none opacity-80 object-contain object-right-top z-0"
        />

        {/* Main Header Text */}
        <div className="relative z-10 max-w-4xl mb-12 sm:mb-16">
          {/* Eyebrow */}
          <div className="inline-block mb-3 sm:mb-4">
            <span className="text-[#8B1A1A] font-semibold text-xs sm:text-sm tracking-widest uppercase border-b-2 border-[#8B1A1A] pb-0.5">
              ROAD TO 2027
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-[#222222] uppercase tracking-wide font-oswald leading-[1.12]">
            CELEBRATING A LEGACY, <br />
            JOURNEYING TO THE FUTURE
          </h2>
        </div>

        {/* Thin Divider Line */}
        <div className="relative z-10 w-full border-t border-gray-300 mb-10 sm:mb-14" />

        {/* 3. Timeline & Image Section (Rectangle6.png + 2025/2026/2027 tabs) */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch mb-20 sm:mb-28">
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <img
              src={rectangle6Img}
              alt="Law scales and gavel"
              className="w-full h-auto object-cover rounded-none shadow-sm"
            />
          </div>

          {/* Right Column: Timeline details */}
          <div className="lg:col-span-6 flex flex-col justify-between py-1">
            {/* Year Selector Tabs - Upper Right */}
            <div className="flex items-center justify-end space-x-3 text-3xl sm:text-4xl md:text-5xl font-oswald font-bold tracking-tight mb-8 select-none">
              {(['2025', '2026', '2027'] as const).map((year, idx) => (
                <React.Fragment key={year}>
                  {idx > 0 && <span className="text-gray-300 font-light text-2xl sm:text-3xl">·</span>}
                  <button
                    onClick={() => setActiveYear(year)}
                    className={`transition-colors duration-200 focus:outline-none ${
                      activeYear === year
                        ? 'text-[#9E8043]'
                        : 'text-gray-300 hover:text-gray-500'
                    }`}
                  >
                    {year}
                  </button>
                </React.Fragment>
              ))}
            </div>

            {/* Active Year Content */}
            <div className="mt-auto">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 font-sans leading-snug">
                {yearData[activeYear].title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans max-w-xl">
                {yearData[activeYear].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Anniversary;
