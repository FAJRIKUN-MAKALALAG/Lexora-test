import React, { useState } from 'react';
import { motion } from 'motion/react';
import paper2Img from '../assets/paper2.png';
import arrowImg from '../assets/herosection/arrow.png';

interface SupportScheme {
  id: number;
  type: 'Lawyer' | 'Public';
  title: string;
}

const schemes: SupportScheme[] = [
  {
    id: 1,
    type: 'Lawyer',
    title: 'Feedback on Law Reforms',
  },
  {
    id: 2,
    type: 'Public',
    title: 'Alternative Dispute Resolution Schemes',
  },
  {
    id: 3,
    type: 'Lawyer',
    title: "Members' Support Schemes",
  },
  {
    id: 4,
    type: 'Lawyer',
    title: 'Future Lawyering Research Portal',
  },
];

const LegalSupport: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full bg-[#FAF9F7] py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden"
      aria-labelledby="legal-support-heading"
    >
      {/* Background paper texture overlay on the left */}
      <img
        src={paper2Img}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-2/3 sm:w-1/2 md:w-5/12 max-w-[550px] h-full pointer-events-none opacity-40 object-contain object-left-top z-0 -scale-x-100"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12 sm:mb-16">
          <div>
            <span className="text-[#8B1A1A] font-semibold text-xs sm:text-sm tracking-widest uppercase border-b-2 border-[#8B1A1A] pb-0.5 inline-block">
              LEGAL SUPPORT
            </span>
          </div>
          <div>
            <h3
              id="legal-support-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-normal text-[#222222] uppercase tracking-wide font-oswald"
            >
              GUIDING YOU THROUGH EVERY STEPS
            </h3>
          </div>
        </div>

        {/* Support Schemes List */}
        <div
          className="max-w-4xl mx-auto space-y-4 sm:space-y-5 my-10"
          onMouseLeave={() => setActiveId(null)}
          role="list"
          aria-label="Legal Support Schemes"
        >
          {schemes.map((scheme) => {
            const isActive = scheme.id === activeId;
            return (
              <div
                key={scheme.id}
                onMouseEnter={() => setActiveId(scheme.id)}
                onClick={() => setActiveId(scheme.id)}
                role="listitem"
                tabIndex={0}
                aria-label={`${scheme.type} Scheme: ${scheme.title}`}
                className="flex items-center gap-4 sm:gap-6 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9E8043]"
              >
                {/* Type Tag (Lawyer / Public) */}
                <div
                  className={`w-24 sm:w-32 py-3.5 sm:py-4 px-3 text-center text-sm sm:text-base font-sans font-medium flex-shrink-0 transition-colors duration-200 ${
                    isActive ? 'bg-[#262626] text-white' : 'bg-[#333333] text-white'
                  }`}
                >
                  {scheme.type}
                </div>

                {/* Scheme Title Bar */}
                <div
                  className={`flex-1 py-3.5 sm:py-4 px-6 sm:px-8 text-sm sm:text-base font-sans font-medium transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? 'bg-[#9E8043] text-white shadow-md'
                      : 'bg-[#E5E7EB] text-[#4A4A4A]'
                  }`}
                >
                  <span>{scheme.title}</span>

                  {isActive && (
                    <div className="flex items-center space-x-1.5 ml-4">
                      <span className="text-xs font-mono tracking-widest text-white/80"></span>
                      <img
                        src={arrowImg}
                        alt=""
                        aria-hidden="true"
                        className="h-3.5 w-auto object-contain transform group-hover:translate-x-1 transition-transform filter brightness-0 invert"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            aria-label="Explore more legal support schemes"
            className="inline-flex items-center gap-2.5 text-[#9E8043] font-semibold text-xs sm:text-sm tracking-widest uppercase hover:underline transition-all group focus:outline-none focus:ring-1 focus:ring-[#9E8043]"
          >
            <span>EXPLORE MORE SUPPORT</span>
            <span className="text-xs font-mono tracking-widest text-[#9E8043]"></span>
            <img
              src={arrowImg}
              alt=""
              aria-hidden="true"
              className="h-3 w-auto object-contain transform group-hover:translate-x-1 transition-transform filter brightness-0 sepia-[0.8] hue-rotate-[10deg] saturate-[300%]"
            />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default LegalSupport;
